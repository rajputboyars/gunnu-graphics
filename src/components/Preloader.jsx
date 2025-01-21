'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.to('.preloader-logo', { opacity: 1, duration: 0.8, ease: 'power2.out' });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Duration of the preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="preloader z-50 fixed top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 flex justify-center items-center">
        <div className="preloader-logo opacity-0">
          <img src="/logo/logo.png" alt="Client Logo" className="w-24 h-24 animate-spin" />
        </div>
      </div>
    )
  );
};

export default Preloader;
