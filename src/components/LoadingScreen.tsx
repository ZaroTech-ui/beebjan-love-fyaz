import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaEnvelopeOpenText } from 'react-icons/fa';

const LoadingScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-[100] bg-luxury-black flex items-center justify-center p-6 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-md w-full relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(true)}
              className="relative p-8 md:p-12 text-center rounded-[2rem] glass-gold border border-luxury-gold/30 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.1)] cursor-pointer group"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-luxury-gold/20 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-luxury-gold/20 rounded-br-xl" />
              
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
                className="mb-8 relative inline-block"
              >
                <div className="absolute inset-0 bg-luxury-gold/20 blur-2xl rounded-full" />
                <FaMoon className="text-6xl md:text-7xl text-luxury-gold relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] rotate-[-15deg]" />
              </motion.div>

              <h2 className="text-xl tracking-[0.4em] uppercase text-luxury-gold/60 mb-2">Blessed Marriage of</h2>
              <h1 className="text-3xl md:text-4xl font-heading text-gradient-gold mb-8 leading-relaxed">
                Shaik Beebijan & Shaik Fayaz
              </h1>
              
              <div className="w-24 h-[1px] bg-luxury-gold/20 mx-auto mb-10" />

              <div className="relative flex items-center justify-center gap-3 text-luxury-gold font-bold tracking-[0.2em] uppercase text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                <FaEnvelopeOpenText className="text-lg animate-bounce" />
                <span>Click to Open Invitation</span>
              </div>
            </motion.div>

            {/* Floating particles or stars could be added here */}
          </motion.div>

          {/* Decorative background light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-emerald/5 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
