import type { Metadata } from 'next';
import { colors } from '@/style/colors';
import { ORGANIZATION, CONTACT, SITE_URL } from '@/static/constants';

export const metadata: Metadata = {
  title: 'Impressum & Datenschutz – BGS Muhliusschule',
  description: 'Impressum und Datenschutzerklärung der Betreuten Grundschule Muhliusschule Kiel.',
};

export default async function ImpressumPage() {
  return (
    <section className="py-20" style={{ background: colors.background }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading font-bold text-4xl mb-12" style={{ color: colors.text }}>
          Impressum & Datenschutz
        </h1>

        <div className="space-y-12">
          <div
            className="rounded-2xl p-8"
            style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
          >
            <h2 className="font-heading font-bold text-2xl mb-6" style={{ color: colors.text }}>
              Impressum
            </h2>
            <div className="space-y-4 text-base" style={{ color: colors.muted }}>
              <div>
                <p className="font-semibold" style={{ color: colors.text }}>Angaben gemäß § 5 TMG</p>
                <p className="mt-2">
                  {ORGANIZATION.name}<br />
                  {ORGANIZATION.address.street}<br />
                  {ORGANIZATION.address.postalCode} {ORGANIZATION.address.city}
                </p>
              </div>
              <div>
                <p className="font-semibold" style={{ color: colors.text }}>Vereinsregister</p>
                <p className="mt-1">Amtsgericht Kiel</p>
              </div>
              <div>
                <p className="font-semibold" style={{ color: colors.text }}>Kontakt</p>
                <p className="mt-1">
                  Telefon: {CONTACT.phone}<br />
                  E-Mail:{' '}
                  <a
                    href={`mailto:${CONTACT.emails.buero}`}
                    className="underline cursor-pointer"
                    style={{ color: colors.primary }}
                  >
                    {CONTACT.emails.buero}
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold" style={{ color: colors.text }}>Verantwortlich für den Inhalt (§ 55 RStV)</p>
                <p className="mt-1">
                  Vorstand des {ORGANIZATION.name}<br />
                  {ORGANIZATION.address.street}<br />
                  {ORGANIZATION.address.postalCode} {ORGANIZATION.address.city}
                </p>
              </div>
              <div>
                <p className="font-semibold" style={{ color: colors.text }}>Haftungsausschluss</p>
                <p className="mt-1 text-sm leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                  und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Für externe Links übernehmen
                  wir keine Haftung.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
          >
            <h2 className="font-heading font-bold text-2xl mb-6" style={{ color: colors.text }}>
              Datenschutzerklärung
            </h2>
            <div className="space-y-6 text-sm leading-relaxed" style={{ color: colors.muted }}>
              <div>
                <h3 className="font-heading font-semibold text-base mb-2" style={{ color: colors.text }}>
                  1. Verantwortliche Stelle
                </h3>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist der{' '}
                  <strong style={{ color: colors.text }}>{ORGANIZATION.name}</strong>,{' '}
                  {ORGANIZATION.address.street}, {ORGANIZATION.address.postalCode} {ORGANIZATION.address.city}.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-2" style={{ color: colors.text }}>
                  2. Erhobene Daten
                </h3>
                <p>
                  Beim Besuch unserer Website werden Server-Logfiles (IP-Adresse, Browsertyp, Referrer, Zeitstempel)
                  automatisch erfasst. Beim Ausfüllen von Formularen (Anmeldung, Kontakt) werden die eingegebenen
                  Daten zur Bearbeitung Ihres Anliegens verwendet.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-2" style={{ color: colors.text }}>
                  3. Zweck der Datenverarbeitung
                </h3>
                <p>
                  Ihre personenbezogenen Daten werden ausschließlich zur Bearbeitung von Anfragen und Anmeldungen
                  sowie zur Vertragserfüllung (Betreuungsvertrag) verwendet. Eine Weitergabe an Dritte erfolgt
                  nicht, es sei denn, dies ist gesetzlich vorgeschrieben.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-2" style={{ color: colors.text }}>
                  4. Ihre Rechte
                </h3>
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
                  Ihrer personenbezogenen Daten. Wenden Sie sich hierfür an{' '}
                  <a
                    href={`mailto:${CONTACT.emails.buero}`}
                    className="underline cursor-pointer"
                    style={{ color: colors.primary }}
                  >
                    {CONTACT.emails.buero}
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-2" style={{ color: colors.text }}>
                  5. Hosting
                </h3>
                <p>
                  Diese Website wird auf Servern in der Europäischen Union gehostet. Die Übertragung erfolgt
                  verschlüsselt via HTTPS.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-2" style={{ color: colors.text }}>
                  6. Cookies
                </h3>
                <p>
                  Wir verwenden nur technisch notwendige Cookies. Es werden keine Tracking- oder Marketing-Cookies
                  eingesetzt.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-2" style={{ color: colors.text }}>
                  7. Kontakt Datenschutz
                </h3>
                <p>
                  Bei Fragen zum Datenschutz wenden Sie sich an:{' '}
                  <a
                    href={`mailto:${CONTACT.emails.vorstand}`}
                    className="underline cursor-pointer"
                    style={{ color: colors.primary }}
                  >
                    {CONTACT.emails.vorstand}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
