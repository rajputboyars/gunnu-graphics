'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1 });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition-all"
      >
        <i className="fas fa-arrow-up text-2xl"></i>
      </button>
    )
  );
};

export default BackToTopButton;
