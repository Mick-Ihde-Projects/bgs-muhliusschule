'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '@/style/animations';

interface CTABannerProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #40916C 100%)' }} className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl mb-4">{title}</h2>
          <p className="text-lg text-[#E8E8E8] max-w-xl mx-auto mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold cursor-pointer transition-transform hover:scale-[1.03]"
              style={{ background: '#F4A261', color: '#2B2D42' }}
            >
              {ctaLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold cursor-pointer border-2 border-white text-white transition-all hover:bg-white hover:text-[#2D6A4F]"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
