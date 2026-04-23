'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/static/homeContent';
import { colors } from '@/style/colors';
import { stagger, cardPopup } from '@/style/animations';
import { SectionHeading } from '@/components/ui/section-heading';

export function TestimonialSection() {
  return (
    <section className="py-20" style={{ background: colors.background }}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Was Eltern sagen"
          subtitle="Echte Erfahrungen von Familien der Muhliusschule"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardPopup}
              className="rounded-2xl p-6 relative"
              style={{ background: colors.surface, border: `1px solid ${colors.muted}22` }}
            >
              <Quote
                className="absolute top-4 right-4 w-8 h-8 opacity-10"
                style={{ color: colors.primary }}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: colors.accent }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: colors.text }}>
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm" style={{ color: colors.text }}>
                  {testimonial.name}
                </p>
                <p className="text-xs" style={{ color: colors.muted }}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
