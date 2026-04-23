# BGS Muhliusschule – Betreute Grundschule & Offener Ganztag in Kiel

Website für die **Betreute Grundschule (BGS) an der Muhliusschule Kiel**, betrieben vom Förderverein *Freunde und Förderer der Muhliusschule Kiel e.V.* (gegr. 1963).

## Über das Projekt

Komplette Marketing- und Informationswebsite für eine Kinderbetreuungseinrichtung in Kiel. 10 Seiten, digitales Anmeldeformular mit E-Mail-Versand, Bildergalerie mit Lightbox und vollständige SEO-Optimierung.

**Live-URL:** https://bgs-muhliusschule.de

## Seiten

| Route | Seite |
|---|---|
| `/` | Startseite – Hero, Features, Stats, Testimonials |
| `/ueber-uns` | Über uns – Geschichte (1963), Philosophie, Leitbild |
| `/betreuung` | Die Betreuung – Zeiten, Tagesablauf, AGs, Räume |
| `/offener-ganztag` | Offener Ganztag – OGS-Programm seit 2024 |
| `/team` | Unser Team – Leitung und Fachkräfte |
| `/eltern-info` | Für Eltern – ABC, Kosten, Mittagessen, Stay Informed |
| `/anmeldung` | Anmeldung – Digitales Formular mit E-Mail-Versand |
| `/galerie` | Bildergalerie – Lightbox, Kategorien |
| `/kontakt` | Kontakt – Formular, Adresse, Anfahrt |
| `/impressum` | Impressum & Datenschutz |

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + custom design system
- **UI:** shadcn/ui, Radix UI, Lucide Icons
- **Animation:** Framer Motion
- **Forms:** react-hook-form + Zod validation
- **Email:** Resend API
- **Security:** Rate limiting, input sanitization, honeypot

## Setup

```bash
npm install
npm run dev
```

### Environment Variables

```env
RESEND_API_KEY=re_...   # Für E-Mail-Versand via Resend
```

### Build

```bash
npm run build
npm start
```

## Projektstruktur

```
app/          # Next.js App Router pages & API routes
components/   # React components (home/, navigation/, cards/, forms/, gallery/, betreuung/, ui/)
static/       # Static data (team, schedule, activities, costs, faq, ...)
types/        # TypeScript interfaces
style/        # Design tokens (colors, animations, gradients, typography)
hooks/        # Custom React hooks
lib/          # Utilities
public/       # Static assets, robots.txt, llms.txt
```

## Kontakt

BGS an der Muhliusschule Kiel  
Legienstr. 23 · 24103 Kiel  
Tel: 0431 – 901 544 0  
betreute@bgs-muhliusschule.de
