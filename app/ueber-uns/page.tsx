import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CTABanner } from '@/components/ui/cta-banner';
import { colors } from '@/style/colors';
import { Heart, Users, BookOpen, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Über uns – BGS Muhliusschule',
  description:
    'Geschichte, Philosophie und pädagogisches Konzept der Betreuten Grundschule an der Muhliusschule Kiel. Gegründet 1963 als Förderverein.',
};

const values = [
  {
    icon: Heart,
    title: 'Mit Herzblut',
    description: 'Wir betreuen Kinder nicht nur – wir kümmern uns um sie mit ganzer Aufmerksamkeit und Wärme.',
  },
  {
    icon: Users,
    title: 'Gemeinschaft',
    description: 'Als Förderverein verbinden wir Eltern, Kinder und Pädagoginnen zu einer starken Gemeinschaft.',
  },
  {
    icon: BookOpen,
    title: 'Bildung & Förderung',
    description: 'Hausaufgaben, AGs und kreative Projekte fördern jedes Kind individuell nach seinen Stärken.',
  },
  {
    icon: Leaf,
    title: 'Nachhaltigkeit',
    description: 'Medienfreie Pädagogik, Naturerkundungen und gesundes Essen für eine gesunde Entwicklung.',
  },
];

export default async function UeberUnsPage() {
  return (
    <>
      <section className="py-20" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Über uns"
            subtitle="Seit über 60 Jahren engagiert für die Kinder der Muhliusschule Kiel"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="rounded-2xl p-8" style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}>
                <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: colors.text }}>
                  Unsere Geschichte
                </h3>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: colors.muted }}>
                  <p>
                    Der Verein <strong style={{ color: colors.text }}>Freunde und Förderer der Muhliusschule Kiel e.V.</strong>{' '}
                    wurde im Jahr <strong style={{ color: colors.text }}>1963</strong> gegründet – mit dem klaren Ziel, die
                    Muhliusschule und ihre Kinder zu unterstützen.
                  </p>
                  <p>
                    Seit dem Jahr <strong style={{ color: colors.text }}>2001</strong> betreiben wir die{' '}
                    <strong style={{ color: colors.text }}>Betreute Grundschule (BGS)</strong> an der Muhliusschule in Kiel.
                    Was als kleines Betreuungsangebot begann, ist heute eine verlässliche Institution für Hunderte von Familien.
                  </p>
                  <p>
                    Seit <strong style={{ color: colors.text }}>2024</strong> ergänzt der{' '}
                    <strong style={{ color: colors.text }}>Offene Ganztag (OGS)</strong> unser Angebot mit einem umfassenderen,
                    strukturierten Tagesangebot für Grundschulkinder.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl p-8" style={{ background: `${colors.primary}08`, border: `1px solid ${colors.primary}20` }}>
                <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: colors.text }}>
                  Unser Leitbild
                </h3>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: colors.muted }}>
                  <p>
                    Wir verstehen die BGS als einen{' '}
                    <strong style={{ color: colors.primary }}>Lern-, Spiel- und Lebensraum</strong> – einen sicheren Hafen,
                    in dem Kinder nach der Schule ankommen, auftanken und wachsen können.
                  </p>
                  <p>
                    Unser pädagogisches Konzept verbindet strukturierte Förderung mit freiem Spielen, kreative Projekte
                    mit Bewegung, Gemeinschaft mit individueller Begleitung.
                  </p>
                  <p>
                    Wir arbeiten eng mit der Schule und den Eltern zusammen – denn gute Betreuung gelingt nur im Team.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: `${colors.secondary}08` }}>
        <div className="container mx-auto px-4">
          <SectionHeading title="Unsere Werte" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${colors.primary}15` }}
                  >
                    <value.icon className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                  <h4 className="font-heading font-bold text-base mb-2" style={{ color: colors.text }}>
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: colors.background }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: `${colors.success}10`, border: `1px solid ${colors.success}30` }}
            >
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: colors.text }}>
                Den Verein unterstützen
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: colors.muted }}>
                Als gemeinnütziger Verein freuen wir uns über jede Unterstützung. Spenden helfen uns, das Angebot
                für die Kinder weiterzuentwickeln und auf hohem Niveau zu halten.
              </p>
              <div
                className="inline-block rounded-xl px-6 py-4"
                style={{ background: colors.surface, border: `1px solid ${colors.muted}33` }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: colors.text }}>Spendenkonto</p>
                <p className="text-sm font-mono" style={{ color: colors.primary }}>
                  Freunde und Förderer der Muhliusschule Kiel e.V.
                </p>
                <p className="text-xs mt-1" style={{ color: colors.muted }}>
                  Bitte IBAN beim Büro erfragen: buero@bgs-muhliusschule.de
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        title="Kommen Sie zu uns!"
        description="Überzeugen Sie sich selbst – besuchen Sie uns oder melden Sie Ihr Kind direkt an."
        ctaLabel="Anmeldung"
        ctaHref="/anmeldung"
        secondaryLabel="Kontakt aufnehmen"
        secondaryHref="/kontakt"
      />
    </>
  );
}
