import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { FaMoon, FaMosque, FaUtensils } from 'react-icons/fa';

const events = [
  {
    title: "Haldi Ceremony",
    date: "10-06-2026",
    day: "Wednesday",
    time: "Evening",
    icon: <FaMoon className="text-luxury-gold" />,
    description: "Traditional Haldi application with family and friends."
  },
  {
    title: "Nikah",
    date: "11 June 2026",
    day: "Thursday",
    time: "10:30 AM – 11:30 AM",
    icon: <FaMosque className="text-luxury-gold" />,
    description: "The sacred union under Allah's blessings."
  },
  {
    title: "Lunch",
    date: "11 June 2026",
    day: "Thursday",
    time: "12:00 Noon onwards",
    icon: <FaUtensils className="text-luxury-gold" />,
    description: "Join us for a grand celebratory lunch."
  }
];

const TimelineItem: React.FC<{ event: typeof events[0]; index: number }> = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 last:mb-0"
  >
    <div className={index % 2 === 0 ? "md:order-1 text-right" : "md:order-2"}>
      <div className={index % 2 === 0 ? "flex flex-col items-end" : "flex flex-col items-start"}>
        <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center mb-6 shadow-glow-slow">
          {event.icon}
        </div>
        <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-2">
          {event.date} • {event.day}
        </span>
        <h3 className="text-3xl font-heading text-luxury-ivory mb-2">{event.title}</h3>
        <p className="text-luxury-gold-light font-medium mb-4">{event.time}</p>
        <p className="text-luxury-ivory/60 max-w-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
    
    <div className="hidden md:flex items-center justify-center relative">
      <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-luxury-gold/30 to-transparent" />
      <div className="w-4 h-4 rounded-full bg-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10" />
    </div>
  </motion.div>
);

const Timeline: React.FC = () => {
  return (
    <Section id="timeline" subtitle="The Blessed Schedule" title="Event Timeline">
      <div className="relative pt-12">
        {events.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Timeline;
