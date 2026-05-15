import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

const Venue: React.FC = () => {
  return (
    <Section id="venue" subtitle="Join Our Celebration" title="Wedding Venue">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl glass border border-luxury-gold/20"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-luxury-gold mb-6">
                <FaMapMarkerAlt className="animate-bounce" />
                <span className="uppercase tracking-widest text-sm font-semibold">Location Details</span>
              </div>
              <h3 className="text-3xl font-heading text-luxury-ivory mb-6">
                Uyyalapalli Village
              </h3>
              <div className="space-y-4 text-luxury-gold-light/80 mb-10">
                <p className="flex items-center gap-2">
                  <span>Kaluvai Mandal</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>Nellore District</span>
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=14.423000,79.389250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-luxury inline-flex items-center justify-center gap-2 group w-full md:w-auto"
              >
                <span>View Location</span>
                <FaDirections className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="h-[300px] md:h-auto relative group overflow-hidden">
              {/* Modern Map Container */}
              <div className="absolute inset-0 bg-luxury-emerald/10" />
              <iframe
                title="Wedding Venue Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.1718!2d79.3866!3d14.423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI1JzIyLjgiTiA3OcKwMjMnMjEuMyJF!5e0!3m2!1sen!2sin!4v1715694700000!5m2!1sen!2sin"
                className="w-full h-full grayscale-[0.5] contrast-[1.2] invert-[0.9] hue-rotate-[180deg] opacity-60 group-hover:opacity-90 transition-all duration-700 scale-110 group-hover:scale-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Decorative Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
              
              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-luxury-gold/40 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-luxury-gold/40 pointer-events-none" />
              
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative">
                  <div className="absolute -inset-8 bg-luxury-gold/20 blur-2xl animate-pulse rounded-full" />
                  <div className="w-16 h-16 rounded-full border border-luxury-gold/50 flex items-center justify-center bg-black/50 backdrop-blur-sm relative z-10">
                    <FaMapMarkerAlt className="text-2xl text-luxury-gold animate-bounce" />
                  </div>
                </div>
              </div>

              {/* Interactive Label */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-luxury-gold/30 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 rounded-full bg-luxury-gold animate-ping" />
                <span className="text-xs uppercase tracking-[0.2em] text-luxury-gold font-medium">Live Map View</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Venue;
