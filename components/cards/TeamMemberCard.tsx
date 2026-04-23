'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User, Crown } from 'lucide-react';
import { TeamMember } from '@/types/team';
import { colors } from '@/style/colors';
import { cardPopup } from '@/style/animations';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      variants={cardPopup}
      whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      className="rounded-2xl p-6 text-center transition-shadow"
      style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
    >
      <div
        className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden"
        style={{ background: `${colors.primary}20` }}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover rounded-full"
          />
        ) : (
          <User className="w-10 h-10" style={{ color: colors.primary }} />
        )}
        {member.isLeitung && (
          <div
            className="absolute bottom-0 right-0 w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: colors.accent }}
          >
            <Crown className="w-3 h-3 text-white" />
          </div>
        )}
      </div>

      <h3 className="font-heading font-bold text-lg mb-1" style={{ color: colors.text }}>
        {member.name}
      </h3>
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
        style={{
          background: member.isLeitung ? `${colors.primary}15` : `${colors.secondary}15`,
          color: member.isLeitung ? colors.primary : colors.secondary,
        }}
      >
        {member.rolle}
      </span>
      {member.description && (
        <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
          {member.description}
        </p>
      )}
    </motion.div>
  );
}
