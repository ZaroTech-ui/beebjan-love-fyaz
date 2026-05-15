import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const images = [
  { src: '/assets/gallery-1.png', alt: 'Wedding Rings', size: 'large' },
  { src: '/assets/gallery-2.png', alt: 'Wedding Hall', size: 'medium' },
  { src: '/assets/hero-bg.png', alt: 'Lanterns', size: 'small' },
  { src: '/assets/gallery-1.png', alt: 'Details', size: 'medium' },
  { src: '/assets/gallery-2.png', alt: 'Decor', size: 'large' },
];

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" subtitle="Captured Moments" title="Photo Gallery">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-2xl border border-luxury-gold/10"
          >
            <div className="absolute inset-0 bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
              <span className="text-luxury-ivory font-heading text-xl tracking-widest uppercase">View</span>
            </div>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            {/* Islamic Frame Accent */}
            <div className="absolute inset-4 border border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
