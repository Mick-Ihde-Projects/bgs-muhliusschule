import { MetadataRoute } from 'next';
import { SITE_URL } from '@/static/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/ueber-uns', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/betreuung', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/offener-ganztag', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/team', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/eltern-info', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/anmeldung', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/galerie', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/kontakt', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/impressum', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
