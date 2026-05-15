import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaStar, FaWhatsapp, FaEnvelope, FaCode } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 md:py-24 px-6 md:px-8 overflow-hidden bg-luxury-black border-t border-luxury-gold/20">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <div className="w-12 h-[1px] bg-luxury-gold/30 self-center" />
          <FaMoon className="text-4xl text-luxury-gold rotate-[-45deg]" />
          <div className="w-12 h-[1px] bg-luxury-gold/30 self-center" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading text-gradient-gold mb-8 px-4"
        >
          Thank you for being part of our blessed day
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <FaStar className="text-luxury-gold/50 text-xs" />
          <FaStar className="text-luxury-gold/50 text-sm" />
          <FaStar className="text-luxury-gold text-lg" />
          <FaStar className="text-luxury-gold/50 text-sm" />
          <FaStar className="text-luxury-gold/50 text-xs" />
        </motion.div>

        {/* Redesigned Developer Section - Modern Card Style */}
        <div className="mt-24 pt-16 border-t border-luxury-gold/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12"
          >
            <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center mb-4 text-luxury-gold">
              <FaCode />
            </div>
            <h3 className="text-lg md:text-xl uppercase tracking-[0.3em] text-luxury-gold/60 mb-2">Website Developed by</h3>
            <h4 className="text-3xl md:text-4xl font-heading text-gradient-gold mb-6">Zaro Tech</h4>
            <a 
              href="mailto:contactzarotech@gmail.com" 
              className="flex items-center gap-2 text-luxury-gold/80 hover:text-luxury-gold transition-colors"
            >
              <FaEnvelope className="text-sm" />
              <span className="tracking-widest text-sm">contactzarotech@gmail.com</span>
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Developer Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl border border-luxury-gold/20 bg-luxury-emerald/5 backdrop-blur-sm flex flex-col items-center group hover:border-luxury-gold/50 transition-all duration-500"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold/40 mb-4">Developer</span>
              <h5 className="text-2xl font-heading text-luxury-ivory mb-8 group-hover:text-luxury-gold transition-colors">SIDDHARTHA</h5>
              <a 
                href="https://wa.me/917997793530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/20"
              >
                <FaWhatsapp className="text-xl" />
                <span className="font-semibold tracking-widest text-sm">79977 93530</span>
              </a>
            </motion.div>

            {/* Developer Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl border border-luxury-gold/20 bg-luxury-emerald/5 backdrop-blur-sm flex flex-col items-center group hover:border-luxury-gold/50 transition-all duration-500"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold/40 mb-4">Developer</span>
              <h5 className="text-2xl font-heading text-luxury-ivory mb-8 group-hover:text-luxury-gold transition-colors">ANIL</h5>
              <a 
                href="https://wa.me/917675957378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/20"
              >
                <FaWhatsapp className="text-xl" />
                <span className="font-semibold tracking-widest text-sm">7675957378</span>
              </a>
            </motion.div>
          </div>

          <p className="text-luxury-gold/40 font-light tracking-[0.2em] text-[10px] uppercase">
            © 2026 Zaro Tech. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating lanterns decoration */}
      <div className="absolute bottom-0 right-0 p-8 opacity-20 hidden md:block">
         <div className="w-24 h-40 border-2 border-luxury-gold rounded-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-luxury-gold blur-2xl animate-pulse" />
         </div>
      </div>
    </footer>
  );
};

export default Footer;
