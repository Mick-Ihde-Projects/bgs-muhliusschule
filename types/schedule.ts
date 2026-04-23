export interface ScheduleEntry {
  id: string;
  grade: string;
  startTime: string;
  endTime: string;
  description?: string;
}

export interface HolidayCare {
  hours: string;
  days: string;
  note?: string;
}

export interface ClosedPeriod {
  label: string;
  description?: string;
}
