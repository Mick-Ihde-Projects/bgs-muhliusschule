'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Zap, Users, Shield, UtensilsCrossed, Sun, Clock } from 'lucide-react';
import { services } from '@/static/services';
import { colors } from '@/style/colors';
import { stagger, cardPopup } from '@/style/animations';
import { SectionHeading } from '@/components/ui/section-heading';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, BookOpen, Zap, Users, Shield, UtensilsCrossed, Sun, Clock,
};

export function FeatureCards() {
  return (
    <section className="py-20" style={{ background: colors.background }}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Was wir bieten"
          subtitle="Umfassende Betreuung für Grundschulkinder – mit Herz und Kompetenz"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Heart;
            return (
              <motion.div
                key={service.id}
                variants={cardPopup}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}
                className="rounded-2xl p-6 transition-shadow"
                style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${colors.primary}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: colors.primary } as React.CSSProperties} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: colors.text }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: colors.muted }}>
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    href={service.link}
                    className="text-sm font-semibold cursor-pointer hover:underline"
                    style={{ color: colors.primary }}
                  >
                    Mehr erfahren →
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
