'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/style/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`font-heading text-3xl font-bold md:text-4xl lg:text-5xl mb-4 ${
          light ? 'text-white' : 'text-[#2B2D42]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-[#E8E8E8]' : 'text-[#8D99AE]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
