'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const skillBarsRef = useRef([]);

  useEffect(() => {
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    // Fade-in and slide-in animation for text and image
    aboutTimeline
      .fromTo(
        sectionRef.current.querySelector('.about-text'),
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
      )
      .fromTo(
        sectionRef.current.querySelector('.about-image'),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
        '<' // Start this animation at the same time as the previous one
      );

    // Skill bar animations
    skillBarsRef.current.forEach((bar, i) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        { width: bar.dataset.width, duration: 1.2, delay: i * 0.3, ease: 'power2.out' }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="about-image w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full shadow-lg flex-shrink-0 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Text */}
          <div className="about-text text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hi, I'm Gunnu! A passionate graphic designer with expertise in
              creating visually compelling designs that tell stories and captivate
              audiences. My journey includes collaborating with top brands and
              creating innovative solutions.
            </p>

            {/* Key Achievements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div>
                {/* Skill Bars */}
                <div className="mb-4">
                  <div className="text-sm font-medium">Adobe Photoshop</div>
                  <div className="w-full h-3 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                      ref={(el) => (skillBarsRef.current[0] = el)}
                      data-width="90%"
                      className="h-full bg-pink-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium">Adobe Illustrator</div>
                  <div className="w-full h-3 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                      ref={(el) => (skillBarsRef.current[1] = el)}
                      data-width="85%"
                      className="h-full bg-purple-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium">Figma</div>
                  <div className="w-full h-3 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                      ref={(el) => (skillBarsRef.current[2] = el)}
                      data-width="75%"
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <button className="mt-6 px-6 py-3 text-lg font-bold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-400 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
