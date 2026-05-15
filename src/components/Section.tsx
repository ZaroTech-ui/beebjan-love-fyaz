import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className, title, subtitle }) => {
  return (
    <section id={id} className={cn("relative py-16 md:py-24 px-4 md:px-8", className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-16">
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium"
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-6xl font-heading text-gradient-gold mb-6"
              >
                {title}
              </motion.h2>
            )}
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-luxury-gold/30" />
              <div className="w-2 h-2 rounded-full bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,0.5)] rotate-45" />
              <div className="h-[1px] w-12 bg-luxury-gold/30" />
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
