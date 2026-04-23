'use client';

import { motion } from 'framer-motion';
import { colors } from '@/style/colors';
import { stagger, counterUp } from '@/style/animations';

const stats = [
  { value: '2001', label: 'Seit diesem Jahr betreuen wir Grundschulkinder', suffix: '' },
  { value: '60+', label: 'Jahre Vereinsgeschichte (gegr. 1963)', suffix: '' },
  { value: '17:00', label: 'Uhr – täglich bis hierhin betreut', suffix: '' },
  { value: '100%', label: 'Herz für Kinder und Familien', suffix: '' },
];

export function StatsCounter() {
  return (
    <section
      className="py-16"
      style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={counterUp}>
              <div
                className="font-heading font-bold mb-2"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: colors.textLight }}
              >
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-sm" style={{ color: `${colors.textLight}bb` }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
