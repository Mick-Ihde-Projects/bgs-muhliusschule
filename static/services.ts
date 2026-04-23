import { Service } from '@/types/services';

export const services: Service[] = [
  {
    id: 'nachmittagsbetreuung',
    title: 'Nachmittagsbetreuung',
    description:
      'Verlässliche Betreuung von Montag bis Freitag ab Schulschluss bis 17:00 Uhr in sicherer, liebevoller Atmosphäre.',
    icon: 'Shield',
    link: '/betreuung',
  },
  {
    id: 'hausaufgaben',
    title: 'Hausaufgabenhilfe',
    description:
      'Tägliche Begleitung bei Hausaufgaben in Klassengruppen – mit Geduld und pädagogischem Fingerspitzengefühl.',
    icon: 'BookOpen',
    link: '/betreuung',
  },
  {
    id: 'mittagessen',
    title: 'Mittagessen',
    description:
      'Täglich frisch gekochtes Mittagessen von Soda & Bread – ohne Schweinefleisch, auf Allergien wird Rücksicht genommen.',
    icon: 'UtensilsCrossed',
    link: '/eltern-info',
  },
  {
    id: 'ags',
    title: 'AGs & Aktivitäten',
    description:
      'Vielfältige Arbeitsgemeinschaften: Basteln, Sport, Musik, Lesen, Theater und vieles mehr.',
    icon: 'Sparkles',
    link: '/betreuung',
  },
  {
    id: 'ferienbetreuung',
    title: 'Ferienbetreuung',
    description:
      'Optionale Ferienbetreuung Mo–Fr von 08:00–17:00 Uhr – außer in den letzten zwei Sommerferienwochen und Weihnachten.',
    icon: 'Sun',
    link: '/betreuung',
  },
  {
    id: 'ogs',
    title: 'Offener Ganztag',
    description:
      'Seit 2024 bieten wir auch den Offenen Ganztag mit erweitertem Tagesangebot und strukturiertem Programm.',
    icon: 'Clock',
    link: '/offener-ganztag',
  },
];
