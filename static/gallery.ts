import { GalleryImage, GalleryCategory } from '@/types/gallery';

export const galleryCategories: GalleryCategory[] = [
  { id: 'alle', label: 'Alle' },
  { id: 'raeume', label: 'Unsere Räume' },
  { id: 'aktivitaeten', label: 'Aktivitäten' },
  { id: 'ausfluege', label: 'Ausflüge' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'room-1',
    src: '/images/gallery/placeholder-room-1.jpg',
    alt: 'Unser Gruppenraum',
    category: 'raeume',
    title: 'Gruppenraum',
  },
  {
    id: 'room-2',
    src: '/images/gallery/placeholder-room-2.jpg',
    alt: 'Hausaufgabenraum',
    category: 'raeume',
    title: 'Hausaufgaben-Ecke',
  },
  {
    id: 'activity-1',
    src: '/images/gallery/placeholder-activity-1.jpg',
    alt: 'Kinder beim Basteln',
    category: 'aktivitaeten',
    title: 'Bastelaktion',
  },
  {
    id: 'activity-2',
    src: '/images/gallery/placeholder-activity-2.jpg',
    alt: 'Sport und Bewegung',
    category: 'aktivitaeten',
    title: 'Sportnachmittag',
  },
  {
    id: 'activity-3',
    src: '/images/gallery/placeholder-activity-3.jpg',
    alt: 'Gemeinsames Kochen',
    category: 'aktivitaeten',
    title: 'Koch-AG',
  },
  {
    id: 'trip-1',
    src: '/images/gallery/placeholder-trip-1.jpg',
    alt: 'Ausflug zum Park',
    category: 'ausfluege',
    title: 'Parkausflug',
  },
  {
    id: 'trip-2',
    src: '/images/gallery/placeholder-trip-2.jpg',
    alt: 'Museumsbesuch',
    category: 'ausfluege',
    title: 'Museumsbesuch',
  },
  {
    id: 'room-3',
    src: '/images/gallery/placeholder-room-3.jpg',
    alt: 'Spielbereich draußen',
    category: 'raeume',
    title: 'Außengelände',
  },
];
