import { Hero } from '@/components/home/Hero';
import { FeatureCards } from '@/components/home/FeatureCards';
import { StatsCounter } from '@/components/home/StatsCounter';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { CTABanner } from '@/components/ui/cta-banner';

export default async function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <StatsCounter />
      <TestimonialSection />
      <CTABanner
        title="Bereit für den nächsten Schritt?"
        description="Sichern Sie jetzt den Betreuungsplatz für Ihr Kind – wir freuen uns auf Ihre Familie!"
        ctaLabel="Jetzt anmelden"
        ctaHref="/anmeldung"
        secondaryLabel="Kontakt aufnehmen"
        secondaryHref="/kontakt"
      />
    </>
  );
}
