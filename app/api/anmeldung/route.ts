import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import PDFDocument from 'pdfkit';

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

async function generatePDF(data: any, sanitize: (v: unknown) => string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    // Title
    doc.fontSize(18).font('Helvetica-Bold').text('Anmeldeformular', { align: 'center' }).moveDown();

    // Kind
    doc.fontSize(12).font('Helvetica-Bold').text('Angaben zum Kind').moveDown(0.5);
    doc.fontSize(10).font('Helvetica')
      .text(`Name: ${sanitize(data.kindVorname)} ${sanitize(data.kindNachname)}`)
      .text(`Geburtsdatum: ${data.geburtsdatum}`)
      .text(`Klassenstufe: ${data.klassenstufe}`)
      .text(`Einschulungsdatum: ${data.einschulungsdatum}`)
      .moveDown();

    // Erziehungsberechtigte 1
    doc.fontSize(12).font('Helvetica-Bold').text('Erziehungsberechtigte/r 1').moveDown(0.5);
    doc.fontSize(10).font('Helvetica')
      .text(`Name: ${sanitize(data.eltern1Vorname)} ${sanitize(data.eltern1Nachname)}`)
      .text(`Telefon: ${sanitize(data.eltern1Telefon)}`)
      .text(`E-Mail: ${sanitize(data.eltern1Email)}`)
      .moveDown();

    // Erziehungsberechtigte 2 (if present)
    if (data.eltern2Vorname) {
      doc.fontSize(12).font('Helvetica-Bold').text('Erziehungsberechtigte/r 2').moveDown(0.5);
      doc.fontSize(10).font('Helvetica')
        .text(`Name: ${sanitize(data.eltern2Vorname)} ${sanitize(data.eltern2Nachname)}`)
        .text(`Telefon: ${sanitize(data.eltern2Telefon) || '–'}`)
        .moveDown();
    }

    // Adresse
    doc.fontSize(12).font('Helvetica-Bold').text('Adresse').moveDown(0.5);
    doc.fontSize(10).font('Helvetica')
      .text(`Straße: ${sanitize(data.strasse)}`)
      .text(`PLZ/Ort: ${data.plz} ${sanitize(data.ort)}`)
      .moveDown();

    // Betreuung
    doc.fontSize(12).font('Helvetica-Bold').text('Betreuung').moveDown(0.5);
    doc.fontSize(10).font('Helvetica')
      .text(`Betreuungsmodell: ${data.betreuungsmodell}`)
      .text(`Ferienbetreuung: ${data.ferienbetreuung ? 'Ja' : 'Nein'}`)
      .moveDown();

    // Weitere Informationen
    if (data.allergien || data.besonderheiten || data.abholberechtigte || data.notfallkontakt) {
      doc.fontSize(12).font('Helvetica-Bold').text('Weitere Informationen').moveDown(0.5);
      doc.fontSize(10).font('Helvetica');
      if (data.allergien) doc.text(`Allergien: ${sanitize(data.allergien)}`);
      if (data.besonderheiten) doc.text(`Besonderheiten: ${sanitize(data.besonderheiten)}`);
      if (data.abholberechtigte) doc.text(`Abholberechtigte: ${sanitize(data.abholberechtigte)}`);
      if (data.notfallkontakt) doc.text(`Notfallkontakt: ${sanitize(data.notfallkontakt)}`);
      doc.moveDown();
    }

    // SEPA (basic info, no actual IBAN displayed for privacy)
    doc.fontSize(12).font('Helvetica-Bold').text('Kontoinformationen').moveDown(0.5);
    doc.fontSize(10).font('Helvetica')
      .text(`Kontoinhaber: ${sanitize(data.kontoinhaber)}`)
      .text('IBAN: [Verschlüsselt gespeichert]')
      .moveDown();

    doc.end();
  });
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
      console.log('[RESEND] API key found, attempting to send email...');
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Generate PDF
      const pdfBuffer = await generatePDF(data, sanitize);

      const emailResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mickihde.bussiness@gmail.com',
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
        attachments: [
          {
            filename: `anmeldung_${sanitized.kindName.replace(/\s+/g, '_')}_${Date.now()}.pdf`,
            content: pdfBuffer.toString('base64'),
          },
        ],
      });
      console.log('[RESEND] Email sent:', emailResult);
    } else {
      console.log('[RESEND] No API key found - emails will not be sent');
    }
  } catch (error) {
    console.error('[RESEND] Error:', error);
    return NextResponse.json({ error: 'E-Mail-Versand fehlgeschlagen.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
