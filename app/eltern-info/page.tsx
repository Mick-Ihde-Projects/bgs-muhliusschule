import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CTABanner } from '@/components/ui/cta-banner';
import { AccordionElternABC } from '@/components/betreuung/AccordionElternABC';
import { CostOverview } from '@/components/betreuung/CostOverview';
import { colors } from '@/style/colors';
import { Smartphone, UtensilsCrossed, Percent } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Für Eltern – BGS Muhliusschule',
  description:
    'Eltern-ABC, Kosteninformationen, Sozialstaffel, Mittagessen und praktische Infos für Familien der BGS Muhliusschule Kiel.',
};

export default async function ElternInfoPage() {
  return (
    <>
      <section
        className="py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: colors.text }}>
            Für Eltern
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.muted }}>
            Alle wichtigen Informationen für Familien – vom ersten Tag bis zum täglichen Ablauf.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <ScrollReveal>
              <div
                className="rounded-2xl p-6 h-full"
                style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${colors.primary}15` }}
                >
                  <UtensilsCrossed className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: colors.text }}>
                  Mittagessen
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
                  Täglich frisch von <strong style={{ color: colors.text }}>Soda & Bread</strong>. Kein Schweinefleisch.
                  Allergien bitte im Anmeldeformular angeben – wir berücksichtigen sie selbstverständlich.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                className="rounded-2xl p-6 h-full"
                style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${colors.secondary}15` }}
                >
                  <Smartphone className="w-6 h-6" style={{ color: colors.secondary }} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: colors.text }}>
                  Stay Informed App
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
                  Bleiben Sie immer auf dem Laufenden mit der <strong style={{ color: colors.text }}>Stay Informed App</strong>.
                  Aktuelle Informationen, Neuigkeiten und Mitteilungen direkt auf Ihr Smartphone.
                  Zugangsdaten erhalten Sie bei der Anmeldung.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div
                className="rounded-2xl p-6 h-full"
                style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${colors.success}15` }}
                >
                  <Percent className="w-6 h-6" style={{ color: colors.success }} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: colors.text }}>
                  Ermäßigungen
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
                  <strong style={{ color: colors.text }}>2. Kind: 50% Ermäßigung</strong><br />
                  <strong style={{ color: colors.text }}>Ab 3. Kind: kostenlos</strong><br />
                  Sozialstaffel auf Anfrage – sprechen Sie uns einfach an.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Kosteninformationen"
              subtitle="Transparente Preise – Ermäßigungen auf Anfrage"
            />
            <CostOverview />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: `${colors.secondary}08` }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            title="Eltern-ABC"
            subtitle="Alles Wichtige von A bis Z – schnell und übersichtlich"
          />
          <AccordionElternABC />
        </div>
      </section>

      <CTABanner
        title="Noch Fragen?"
        description="Wir helfen gerne – kontaktieren Sie uns oder kommen Sie direkt ins Büro (Mo–Fr ab 11 Uhr)."
        ctaLabel="Kontakt aufnehmen"
        ctaHref="/kontakt"
        secondaryLabel="Zur Anmeldung"
        secondaryHref="/anmeldung"
      />
    </>
  );
}
