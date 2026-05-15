import React, { useState, useRef, useEffect } from 'react';
import weddingMusic from '../assets/wedding-music.mp3';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio Initialization
  useEffect(() => {
    const audio = new Audio(weddingMusic);
    audio.loop = true;
    audioRef.current = audio;

    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
    });

    // Attempt to play automatically
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.warn("Autoplay prevented by browser.");
      });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Visibility handling
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isPlaying) {
          audioRef.current?.pause();
        }
      } else {
        if (isPlaying) {
          audioRef.current?.play().catch(e => console.warn("Auto-resume prevented:", e));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying]);

  // Global interaction listener to start audio if autoplay was blocked
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('scroll', startAudio);

    return () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('scroll', startAudio);
    };
  }, [isPlaying]);

  return null;
};

export default MusicPlayer;
