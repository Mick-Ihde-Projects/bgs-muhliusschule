'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/static/navigation';
import { colors } from '@/style/colors';
import { slideDown } from '@/style/animations';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg cursor-pointer"
        style={{ color: colors.text }}
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideDown}
            className="fixed inset-x-0 top-16 z-50 shadow-xl"
            style={{ background: colors.surface }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium cursor-pointer hover:bg-[#2D6A4F]/10"
                  style={{ color: colors.text }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/anmeldung"
                onClick={() => setOpen(false)}
                className="mt-3 px-4 py-3 rounded-full text-center font-semibold text-white cursor-pointer"
                style={{ background: colors.accent }}
              >
                Jetzt anmelden
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
