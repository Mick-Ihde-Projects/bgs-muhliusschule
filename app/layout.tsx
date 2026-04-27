import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/navigation/Footer';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { seoMetadata, jsonLd } from '@/static/homeContent';
import { SITE_URL } from '@/static/constants';

export const metadata: Metadata = {
  title: seoMetadata.title,
  description: seoMetadata.description,
  keywords: seoMetadata.keywords,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: seoMetadata.title,
    description: seoMetadata.description,
    url: SITE_URL,
    siteName: 'BGS Muhliusschule',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Nunito } from 'next/font/google'
import { Source_Sans_3 } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-nunito',
  display: 'swap',
})
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-source-sans-3',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`h-full ${nunito.variable} ${sourceSans3.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" data-scroll-behavior="smooth">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
