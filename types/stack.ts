export type Framework = 'Next.js' | 'React' | 'TypeScript' | 'Tailwind CSS';
export type UILibrary = 'shadcn/ui' | 'Radix UI' | 'Lucide Icons' | 'MUI';
export type FormLibrary = 'react-hook-form' | 'zod' | '@hookform/resolvers';
export type AnimationLibrary = 'Framer Motion';
export type PDFLibrary = 'jsPDF' | '@react-pdf/renderer';
export type EmailService = 'Resend' | 'Nodemailer';
export type SecurityLibrary = 'DOMPurify' | 'rate-limiter-flexible';
export type TestLibrary = 'Playwright';

export interface TechStack {
  framework: {
    name: string;
    version: string;
  };
  language: {
    name: 'TypeScript';
    version: string;
  };
  styling: {
    name: 'Tailwind CSS';
    version: string;
  };
  ui: UILibrary[];
  animation: AnimationLibrary;
  forms: FormLibrary[];
  pdf: PDFLibrary;
  email: EmailService;
  security: SecurityLibrary[];
  testing: TestLibrary;
}

export interface ProjectConfig {
  name: string;
  description: string;
  version: string;
  author: string;
  email: string;
  repository?: string;
  homepage?: string;
}
