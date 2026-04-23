'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { heroContent } from '@/static/homeContent';
import { colors } from '@/style/colors';
import { heroHeadline, heroSubtext, heroCta } from '@/style/animations';

export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 60%, ${colors.success} 100%)` }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroCta}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: `${colors.surface}22`, color: colors.textLight }}
          >
            <MapPin className="w-4 h-4" style={{ color: colors.accent }} />
            Legienstr. 23 · 24103 Kiel
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={heroHeadline}
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={heroSubtext}
            className="text-lg md:text-xl mb-10 max-w-xl"
            style={{ color: colors.textLight, lineHeight: 1.7 }}
          >
            {heroContent.subtext}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroCta}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={heroContent.ctaLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg cursor-pointer transition-transform hover:scale-[1.03] shadow-lg"
              style={{ background: colors.accent, color: colors.text }}
            >
              {heroContent.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/betreuung"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg cursor-pointer border-2 border-white/60 text-white transition-all hover:bg-white/10"
            >
              Mehr erfahren
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 L0,40 Q300,0 600,40 Q900,80 1200,30 L1200,80 Z" fill={colors.background} />
        </svg>
      </div>
    </section>
  );
}
