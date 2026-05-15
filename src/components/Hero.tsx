import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Hero: React.FC = () => {
  const targetDate = new Date('2026-06-11T10:30:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with cinematic entrance */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black z-10" />
        <img
          src="/assets/hero-bg.png"
          alt="Islamic Wedding Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="arabic-text text-luxury-gold-light mb-8 italic"
        >
          In the Name of Allah, The Most Beneficent, The Most Merciful
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-sm md:text-base font-medium">
            Wedding Invitation
          </span>
          <div className="h-[1px] w-24 bg-luxury-gold mx-auto mt-2" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-5xl md:text-8xl font-heading mb-8 leading-tight"
        >
          <span className="block text-luxury-ivory">Shaik Beebijan</span>
          <span className="text-luxury-gold inline-block my-2">❤️</span>
          <span className="block text-luxury-ivory">Shaik Fayaz</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="text-center px-6 py-4 glass-gold rounded-2xl min-w-[100px]">
            <span className="block text-3xl font-heading text-luxury-gold">{timeLeft.days}</span>
            <span className="text-xs uppercase tracking-widest text-luxury-gold-light/70">Days</span>
          </div>
          <div className="text-center px-6 py-4 glass-gold rounded-2xl min-w-[100px]">
            <span className="block text-3xl font-heading text-luxury-gold">{timeLeft.hours}</span>
            <span className="text-xs uppercase tracking-widest text-luxury-gold-light/70">Hours</span>
          </div>
          <div className="text-center px-6 py-4 glass-gold rounded-2xl min-w-[100px]">
            <span className="block text-3xl font-heading text-luxury-gold">{timeLeft.minutes}</span>
            <span className="text-xs uppercase tracking-widest text-luxury-gold-light/70">Min</span>
          </div>
          <div className="text-center px-6 py-4 glass-gold rounded-2xl min-w-[100px]">
            <span className="block text-3xl font-heading text-luxury-gold">{timeLeft.seconds}</span>
            <span className="text-xs uppercase tracking-widest text-luxury-gold-light/70">Sec</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <p className="text-xl md:text-2xl font-heading text-luxury-gold-light mb-8">
            11 June 2026
          </p>
          <button className="btn-luxury group">
            <span className="relative z-10 font-medium tracking-widest uppercase text-sm">
              Open Invitation
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>

      {/* Floating lanterns/particles effect placeholder */}
      <div className="absolute inset-0 pointer-events-none">
        {/* We can add SVG lanterns here later */}
      </div>
    </section>
  );
};

export default Hero;
