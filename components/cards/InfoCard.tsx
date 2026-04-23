'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { colors } from '@/style/colors';
import { cardPopup } from '@/style/animations';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: boolean;
}

export function InfoCard({ icon: Icon, title, description, accent = false }: InfoCardProps) {
  return (
    <motion.div
      variants={cardPopup}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl p-6"
      style={{
        background: accent
          ? `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`
          : colors.surface,
        border: `1px solid ${accent ? colors.primary + '30' : colors.muted + '22'}`,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${colors.primary}15` }}
      >
        <Icon className="w-6 h-6" style={{ color: colors.primary } as React.CSSProperties} />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2" style={{ color: colors.text }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
        {description}
      </p>
    </motion.div>
  );
}
