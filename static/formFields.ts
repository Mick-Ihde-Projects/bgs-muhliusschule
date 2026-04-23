import { FormSection } from '@/types/formFields';

export const registrationFormSections: FormSection[] = [
  {
    title: 'Angaben zum Kind',
    fields: [
      { name: 'kindVorname', label: 'Vorname des Kindes', type: 'text', required: true, placeholder: 'Max' },
      { name: 'kindNachname', label: 'Nachname des Kindes', type: 'text', required: true, placeholder: 'Mustermann' },
      { name: 'geburtsdatum', label: 'Geburtsdatum', type: 'date', required: true },
      { name: 'klassenstufe', label: 'Klassenstufe', type: 'select', required: true, options: ['1', '2', '3', '4'] },
      { name: 'einschulungsdatum', label: 'Einschulungsdatum', type: 'date', required: true },
    ],
  },
  {
    title: 'Erziehungsberechtigte/r 1',
    fields: [
      { name: 'eltern1Vorname', label: 'Vorname', type: 'text', required: true },
      { name: 'eltern1Nachname', label: 'Nachname', type: 'text', required: true },
      { name: 'eltern1Telefon', label: 'Telefon', type: 'tel', required: true, placeholder: '0431 – 123 456' },
      { name: 'eltern1Email', label: 'E-Mail', type: 'email', required: true, placeholder: 'beispiel@mail.de' },
    ],
  },
  {
    title: 'Erziehungsberechtigte/r 2 (optional)',
    fields: [
      { name: 'eltern2Vorname', label: 'Vorname', type: 'text', required: false },
      { name: 'eltern2Nachname', label: 'Nachname', type: 'text', required: false },
      { name: 'eltern2Telefon', label: 'Telefon', type: 'tel', required: false },
    ],
  },
  {
    title: 'Adresse',
    fields: [
      { name: 'strasse', label: 'Straße & Hausnummer', type: 'text', required: true },
      { name: 'plz', label: 'PLZ', type: 'text', required: true, placeholder: '24103' },
      { name: 'ort', label: 'Ort', type: 'text', required: true, placeholder: 'Kiel' },
    ],
  },
  {
    title: 'Betreuung',
    fields: [
      { name: 'betreuungsmodell', label: 'Gewünschtes Betreuungsmodell', type: 'select', required: true, options: ['Betreute Grundschule', 'Offener Ganztag'] },
      { name: 'allergien', label: 'Allergien / Unverträglichkeiten', type: 'textarea', required: false, placeholder: 'Falls vorhanden...' },
      { name: 'besonderheiten', label: 'Besonderheiten / Anmerkungen', type: 'textarea', required: false },
      { name: 'abholberechtigte', label: 'Weitere Abholberechtigte', type: 'textarea', required: false, placeholder: 'Name, Telefonnummer...' },
      { name: 'notfallkontakt', label: 'Notfallkontakt (Name + Telefon)', type: 'text', required: true, placeholder: 'Maria Muster, 0176 – 123 456' },
    ],
  },
  {
    title: 'SEPA-Lastschriftmandat',
    fields: [
      { name: 'iban', label: 'IBAN', type: 'text', required: true, placeholder: 'DE00 0000 0000 0000 0000 00' },
      { name: 'kontoinhaber', label: 'Kontoinhaber', type: 'text', required: true },
    ],
  },
];
