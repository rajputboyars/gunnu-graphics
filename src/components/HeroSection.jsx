'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Split the headline text into spans
    const text = headlineRef.current.textContent;
    const splitText = text
      .split('')
      .map((char) => (char === ' ' ? '&nbsp;' : char))
      .map((char) => `<span class="inline-block">${char}</span>`)
      .join('');

    headlineRef.current.innerHTML = splitText;

    // Select all character spans
    const charSpans = headlineRef.current.querySelectorAll('span');

    // Animate the characters
    gsap.from(charSpans, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      delay: 3,
      duration: 1,
      ease: 'power2.out',
    });

    // Call-to-action button animation
    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 2.5,
      ease: 'elastic.out(1, 0.5)',
    });

    // Parallax background effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-b from-[#1A1A2E] to-[#0F3460] overflow-hidden">
      {/* Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-40"
      />

      {/* Content */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
        >
          Welcome to Gunnu Graphics
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Creativity brought to life.
        </p>

        <button
          ref={buttonRef}
          className="mt-8 px-6 py-3 text-lg font-bold text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-500 transition-all duration-300"
        >
          View My Work
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
