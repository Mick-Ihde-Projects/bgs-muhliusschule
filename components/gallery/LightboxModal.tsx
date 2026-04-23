'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { GalleryImage } from '@/types/gallery';
import { colors } from '@/style/colors';
import { modalScale } from '@/style/animations';

interface LightboxModalProps {
  image: GalleryImage;
  onClose: () => void;
}

export function LightboxModal({ image, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.9)' }}
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full cursor-pointer transition-colors hover:bg-white/20"
          style={{ color: colors.textLight }}
          onClick={onClose}
          aria-label="Schließen"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div
          variants={modalScale}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative max-w-3xl w-full aspect-video rounded-2xl overflow-hidden"
          style={{ background: `${colors.primary}20` }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2" style={{ color: colors.textLight }}>
                {image.title || image.alt}
              </p>
              <p className="text-sm" style={{ color: `${colors.textLight}80` }}>
                Bildplatzhalter
              </p>
            </div>
          </div>
          {image.src && !image.src.includes('placeholder') && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          )}
        </motion.div>

        {image.title && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm font-medium" style={{ color: colors.textLight }}>
              {image.title}
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
