import { ScheduleEntry, HolidayCare, ClosedPeriod } from '@/types/schedule';

export const scheduleEntries: ScheduleEntry[] = [
  {
    id: 'klasse-1-2',
    grade: 'Klasse 1 & 2',
    startTime: '12:00',
    endTime: '17:00',
    description: 'Nach der 4. Stunde – direkt nach Schulschluss',
  },
  {
    id: 'klasse-3-4',
    grade: 'Klasse 3 & 4',
    startTime: '13:00',
    endTime: '17:00',
    description: 'Nach der 5. Stunde – direkt nach Schulschluss',
  },
];

export const holidayCare: HolidayCare = {
  hours: '08:00 – 17:00 Uhr',
  days: 'Montag bis Freitag',
  note: 'Ferienbetreuung kann optional dazugebucht werden',
};

export const closedPeriods: ClosedPeriod[] = [
  {
    label: '4. + 5. Sommerferienwoche',
    description: 'Die letzten zwei Wochen der Sommerferien sind geschlossen',
  },
  {
    label: 'Weihnachtsferien im Dezember',
    description: 'Über die Weihnachtsferien bleibt die BGS geschlossen',
  },
];
