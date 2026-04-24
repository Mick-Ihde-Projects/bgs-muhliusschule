'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/static/navigation';
import { MobileMenu } from './MobileMenu';
import { colors } from '@/style/colors';

export function Navigation() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{ background: colors.surface, borderBottom: `1px solid ${colors.muted}22` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm"
              style={{ background: colors.primary }}
            >
              BGS
            </div>
            <span className="font-heading font-bold text-lg hidden sm:block" style={{ color: colors.text }}>
              Muhliusschule
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer hover:bg-[#2D6A4F]/10 hover:-translate-y-px ${isActive ? 'bg-[#2D6A4F]/10' : ''}`}
                  style={{
                    color: isActive ? colors.primary : colors.text,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/anmeldung"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white cursor-pointer transition-transform hover:scale-[1.03]"
              style={{ background: colors.accent }}
            >
              Jetzt anmelden
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
