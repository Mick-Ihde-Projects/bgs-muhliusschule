import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import { CTABanner } from '@/components/ui/cta-banner';
import { colors } from '@/style/colors';

export const metadata: Metadata = {
  title: 'Bildergalerie – BGS Muhliusschule',
  description:
    'Fotos aus dem Alltag der Betreuten Grundschule Muhliusschule Kiel – Räume, Aktivitäten und Ausflüge.',
};

export default async function GaleriePage() {
  return (
    <>
      <section
        className="py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: colors.text }}>
            Bildergalerie
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.muted }}>
            Einblicke in unseren Alltag – Räume, Aktivitäten und unvergessliche Ausflüge.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: colors.background }}>
        <div className="container mx-auto px-4">
          <ImageGallery />
        </div>
      </section>

      <CTABanner
        title="Begeistert?"
        description="Überzeugen Sie sich selbst und melden Sie Ihr Kind an – wir freuen uns auf Ihre Familie!"
        ctaLabel="Jetzt anmelden"
        ctaHref="/anmeldung"
        secondaryLabel="Kontakt aufnehmen"
        secondaryHref="/kontakt"
      />
    </>
  );
}
