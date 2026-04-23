import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CTABanner } from '@/components/ui/cta-banner';
import { TeamGrid } from '@/components/cards/TeamGrid';
import { colors } from '@/style/colors';

export const metadata: Metadata = {
  title: 'Unser Team – BGS Muhliusschule',
  description:
    'Lernen Sie das Team der Betreuten Grundschule Muhliusschule Kiel kennen – Leitung Thorben Schulz und Daniel Schmidt sowie unsere erfahrenen Fachkräfte.',
};

export default async function TeamPage() {
  return (
    <>
      <section
        className="py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.accent}10)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: colors.text }}>
            Unser Team
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.muted }}>
            Menschen mit Herz – erfahrene Pädagoginnen und Pädagogen, die jeden Tag für Ihre Kinder da sind.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <TeamGrid />

          <ScrollReveal>
            <div
              className="mt-16 max-w-3xl mx-auto rounded-2xl p-8 text-center"
              style={{ background: `${colors.primary}08`, border: `1px solid ${colors.primary}20` }}
            >
              <h3 className="font-heading font-bold text-xl mb-3" style={{ color: colors.text }}>
                FSJ & Praktikum
              </h3>
              <p className="text-base leading-relaxed" style={{ color: colors.muted }}>
                Wir bieten regelmäßig{' '}
                <strong style={{ color: colors.text }}>FSJ-Stellen</strong> und{' '}
                <strong style={{ color: colors.text }}>Praktikumsplätze</strong> an. Wenn Sie Interesse haben, Teil unseres
                Teams zu werden, melden Sie sich gerne über unser Kontaktformular.
              </p>
              <a
                href="/kontakt"
                className="inline-block mt-4 px-6 py-2 rounded-full font-semibold cursor-pointer transition-transform hover:scale-[1.03]"
                style={{ background: `${colors.primary}15`, color: colors.primary }}
              >
                Interesse melden
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        title="Lernen Sie uns persönlich kennen"
        description="Besuchen Sie uns oder nehmen Sie einfach Kontakt auf – wir freuen uns auf Sie!"
        ctaLabel="Kontakt aufnehmen"
        ctaHref="/kontakt"
        secondaryLabel="Zur Anmeldung"
        secondaryHref="/anmeldung"
      />
    </>
  );
}
