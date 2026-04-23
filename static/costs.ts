import { CostItem, SocialDiscount } from '@/types/costs';

export const costItems: CostItem[] = [
  {
    id: 'bgs-basis',
    label: 'Betreute Grundschule',
    amount: 'auf Anfrage',
    description: 'Nachmittagsbetreuung inkl. Mittagessen, Hausaufgabenhilfe & Aktivitäten',
    perMonth: true,
  },
  {
    id: 'ogs',
    label: 'Offener Ganztag',
    amount: 'auf Anfrage',
    description: 'Ganztagesbetreuung mit erweitertem Programm seit 2024',
    perMonth: true,
  },
  {
    id: 'ferien',
    label: 'Ferienbetreuung (optional)',
    amount: 'auf Anfrage',
    description: 'Mo–Fr 08:00–17:00 Uhr während der Schulferien',
    perMonth: false,
  },
];

export const socialDiscounts: SocialDiscount[] = [
  {
    label: '2. Kind',
    description: '50% Ermäßigung auf den regulären Beitrag',
  },
  {
    label: 'Ab dem 3. Kind',
    description: 'Kostenfreie Betreuung (vollständige Befreiung)',
  },
  {
    label: 'Sozialstaffel',
    description: 'Einkommensabhängige Ermäßigungen – bitte sprechen Sie uns persönlich an',
  },
];
