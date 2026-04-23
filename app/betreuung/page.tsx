import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CTABanner } from '@/components/ui/cta-banner';
import { TimelineSchedule } from '@/components/betreuung/TimelineSchedule';
import { DailySchedule } from '@/components/betreuung/DailySchedule';
import { ActivityGrid } from '@/components/cards/ActivityGrid';
import { colors } from '@/style/colors';

export const metadata: Metadata = {
  title: 'Die Betreuung – BGS Muhliusschule',
  description:
    'Betreuungszeiten, Tagesablauf, Räumlichkeiten, Hausaufgabenbetreuung, Aktivitäten und Ferienbetreuung der BGS Muhliusschule Kiel.',
};

export default async function BetreuungPage() {
  return (
    <>
      <section
        className="py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: colors.text }}>
            Die Betreuung
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.muted }}>
            Alles über unsere Betreuungsangebote – von Schulschluss bis 17:00 Uhr und in den Ferien.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Betreuungszeiten" centered={false} />
              <TimelineSchedule />
            </div>
            <div>
              <SectionHeading title="Tagesablauf" centered={false} />
              <DailySchedule />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: `${colors.secondary}08` }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Räume & Ausstattung"
            subtitle="Ein Zuhause für den Nachmittag – direkt auf dem Schulhof"
          />
          <ScrollReveal>
            <div
              className="max-w-3xl mx-auto rounded-2xl p-8 text-base leading-relaxed"
              style={{ background: colors.surface, color: colors.muted, border: `1px solid ${colors.muted}22` }}
            >
              <p className="mb-4">
                Unsere Räumlichkeiten befinden sich{' '}
                <strong style={{ color: colors.text }}>direkt auf dem Schulhof rechts in der ehemaligen Hausmeisterwohnung</strong>{' '}
                (Legienstr. 23, 24103 Kiel). Die kurzen Wege bedeuten: Kinder können ohne Aufwand nach der Schule
                zu uns kommen.
              </p>
              <p className="mb-4">
                Wir verfügen über gemütliche Gruppenräume, eine Hausaufgaben-Ecke, Kreativbereiche und Zugang zum
                Schulhof für Freispiel und Sport.
              </p>
              <p>
                Unsere Einrichtung ist kindgerecht gestaltet – warm, einladend und sicher.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="AGs & Aktivitäten"
            subtitle="Vielfältige Angebote für jedes Interesse und jede Altersgruppe"
          />
          <ActivityGrid />
        </div>
      </section>

      <CTABanner
        title="Platz sichern"
        description="Melden Sie Ihr Kind jetzt an – Plätze sind begrenzt!"
        ctaLabel="Zur Anmeldung"
        ctaHref="/anmeldung"
        secondaryLabel="Fragen? Kontakt"
        secondaryHref="/kontakt"
      />
    </>
  );
}
