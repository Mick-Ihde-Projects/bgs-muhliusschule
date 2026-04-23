export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

export interface ContactInfo {
  label: string;
  value: string;
  type: 'phone' | 'email' | 'address';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  description?: string;
}

export interface Schedule {
  day: string;
  startTime: string;
  endTime: string;
  description?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'select' | 'checkbox' | 'textarea';
  required: boolean;
  options?: string[];
  placeholder?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}
