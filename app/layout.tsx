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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
