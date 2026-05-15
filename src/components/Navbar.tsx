import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaImages, FaEnvelope } from 'react-icons/fa';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', icon: <FaHome />, href: '#' },
  { name: 'Family', icon: <FaHeart />, href: '#family' },
  { name: 'Events', icon: <FaCalendarAlt />, href: '#timeline' },
  { name: 'Venue', icon: <FaMapMarkerAlt />, href: '#venue' },
  { name: 'Gallery', icon: <FaImages />, href: '#gallery' },
  { name: 'RSVP', icon: <FaEnvelope />, href: '#rsvp' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 hidden md:block",
          isScrolled ? "py-4 px-8" : "py-8 px-12"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-500",
          isScrolled ? "glass-gold px-8 py-3 shadow-lg" : "bg-transparent"
        )}>
          <div className="text-2xl font-heading text-luxury-gold tracking-tighter">
            B <span className="text-luxury-ivory">&</span> F
          </div>
          
          <div className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] text-luxury-ivory/70 hover:text-luxury-gold transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-[400px]">
        <div className="glass-gold px-6 py-4 rounded-3xl shadow-2xl flex justify-between items-center border border-luxury-gold/30">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-luxury-gold/70 hover:text-luxury-gold transition-colors flex flex-col items-center gap-1"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] uppercase tracking-tighter">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
