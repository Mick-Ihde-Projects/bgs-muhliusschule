'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { galleryImages, galleryCategories } from '@/static/gallery';
import { colors } from '@/style/colors';
import { stagger, galleryZoom } from '@/style/animations';
import { LightboxModal } from './LightboxModal';
import { GalleryImage } from '@/types/gallery';

export function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState('alle');
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === 'alle'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all"
            style={{
              background: activeCategory === cat.id ? colors.primary : `${colors.primary}15`,
              color: activeCategory === cat.id ? colors.surface : colors.primary,
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        {filtered.map((image) => (
          <motion.div
            key={image.id}
            variants={galleryZoom}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            style={{ background: `${colors.primary}15` }}
            onClick={() => setSelected(image)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-medium" style={{ color: colors.primary }}>
                {image.title || image.alt}
              </span>
            </div>
            {image.src && !image.src.includes('placeholder') && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            )}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity flex items-end p-3"
              style={{ background: `linear-gradient(to top, ${colors.text}80, transparent)` }}
            >
              <span className="text-xs font-medium text-white">{image.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selected && (
        <LightboxModal image={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
