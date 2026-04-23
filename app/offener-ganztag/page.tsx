import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CTABanner } from '@/components/ui/cta-banner';
import { colors } from '@/style/colors';
import { Clock, BookOpen, Sparkles, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Offener Ganztag – BGS Muhliusschule',
  description:
    'Der Offene Ganztag (OGS) an der Muhliusschule Kiel – seit 2024 ein umfassendes Ganztagesangebot für Grundschulkinder.',
};

const ogsFeatures = [
  {
    icon: Clock,
    title: 'Ganztagesstruktur',
    description: 'Strukturierter Tagesablauf von der Ankunft bis zur Abholung mit festen Zeiten für Mahlzeiten, Hausaufgaben und Freizeit.',
  },
  {
    icon: BookOpen,
    title: 'Erweitertes Lernkonzept',
    description: 'Mehr Zeit für individuelle Förderung, Leseförderung und begleitetes Lernen im kleinen Gruppenrahmen.',
  },
  {
    icon: Sparkles,
    title: 'Breiteres Angebotsspektrum',
    description: 'Mehr AGs, Projekte und Kooperationsangebote mit Vereinen und außerschulischen Partnern.',
  },
  {
    icon: Users,
    title: 'Starke Gemeinschaft',
    description: 'Jahrgangsübergreifende Gruppen stärken den Zusammenhalt und das soziale Miteinander.',
  },
];

export default async function OffenerGanztagPage() {
  return (
    <>
      <section
        className="py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${colors.secondary}15, ${colors.success}15)` }}
      >
        <div className="container mx-auto px-4">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: `${colors.success}20`, color: colors.success }}
          >
            Neu seit 2024
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: colors.text }}>
            Offener Ganztag
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.muted }}>
            Ein erweitertes Ganztagesangebot für Grundschulkinder – mit mehr Struktur, mehr Angeboten und
            noch mehr Zeit für Ihre Kinder.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Was ist der OGS?"
            subtitle="Der Unterschied zur Betreuten Grundschule"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <ScrollReveal>
              <div
                className="rounded-2xl p-8 h-full"
                style={{ background: `${colors.primary}08`, border: `2px solid ${colors.primary}30` }}
              >
                <h3 className="font-heading font-bold text-xl mb-4" style={{ color: colors.primary }}>
                  Betreute Grundschule (BGS)
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: colors.muted }}>
                  {[
                    'Nachmittagsbetreuung ab Schulschluss',
                    'Klasse 1+2: 12:00–17:00 Uhr',
                    'Klasse 3+4: 13:00–17:00 Uhr',
                    'Mittagessen, Hausaufgaben, Freispiel',
                    'AGs und Aktivitäten',
                    'Optionale Ferienbetreuung',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: colors.primary }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                className="rounded-2xl p-8 h-full"
                style={{ background: `${colors.success}08`, border: `2px solid ${colors.success}30` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-heading font-bold text-xl" style={{ color: colors.success }}>
                    Offener Ganztag (OGS)
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: `${colors.success}20`, color: colors.success }}
                  >
                    Neu
                  </span>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: colors.muted }}>
                  {[
                    'Ganztagesangebot mit mehr Struktur',
                    'Erweitertes Tageskonzept',
                    'Mehr individuelle Förderangebote',
                    'Breiteres AG-Programm',
                    'Kooperationen mit Vereinen',
                    'Starke Gruppengemeinschaft',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: colors.success }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ogsFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${colors.secondary}15` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                  <h4 className="font-heading font-bold text-base mb-2" style={{ color: colors.text }}>
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <p className="text-base mb-4" style={{ color: colors.muted }}>
                Sie haben Fragen zum OGS-Angebot?
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold cursor-pointer transition-transform hover:scale-[1.03]"
                style={{ background: `${colors.primary}15`, color: colors.primary }}
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        title="OGS-Platz sichern"
        description="Der Offene Ganztag ist beliebt – melden Sie Ihr Kind frühzeitig an!"
        ctaLabel="Jetzt anmelden"
        ctaHref="/anmeldung"
        secondaryLabel="Mehr zur BGS"
        secondaryHref="/betreuung"
      />
    </>
  );
}
