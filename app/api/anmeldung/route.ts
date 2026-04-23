import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const MAX_PER_HOUR = 3;

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600_000 });
    return true;
  }
  if (entry.count >= MAX_PER_HOUR) return false;
  entry.count++;
  return true;
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#x27;' }[c] ?? c));
}

const schema = z.object({
  kindVorname: z.string().min(2).max(100),
  kindNachname: z.string().min(2).max(100),
  geburtsdatum: z.string().min(1),
  klassenstufe: z.enum(['1', '2', '3', '4']),
  einschulungsdatum: z.string().min(1),
  eltern1Vorname: z.string().min(2).max(100),
  eltern1Nachname: z.string().min(2).max(100),
  eltern1Telefon: z.string().min(6).max(30),
  eltern1Email: z.string().email().max(200),
  eltern2Vorname: z.string().max(100).optional(),
  eltern2Nachname: z.string().max(100).optional(),
  eltern2Telefon: z.string().max(30).optional(),
  strasse: z.string().min(3).max(200),
  plz: z.string().regex(/^\d{5}$/),
  ort: z.string().min(2).max(100),
  betreuungsmodell: z.enum(['Betreute Grundschule', 'Offener Ganztag']),
  ferienbetreuung: z.boolean().default(false),
  allergien: z.string().max(500).optional(),
  besonderheiten: z.string().max(500).optional(),
  abholberechtigte: z.string().max(500).optional(),
  notfallkontakt: z.string().min(5).max(200),
  datenschutz: z.literal(true),
  sepaEinwilligung: z.literal(true),
  iban: z.string().regex(/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/),
  kontoinhaber: z.string().min(3).max(200),
  _honeypot: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Zu viele Anfragen. Bitte später erneut versuchen.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validierungsfehler.', details: parsed.error.flatten() }, { status: 422 });
  }

  const data = parsed.data;

  if (data._honeypot) {
    return NextResponse.json({ ok: true });
  }

  const sanitized = {
    kindName: `${sanitize(data.kindVorname)} ${sanitize(data.kindNachname)}`,
    eltern1: `${sanitize(data.eltern1Vorname)} ${sanitize(data.eltern1Nachname)}`,
    email: sanitize(data.eltern1Email),
    betreuungsmodell: data.betreuungsmodell,
  };

  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'BGS Muhliusschule <noreply@bgs-muhliusschule.de>',
        to: 'mickihde9@gmail.com', // betreute@bgs-muhliusschule.de
        subject: `Neue Anmeldung: ${sanitized.kindName}`,
        text: `
          Neue Anmeldung eingegangen:
                
          Kind: ${sanitized.kindName}
          Geburtsdatum: ${data.geburtsdatum}
          Klassenstufe: ${data.klassenstufe}
          Betreuungsmodell: ${data.betreuungsmodell}
          Ferienbetreuung: ${data.ferienbetreuung ? 'Ja' : 'Nein'}
                
          Erziehungsberechtigte/r 1:
          ${sanitize(data.eltern1Vorname)} ${sanitize(data.eltern1Nachname)}
          Tel: ${sanitize(data.eltern1Telefon)}
          E-Mail: ${sanitize(data.eltern1Email)}
                
          Adresse: ${sanitize(data.strasse)}, ${data.plz} ${sanitize(data.ort)}
                
          Notfallkontakt: ${sanitize(data.notfallkontakt)}
          Allergien: ${sanitize(data.allergien || '–')}
        `.trim(),
      });
    }
  } catch {
    return NextResponse.json({ error: 'E-Mail-Versand fehlgeschlagen.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
