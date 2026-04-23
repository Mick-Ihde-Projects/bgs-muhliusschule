export interface HeroSection {
  headline: string;
  subtext: string;
  cta: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface TestimonialCard {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
  rating?: number;
}

export interface CostItem {
  id: string;
  label: string;
  amount: number | string;
  description?: string;
}

export interface CostSocial {
  income: string;
  amount: number;
}

export interface ElternAbcEntry {
  letter: string;
  title: string;
  content: string;
}

export interface DailyScheduleEntry {
  time: string;
  activity: string;
  description?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  images: string[];
}

export interface FormStep {
  title: string;
  description?: string;
  fields: string[];
}

export interface RegistrationFormData {
  kindVorname: string;
  kindNachname: string;
  geburtsdatum: string;
  klassenstufe: string;
  einschulungsdatum: string;
  eltern1Vorname: string;
  eltern1Nachname: string;
  eltern1Telefon: string;
  eltern1Email: string;
  eltern2Vorname?: string;
  eltern2Nachname?: string;
  eltern2Telefon?: string;
  strasse: string;
  plz: string;
  ort: string;
  betreuungsmodell: string;
  ferienbetreuung: boolean;
  allergien?: string;
  besonderheiten?: string;
  abholberechtigte?: string;
  notfallkontakt: string;
  datenschutz: boolean;
  sepaEinwilligung: boolean;
  iban: string;
  kontoinhaber: string;
}
