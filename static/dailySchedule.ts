import { DailyScheduleEntry } from '@/types/dailySchedule';

export const dailySchedule: DailyScheduleEntry[] = [
  {
    id: 'ankunft',
    time: '12:00 / 13:00',
    title: 'Ankommen & Freispiel',
    description: 'Die Kinder kommen nach der Schule an und haben freie Zeit zum Spielen und Ausruhen.',
    icon: 'Door',
  },
  {
    id: 'mittagessen',
    time: '12:30 / 13:30',
    title: 'Mittagessen',
    description: 'Gemeinsames Mittagessen – täglich frisch von Soda & Bread, ohne Schweinefleisch.',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'pause',
    time: '13:00 / 14:00',
    title: 'Mittagspause & Freispiel',
    description: 'Ausruhen, freies Spielen drinnen und draußen.',
    icon: 'Sun',
  },
  {
    id: 'hausaufgaben',
    time: '14:00 / 14:30',
    title: 'Hausaufgabenzeit',
    description: 'Begleitete Hausaufgaben in Klassengruppen – freitags keine Pflicht.',
    icon: 'PenLine',
  },
  {
    id: 'angebote',
    time: '15:00 / 15:30',
    title: 'AGs & Aktivitäten',
    description: 'Wechselnde Arbeitsgemeinschaften, Basteln, Sport, Kreativprojekte und mehr.',
    icon: 'Sparkles',
  },
  {
    id: 'freizeit',
    time: '16:00',
    title: 'Freispiel & Abholen',
    description: 'Freies Spielen bis zur Abholung um 17:00 Uhr.',
    icon: 'Home',
  },
];
