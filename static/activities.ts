import { Activity } from '@/types/activities';

export const activities: Activity[] = [
  {
    id: 'basteln',
    title: 'Basteln & Kreativität',
    description: 'Kreative Projekte mit verschiedenen Materialien – Malen, Basteln, Gestalten.',
    icon: 'Palette',
    category: 'kreativ',
  },
  {
    id: 'sport',
    title: 'Sport & Bewegung',
    description: 'Toben, Ballspiele, Seilspringen und Bewegungsangebote im Freien.',
    icon: 'Dumbbell',
    category: 'sport',
  },
  {
    id: 'lesen',
    title: 'Lese-AG',
    description: 'Gemeinsames Lesen, Buchvorstellungen und Bibliotheksbesuche.',
    icon: 'BookOpen',
    category: 'ag',
  },
  {
    id: 'musik',
    title: 'Musik & Rhythmus',
    description: 'Singen, Tanzen und einfache Rhythmusinstrumente spielen.',
    icon: 'Music',
    category: 'ag',
  },
  {
    id: 'natur',
    title: 'Natur & Garten',
    description: 'Gartenarbeit, Naturerkundungen und kleine Experimente.',
    icon: 'Leaf',
    category: 'freizeit',
  },
  {
    id: 'spiele',
    title: 'Brettspiele & Rätsel',
    description: 'Gesellschaftsspiele, Puzzle, Rätsel und Denkspiele.',
    icon: 'Gamepad2',
    category: 'freizeit',
  },
  {
    id: 'kochen',
    title: 'Koch-AG',
    description: 'Einfache Gerichte und Snacks gemeinsam zubereiten.',
    icon: 'ChefHat',
    category: 'ag',
  },
  {
    id: 'theater',
    title: 'Theater & Rollenspiele',
    description: 'Fantasievolle Rollenspiele, Theaterstücke und Aufführungen.',
    icon: 'Drama',
    category: 'kreativ',
  },
];
