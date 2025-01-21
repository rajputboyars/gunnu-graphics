'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const services = [
  { id: 1, icon: '🎨', title: 'Branding Design', description: 'Creating unique brand identities that stand out.' },
  { id: 2, icon: '🖌️', title: 'Illustration', description: 'Custom illustrations to bring ideas to life.' },
  { id: 3, icon: '📱', title: 'UI/UX Design', description: 'Designing intuitive and user-friendly interfaces.' },
  { id: 4, icon: '📚', title: 'Print Design', description: 'Crafting eye-catching brochures, posters, and more.' },
  { id: 5, icon: '🖼️', title: 'Photography & Retouching', description: 'Professional photography and image editing.' },
  { id: 6, icon: '🎥', title: 'Motion Graphics', description: 'Creating dynamic animations and videos for brands.' },
];

const ServicesSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.service-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => setIsLoaded(true),
      }
    );
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Graphic Design Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card relative p-6 bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex justify-center text-6xl text-pink-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center text-purple-700 mb-4">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
