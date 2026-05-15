import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Story: React.FC = () => {
  return (
    <Section id="story" subtitle="Our Journey" title="Love Story">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-12 relative inline-block"
        >
          <div className="absolute -inset-8 border border-luxury-gold/20 rounded-full animate-spin-slow pointer-events-none" />
          <div className="text-6xl md:text-8xl text-luxury-gold font-heading opacity-20 absolute -top-10 -left-10 select-none">“</div>
          <h3 className="text-3xl md:text-5xl font-heading text-luxury-ivory leading-relaxed px-8">
            How two souls are united by Allah’s blessings
          </h3>
          <div className="text-6xl md:text-8xl text-luxury-gold font-heading opacity-20 absolute -bottom-10 -right-10 select-none rotate-180">“</div>
        </motion.div>

        <div className="space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-luxury-gold-light/90 leading-loose italic font-light"
          >
            "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought."
            <br />
            <span className="block mt-4 text-sm font-medium uppercase tracking-[0.2em]">— Surah Ar-Rum [30:21]</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-8 py-8"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-luxury-gold/30" />
            <div className="text-luxury-gold text-2xl font-heading">Subhan Allah</div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-luxury-gold/30" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-luxury-ivory/70 leading-relaxed text-lg"
          >
            In the tapestry of life, woven with faith and destiny, two paths have gracefully converged into one beautiful journey. It was written in the stars, guided by divine will, that Beebijan and Shaik Fayaz would find their home in each other's hearts.
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

export default Story;
