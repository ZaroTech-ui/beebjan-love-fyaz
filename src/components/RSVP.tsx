import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your RSVP!');
    // Handle form submission logic here
  };

  return (
    <Section id="rsvp" subtitle="Confirm Your Attendance" title="RSVP">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-gold p-8 md:p-12 rounded-3xl border border-luxury-gold/30"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-luxury-gold">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-luxury-black/50 border border-luxury-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-ivory"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-luxury-gold">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-luxury-black/50 border border-luxury-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-ivory"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-luxury-gold">Number of Guests</label>
              <select
                className="w-full bg-luxury-black/50 border border-luxury-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-ivory appearance-none"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num} className="bg-luxury-black">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-luxury-gold">Message (Optional)</label>
              <textarea
                className="w-full bg-luxury-black/50 border border-luxury-gold/20 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-ivory min-h-[120px]"
                placeholder="A warm message for the couple..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-luxury w-full py-4 text-lg font-heading shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all"
            >
              Confirm Presence
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default RSVP;
