export const SITE_NAME = 'BGS Muhliusschule';
export const SITE_DESCRIPTION = 'Betreute Grundschule & Offener Ganztag in Kiel';
export const SITE_URL = 'https://bgs-muhliusschule.de';

export const ORGANIZATION = {
  name: 'Freunde und Förderer der Muhliusschule Kiel e.V.',
  founded: 1963,
  address: {
    street: 'Legienstr. 23',
    postalCode: '24103',
    city: 'Kiel',
    country: 'DE',
    note: 'Direkt auf dem Schulhof rechts in der ehemaligen Hausmeisterwohnung',
  },
};

export const CONTACT = {
  phone: '0431 – 901 544 0',
  mobile: '0176 – 622 300 20',
  emails: {
    betreuung: 'betreute@bgs-muhliusschule.de',
    buero: 'buero@bgs-muhliusschule.de',
    vorstand: 'vorstand@bgs-muhliusschule.de',
  },
  officeHours: 'Mo–Fr ab 11:00 Uhr',
};

export const CARE_HOURS = {
  schoolDays: {
    grade1_2: 'ab 12:00 Uhr – 17:00 Uhr (nach der 4. Stunde)',
    grade3_4: 'ab 13:00 Uhr – 17:00 Uhr (nach der 5. Stunde)',
  },
  holidays: '08:00 – 17:00 Uhr (Mo–Fr)',
  closed: ['4. + 5. Woche Sommerferien', 'Weihnachtsferien im Dezember'],
};

export const TEAM_LEADS = ['Thorben Schulz', 'Daniel Schmidt'];

export const MEAL_PROVIDER = {
  name: 'Soda & Bread',
  note: 'Kein Schweinefleisch',
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/ueber-uns',
  CARE: '/betreuung',
  OGS: '/offener-ganztag',
  TEAM: '/team',
  PARENTS: '/eltern-info',
  REGISTRATION: '/anmeldung',
  GALLERY: '/galerie',
  CONTACT: '/kontakt',
  IMPRINT: '/impressum',
} as const;

export const NAV_ITEMS = [
  { label: 'Startseite', href: ROUTES.HOME },
  { label: 'Über uns', href: ROUTES.ABOUT },
  { label: 'Die Betreuung', href: ROUTES.CARE },
  { label: 'Offener Ganztag', href: ROUTES.OGS },
  { label: 'Unser Team', href: ROUTES.TEAM },
  { label: 'Für Eltern', href: ROUTES.PARENTS },
  { label: 'Anmeldung', href: ROUTES.REGISTRATION },
  { label: 'Galerie', href: ROUTES.GALLERY },
  { label: 'Kontakt', href: ROUTES.CONTACT },
];

export const SOCIAL_DISCOUNT = {
  secondChild: 0.5,
  thirdChildAndMore: 0,
  description: '2. Kind 50%, ab 3. Kind kostenlos',
};

export const MAX_FORM_SUBMISSIONS_PER_HOUR = 3;
