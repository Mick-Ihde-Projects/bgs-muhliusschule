'use client';

import { motion } from 'framer-motion';
import {
  DoorOpen, UtensilsCrossed, Sun, PenLine, Sparkles, Home, LucideIcon,
} from 'lucide-react';
import { dailySchedule } from '@/static/dailySchedule';
import { colors } from '@/style/colors';
import { stagger, fadeUp } from '@/style/animations';

const iconMap: Record<string, LucideIcon> = {
  Door: DoorOpen,
  UtensilsCrossed,
  Sun,
  PenLine,
  Sparkles,
  Home,
};

export function DailySchedule() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="space-y-4"
    >
      {dailySchedule.map((entry, index) => {
        const Icon = (entry.icon && iconMap[entry.icon]) ? iconMap[entry.icon] : Sun;
        const isLast = index === dailySchedule.length - 1;
        return (
          <motion.div key={entry.id} variants={fadeUp} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${colors.primary}15` }}
              >
                <Icon className="w-5 h-5" style={{ color: colors.primary } as React.CSSProperties} />
              </div>
              {!isLast && (
                <div className="w-0.5 h-8 mt-1" style={{ background: `${colors.primary}20` }} />
              )}
            </div>
            <div className="pb-4">
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${colors.primary}15`, color: colors.primary }}
                >
                  {entry.time}
                </span>
                <h4 className="font-heading font-semibold text-sm" style={{ color: colors.text }}>
                  {entry.title}
                </h4>
              </div>
              {entry.description && (
                <p className="text-sm" style={{ color: colors.muted }}>
                  {entry.description}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
