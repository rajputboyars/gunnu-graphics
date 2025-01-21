'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  useEffect(() => {
    // GSAP fade-in effect when the footer comes into view
    gsap.fromTo(
      '.footer-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.footer', start: 'top 80%' } }
    );
  }, []);

  return (
    <footer className="footer bg-gradient-to-r from-pink-500 to-purple-600 py-16">
      <div className="container mx-auto px-6 lg:px-16 footer-content">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-semibold">
            <span className="text-white">Gunnu</span> Graphics
          </div>

          {/* Quick Links */}
          <div className="text-white">
            <ul className="space-x-4 flex">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="text-white space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-facebook-f text-3xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in text-3xl"></i>
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Gunnu Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
