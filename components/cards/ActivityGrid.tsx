'use client';

import { motion } from 'framer-motion';
import {
  Palette, Dumbbell, BookOpen, Music, Leaf, Gamepad2, ChefHat, Drama, LucideIcon,
} from 'lucide-react';
import { activities } from '@/static/activities';
import { colors } from '@/style/colors';
import { stagger, cardPopup } from '@/style/animations';

const iconMap: Record<string, LucideIcon> = {
  Palette, Dumbbell, BookOpen, Music, Leaf, Gamepad2, ChefHat, Drama,
};

const categoryColors: Record<string, string> = {
  ag: colors.primary,
  freizeit: colors.secondary,
  kreativ: colors.accent,
  sport: colors.success,
};

export function ActivityGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {activities.map((activity) => {
        const Icon = iconMap[activity.icon] || Palette;
        const accentColor = categoryColors[activity.category] || colors.primary;
        return (
          <motion.div
            key={activity.id}
            variants={cardPopup}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl p-4"
            style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ background: `${accentColor}15` }}
            >
              <Icon className="w-5 h-5" style={{ color: accentColor } as React.CSSProperties} />
            </div>
            <h4 className="font-heading font-semibold text-sm mb-1" style={{ color: colors.text }}>
              {activity.title}
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: colors.muted }}>
              {activity.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
