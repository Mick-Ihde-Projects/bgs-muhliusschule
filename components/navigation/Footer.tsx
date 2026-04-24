import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { ORGANIZATION, CONTACT, ROUTES } from '@/static/constants';
import { colors } from '@/style/colors';

export function Footer() {
  return (
    <footer style={{ background: colors.backgroundDark, color: colors.textLight }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm"
                style={{ background: colors.primary }}
              >
                BGS
              </div>
              <span className="font-heading font-bold text-lg">Muhliusschule</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
              Betreute Grundschule & Offener Ganztag an der Muhliusschule Kiel – seit 2001 ein sicherer
              Hafen für Grundschulkinder.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm" style={{ color: colors.muted }}>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                <span>
                  {ORGANIZATION.address.street}
                  <br />
                  {ORGANIZATION.address.postalCode} {ORGANIZATION.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: colors.accent }} />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors cursor-pointer">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: colors.accent }} />
                <a href={`mailto:${CONTACT.emails.betreuung}`} className="hover:text-white transition-colors cursor-pointer">
                  {CONTACT.emails.betreuung}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" style={{ color: colors.accent }} />
                <span>Büro: {CONTACT.officeHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm" style={{ color: colors.muted }}>
              {[
                { label: 'Über uns', href: ROUTES.ABOUT },
                { label: 'Die Betreuung', href: ROUTES.CARE },
                { label: 'Offener Ganztag', href: ROUTES.OGS },
                { label: 'Unser Team', href: ROUTES.TEAM },
                { label: 'Für Eltern', href: ROUTES.PARENTS },
                { label: 'Galerie', href: ROUTES.GALLERY },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm" style={{ color: colors.muted }}>
              <li>
                <Link href={ROUTES.IMPRINT} className="hover:text-white transition-colors cursor-pointer">
                  Impressum & Datenschutz
                </Link>
              </li>
              <li>
                <Link href={ROUTES.REGISTRATION} className="hover:text-white transition-colors cursor-pointer">
                  Anmeldung
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CONTACT} className="hover:text-white transition-colors cursor-pointer">
                  Kontakt
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs" style={{ color: colors.muted }}>
                {ORGANIZATION.name}
                <br />
                Gegründet {ORGANIZATION.founded}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs" >
          <div className="flex items-center justify-center px-2 py-4 text-center">
            <a
              href="https://mickihde.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              style={{ color: colors.muted }}
            >
              <span>
                Made with{' '}
                <span className="font-semibold" style={{ color: '#FF5C8A' }}>
                  ❤️
                </span>{' '}
                by Mick Ihde
              </span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>

          <div className="pt-6 text-center" style={{ borderTop: `1px solid ${colors.muted}33`, color: colors.muted }}>
            © {new Date().getFullYear()} {ORGANIZATION.name}. Alle Rechte vorbehalten.{' '}
            <Link href={ROUTES.IMPRINT} className="hover:text-white transition-colors cursor-pointer">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
