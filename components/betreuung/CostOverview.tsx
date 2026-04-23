'use client';

import { motion } from 'framer-motion';
import { Euro, Users, Gift } from 'lucide-react';
import { costItems, socialDiscounts } from '@/static/costs';
import { colors } from '@/style/colors';
import { stagger, cardPopup } from '@/style/animations';

export function CostOverview() {
  return (
    <div className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {costItems.map((item) => (
          <motion.div
            key={item.id}
            variants={cardPopup}
            className="rounded-2xl p-6 text-center"
            style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
          >
            <div
              className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: `${colors.primary}15` }}
            >
              <Euro className="w-6 h-6" style={{ color: colors.primary }} />
            </div>
            <h3 className="font-heading font-bold text-base mb-2" style={{ color: colors.text }}>
              {item.label}
            </h3>
            <p className="text-2xl font-heading font-bold mb-2" style={{ color: colors.primary }}>
              {item.amount}
            </p>
            {item.perMonth && (
              <span className="text-xs" style={{ color: colors.muted }}>
                pro Monat
              </span>
            )}
            {item.description && (
              <p className="text-xs mt-2" style={{ color: colors.muted }}>
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="rounded-2xl p-6" style={{ background: `${colors.success}10`, border: `1px solid ${colors.success}30` }}>
        <div className="flex items-center gap-3 mb-4">
          <Gift className="w-6 h-6" style={{ color: colors.success }} />
          <h3 className="font-heading font-bold text-lg" style={{ color: colors.text }}>
            Ermäßigungen
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socialDiscounts.map((discount, i) => (
            <div key={i} className="flex items-start gap-3">
              <Users className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.success }} />
              <div>
                <p className="font-semibold text-sm" style={{ color: colors.text }}>
                  {discount.label}
                </p>
                <p className="text-xs" style={{ color: colors.muted }}>
                  {discount.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
