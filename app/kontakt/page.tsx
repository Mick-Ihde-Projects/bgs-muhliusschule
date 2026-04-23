import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { colors } from '@/style/colors';
import { CONTACT, ORGANIZATION } from '@/static/constants';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt – BGS Muhliusschule',
  description:
    'Kontaktformular, Adresse, Anfahrt und alle Kontaktdaten der Betreuten Grundschule Muhliusschule Kiel.',
};

export default async function KontaktPage() {
  return (
    <>
      <section
        className="py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: colors.text }}>
            Kontakt
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.muted }}>
            Wir freuen uns auf Ihre Nachricht – sprechen Sie uns einfach an!
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <ScrollReveal>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
                >
                  <h3 className="font-heading font-bold text-xl mb-5" style={{ color: colors.text }}>
                    Unsere Kontaktdaten
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${colors.primary}15` }}
                      >
                        <MapPin className="w-5 h-5" style={{ color: colors.primary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-0.5" style={{ color: colors.text }}>Adresse</p>
                        <p className="text-sm" style={{ color: colors.muted }}>
                          {ORGANIZATION.address.street}<br />
                          {ORGANIZATION.address.postalCode} {ORGANIZATION.address.city}
                        </p>
                        <p className="text-xs mt-1" style={{ color: colors.muted }}>
                          {ORGANIZATION.address.note}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${colors.primary}15` }}
                      >
                        <Phone className="w-5 h-5" style={{ color: colors.primary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.text }}>Telefon</p>
                        <a
                          href="tel:04319015440"
                          className="block text-sm cursor-pointer hover:underline"
                          style={{ color: colors.primary }}
                        >
                          {CONTACT.phone}
                        </a>
                        <a
                          href="tel:017662230020"
                          className="block text-sm cursor-pointer hover:underline"
                          style={{ color: colors.primary }}
                        >
                          {CONTACT.mobile}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${colors.primary}15` }}
                      >
                        <Mail className="w-5 h-5" style={{ color: colors.primary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.text }}>E-Mail</p>
                        <a
                          href={`mailto:${CONTACT.emails.betreuung}`}
                          className="block text-sm cursor-pointer hover:underline"
                          style={{ color: colors.primary }}
                        >
                          {CONTACT.emails.betreuung}
                        </a>
                        <a
                          href={`mailto:${CONTACT.emails.buero}`}
                          className="block text-sm cursor-pointer hover:underline"
                          style={{ color: colors.primary }}
                        >
                          {CONTACT.emails.buero}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${colors.primary}15` }}
                      >
                        <Clock className="w-5 h-5" style={{ color: colors.primary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.text }}>Bürozeiten</p>
                        <p className="text-sm" style={{ color: colors.muted }}>{CONTACT.officeHours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: `${colors.primary}08`, border: `1px solid ${colors.primary}20` }}
                >
                  <h3 className="font-heading font-bold text-lg mb-3" style={{ color: colors.text }}>
                    Anfahrt
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: colors.muted }}>
                    Die BGS befindet sich direkt auf dem Schulhof der Muhliusschule in der{' '}
                    <strong style={{ color: colors.text }}>Legienstraße 23, 24103 Kiel</strong>.
                    Direkt rechts in der ehemaligen Hausmeisterwohnung.
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Legienstr. 23, 24103 Kiel')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline"
                    style={{ color: colors.primary }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    In Google Maps öffnen
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.15}>
              <div
                className="rounded-2xl p-8"
                style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
              >
                <h3 className="font-heading font-bold text-xl mb-6" style={{ color: colors.text }}>
                  Nachricht senden
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
