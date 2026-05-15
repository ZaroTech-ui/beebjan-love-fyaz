import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { cn } from '../lib/utils';

const FamilyCard: React.FC<{ title: string; parents: string; role: string }> = ({ title, parents, role }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-luxury-gold/10 blur-xl group-hover:bg-luxury-gold/20 transition-all duration-700 rounded-3xl" />
    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-luxury-gold/50 via-luxury-gold/10 to-luxury-gold/50">
      <div className="bg-luxury-black/90 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-6 md:p-12 text-center border border-white/5 h-full flex flex-col justify-center">
        <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4 block">
          {role}
        </span>
        <h3 className="text-2xl md:text-4xl font-heading text-luxury-ivory mb-4 md:mb-6">
          {title}
        </h3>
        <div className="w-10 h-[1px] bg-luxury-gold/30 mx-auto mb-4 md:mb-6" />
        <p className="text-luxury-gold-light text-base md:text-xl font-light leading-relaxed">
          {parents}
        </p>
      </div>
    </div>
  </motion.div>
);

const Family: React.FC = () => {
  return (
    <Section id="family" subtitle="Blessed Generations" title="Family Members">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <FamilyCard 
          role="Bride Family"
          title="Shaik Beebijan"
          parents="Mr. Shaik Basha & Mrs. Mamoola"
        />
        <FamilyCard 
          role="Groom Family"
          title="Shaik Fayaz"
          parents="Mr. Shaik Chinna Masthan & Mrs. Karimunnisa"
        />
      </div>
    </Section>
  );
};

export default Family;
