import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Family from './components/Family';
import Timeline from './components/Timeline';
import Venue from './components/Venue';
import Story from './components/Story';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  useEffect(() => {
    // Smooth Scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative bg-luxury-black text-luxury-ivory selection:bg-luxury-gold selection:text-luxury-black">
      <LoadingScreen />
      <Navbar />
      <MusicPlayer />
      
      <div className="relative">
        <Hero />
        
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-luxury-emerald/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-luxury-gold/5 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10">
          <Family />
          <Story />
          <Timeline />
          <Gallery />
          <Venue />
          <RSVP />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
