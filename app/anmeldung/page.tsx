import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { RegistrationForm } from '@/components/forms/RegistrationForm';
import { colors } from '@/style/colors';
import { FileText, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anmeldung – BGS Muhliusschule',
  description:
    'Online-Anmeldung für die Betreute Grundschule und den Offenen Ganztag an der Muhliusschule Kiel.',
};

export default async function AnmeldungPage() {
  return (
    <>
      <section
        className="py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.accent}10)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: colors.text }}>
            Anmeldung
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.muted }}>
            Sichern Sie jetzt den Betreuungsplatz für Ihr Kind – schnell, einfach und digital.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1 space-y-4">
              <ScrollReveal>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: `${colors.primary}08`, border: `1px solid ${colors.primary}20` }}
                >
                  <h3 className="font-heading font-bold text-lg mb-4" style={{ color: colors.text }}>
                    So funktioniert's
                  </h3>
                  <ol className="space-y-4">
                    {[
                      { step: '1', text: 'Formular ausfüllen' },
                      { step: '2', text: 'Absenden – wir bestätigen per E-Mail' },
                      { step: '3', text: 'Wir melden uns für das Anmeldegespräch' },
                    ].map((item) => (
                      <li key={item.step} className="flex items-start gap-3">
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white"
                          style={{ background: colors.primary }}
                        >
                          {item.step}
                        </span>
                        <span className="text-sm pt-0.5" style={{ color: colors.muted }}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
                >
                  <h3 className="font-heading font-bold text-base mb-3" style={{ color: colors.text }}>
                    Alternativ kontaktieren
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:04319015440"
                      className="flex items-center gap-2 text-sm cursor-pointer hover:underline"
                      style={{ color: colors.primary }}
                    >
                      <Phone className="w-4 h-4" />
                      0431 – 901 544 0
                    </a>
                    <a
                      href="mailto:betreute@bgs-muhliusschule.de"
                      className="flex items-center gap-2 text-sm cursor-pointer hover:underline"
                      style={{ color: colors.primary }}
                    >
                      <Mail className="w-4 h-4" />
                      betreute@bgs-muhliusschule.de
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div
                  className="rounded-2xl p-4"
                  style={{ background: `${colors.success}10`, border: `1px solid ${colors.success}30` }}
                >
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.success }} />
                    <p className="text-xs leading-relaxed" style={{ color: colors.muted }}>
                      Nach dem Absenden erhalten Sie eine Bestätigungs-E-Mail mit allen Angaben.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
