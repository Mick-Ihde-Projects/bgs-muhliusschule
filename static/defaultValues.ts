import { RegistrationFormData } from '@/types/landing';

export const defaultRegistrationFormValues: Partial<RegistrationFormData> = {
  kindVorname: '',
  kindNachname: '',
  geburtsdatum: '',
  klassenstufe: '1',
  einschulungsdatum: '',
  eltern1Vorname: '',
  eltern1Nachname: '',
  eltern1Telefon: '',
  eltern1Email: '',
  eltern2Vorname: '',
  eltern2Nachname: '',
  eltern2Telefon: '',
  strasse: '',
  plz: '',
  ort: '',
  betreuungsmodell: 'Betreute Grundschule',
  ferienbetreuung: false,
  allergien: '',
  besonderheiten: '',
  abholberechtigte: '',
  notfallkontakt: '',
  datenschutz: false,
  sepaEinwilligung: false,
  iban: '',
  kontoinhaber: '',
};

export const betreuungsmodellOptions = ['Betreute Grundschule', 'Offener Ganztag'];

export const klassenstufeOptions = ['1', '2', '3', '4'];
