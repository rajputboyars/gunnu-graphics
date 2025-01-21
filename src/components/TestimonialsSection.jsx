'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    company: 'Creative Studio',
    image: '/images/jane.jpg',
    testimonial: 'This design work truly transformed our brand! Excellent creativity and attention to detail.',
  },
  {
    id: 2,
    name: 'John Smith',
    company: 'Tech Innovators',
    image: '/images/john.jpg',
    testimonial: 'A wonderful experience! The team listened to our needs and delivered beyond expectations.',
  },
  {
    id: 3,
    name: 'Alice Brown',
    company: 'Design Solutions',
    image: '/images/alice.jpg',
    testimonial: 'A pleasure to work with! The designs were visually stunning, and they were very receptive to feedback.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Slide animation for testimonial change
    gsap.fromTo(
      '.testimonial-text',
      {
        opacity: 0,
        x: direction === 'next' ? 100 : -100, // Slide from left or right depending on the direction
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => setIsLoaded(true),
      }
    );
  }, [currentIndex, direction]);

  const nextTestimonial = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-10">What Our Clients Say</h2>

        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-3xl overflow-hidden">
            {/* Testimonial Text */}
            <div
              className="testimonial-text bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-1000"
              style={{ opacity: isLoaded ? '1' : '0' }}
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-lg italic text-gray-700 mb-4">{testimonials[currentIndex].testimonial}</p>
              <h3 className="text-xl font-semibold text-purple-700">{testimonials[currentIndex].name}</h3>
              <p className="text-gray-500">{testimonials[currentIndex].company}</p>
            </div>

            {/* Carousel Navigation */}
            <div className="absolute inset-0 flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-all transform hover:scale-110"
              >
                &#10094;
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-all transform hover:scale-110"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
