import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

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
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#x27;' }[c] ?? c));
}

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  telefon: z.string().max(30).optional(),
  betreff: z.string().min(3).max(200),
  nachricht: z.string().min(10).max(2000),
  datenschutz: z.literal(true),
  _honeypot: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Zu viele Anfragen.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validierungsfehler.' }, { status: 422 });
  }

  const data = parsed.data;

  if (data._honeypot) {
    return NextResponse.json({ ok: true });
  }

  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'BGS Muhliusschule <noreply@bgs-muhliusschule.de>',
        to: 'betreute@bgs-muhliusschule.de',
        replyTo: sanitize(data.email),
        subject: `Kontaktanfrage: ${sanitize(data.betreff)}`,
        text: `
Von: ${sanitize(data.name)} (${sanitize(data.email)})
Telefon: ${sanitize(data.telefon || '–')}
Betreff: ${sanitize(data.betreff)}

Nachricht:
${sanitize(data.nachricht)}
        `.trim(),
      });
    }
  } catch {
    return NextResponse.json({ error: 'E-Mail-Versand fehlgeschlagen.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
