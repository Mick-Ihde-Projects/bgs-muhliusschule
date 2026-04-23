'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/static/team';
import { TeamMemberCard } from './TeamMemberCard';
import { stagger } from '@/style/animations';

export function TeamGrid() {
  const leitung = teamMembers.filter((m) => m.isLeitung);
  const fachkraefte = teamMembers.filter((m) => !m.isLeitung);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="font-heading font-bold text-2xl text-center mb-6" style={{ color: '#2B2D42' }}>
          Leitung
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {leitung.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>

      <div>
        <h2 className="font-heading font-bold text-2xl text-center mb-6" style={{ color: '#2B2D42' }}>
          Fachkräfte
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fachkraefte.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
