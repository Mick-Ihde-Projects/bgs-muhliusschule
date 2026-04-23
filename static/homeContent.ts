import { HeroSection, FeatureCard, TestimonialCard } from '@/types/landing';

export const heroContent: HeroSection = {
  headline: 'Ein besonderer Ort zum Lernen, Spielen und Wachsen',
  subtext:
    'Die Betreute Grundschule an der Muhliusschule Kiel – seit 2001 ein sicherer Hafen für Ihr Kind nach dem Unterricht',
  cta: 'Jetzt anmelden',
  ctaLink: '/anmeldung',
};

export const featureCards: FeatureCard[] = [
  {
    id: 'betreuung',
    icon: 'Heart',
    title: 'Sichere Betreuung',
    description:
      'Verlässliche Nachmittagsbetreuung nach der Schule in einem liebevollen und sicheren Umfeld',
    link: '/betreuung',
  },
  {
    id: 'hausaufgaben',
    icon: 'BookOpen',
    title: 'Hausaufgabenhilfe',
    description:
      'Fachkundige Unterstützung bei Hausaufgaben in Klassengruppen nach dem Mittagessen',
    link: '/betreuung',
  },
  {
    id: 'aktivitaeten',
    icon: 'Zap',
    title: 'AGs & Aktivitäten',
    description:
      'Vielfältige Arbeitsgemeinschaften und kreative Aktivitäten für jedes Interesse',
    link: '/betreuung',
  },
  {
    id: 'gemeinschaft',
    icon: 'Users',
    title: 'Starke Gemeinschaft',
    description:
      'Ein Förderverein, das Ihre Familie unterstützt und von Herzen für die Kinder da ist',
    link: '/ueber-uns',
  },
];

export const testimonials: TestimonialCard[] = [
  {
    id: 'testimonial-1',
    name: 'Familie Müller',
    role: 'Eltern von zwei Kindern',
    content:
      'Unsere Kinder fühlen sich hier rundherum wohl und geborgen. Die Betreuer sind fantastisch und geben sich so viel Mühe!',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Julia Schmidt',
    role: 'Mutter von Klassenstufe 2',
    content:
      'Die Hausaufgabenhilfe ist super. Mein Sohn kommt entspannt nach Hause und hat seine Aufgaben schon gemacht.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Michael Petersen',
    role: 'Vater von zwei Kindern',
    content:
      'Der Förderverein macht einfach aus vollem Herzen. Man merkt, dass die wirklich für die Kinder da sind.',
    rating: 5,
  },
];

export const seoMetadata = {
  title: 'BGS Muhliusschule – Betreute Grundschule & Offener Ganztag in Kiel',
  description:
    'Betreute Grundschule an der Muhliusschule Kiel: Nachmittagsbetreuung, Hausaufgabenhilfe, AGs & Ferienbetreuung für Grundschulkinder. Jetzt Betreuungsplatz sichern!',
  keywords: [
    'Betreute Grundschule Kiel',
    'Offener Ganztag Kiel',
    'Kinderbetreuung Kiel',
    'Muhliusschule',
    'Nachmittagsbetreuung',
    'Hausaufgabenhilfe',
  ],
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'BGS an der Muhliusschule – Betreute Grundschule & Offener Ganztag',
  description:
    'Betreute Grundschule und Offener Ganztag an der Muhliusschule Kiel. Nachmittagsbetreuung, Hausaufgabenhilfe, Aktivitäten und Ferienbetreuung für Grundschulkinder.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Legienstr. 23',
    addressLocality: 'Kiel',
    postalCode: '24103',
    addressCountry: 'DE',
  },
  telephone: '+49 431 901 544 0',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '12:00',
      closes: '17:00',
    },
  ],
};
