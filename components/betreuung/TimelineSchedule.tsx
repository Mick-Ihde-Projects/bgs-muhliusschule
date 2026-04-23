'use client';

import { motion } from 'framer-motion';
import { Clock, Sun, AlertCircle } from 'lucide-react';
import { scheduleEntries, holidayCare, closedPeriods } from '@/static/schedule';
import { colors } from '@/style/colors';
import { stagger, cardPopup } from '@/style/animations';

export function TimelineSchedule() {
  return (
    <div className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {scheduleEntries.map((entry) => (
          <motion.div
            key={entry.id}
            variants={cardPopup}
            className="rounded-2xl p-6"
            style={{ background: colors.surface, border: `2px solid ${colors.primary}30` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: `${colors.primary}15` }}
              >
                <Clock className="w-5 h-5" style={{ color: colors.primary }} />
              </div>
              <h3 className="font-heading font-bold text-lg" style={{ color: colors.text }}>
                {entry.grade}
              </h3>
            </div>
            <p className="font-semibold text-2xl font-heading mb-1" style={{ color: colors.primary }}>
              {entry.startTime} – {entry.endTime} Uhr
            </p>
            {entry.description && (
              <p className="text-sm" style={{ color: colors.muted }}>
                {entry.description}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardPopup}
        className="rounded-2xl p-6"
        style={{ background: `${colors.success}15`, border: `1px solid ${colors.success}30` }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Sun className="w-6 h-6" style={{ color: colors.success }} />
          <h3 className="font-heading font-bold text-lg" style={{ color: colors.text }}>
            Ferienbetreuung
          </h3>
        </div>
        <p className="font-semibold text-xl font-heading mb-1" style={{ color: colors.success }}>
          {holidayCare.hours} · {holidayCare.days}
        </p>
        {holidayCare.note && (
          <p className="text-sm" style={{ color: colors.muted }}>
            {holidayCare.note}
          </p>
        )}
      </motion.div>

      <div className="rounded-xl p-4" style={{ background: `${colors.warning}15` }}>
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.warning }} />
          <div>
            <p className="font-semibold text-sm mb-1" style={{ color: colors.text }}>
              Schließzeiten
            </p>
            <ul className="space-y-1">
              {closedPeriods.map((period, i) => (
                <li key={i} className="text-sm" style={{ color: colors.muted }}>
                  • {period.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
