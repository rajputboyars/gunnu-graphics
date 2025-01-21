'use client';

import { useState } from 'react';
import { gsap } from 'gsap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({ name: '', email: '', message: '', file: null });

    // Trigger confirmation animation
    gsap.to('.confirmation-message', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
  };

  const handleFocus = (e) => {
    gsap.to(e.target, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  };

  const handleBlur = (e) => {
    gsap.to(e.target, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Contact Me</h2>

        <div className="flex justify-center mb-10">
          <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all shadow-md"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all shadow-md"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all shadow-md"
                  placeholder="Your Message"
                  rows="4"
                />
              </div>

              {/* File Upload Input */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="file">
                  Upload a File (Optional)
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              {/* Submit Button */}
              <div className="mb-4 text-center">
                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white py-2 rounded-lg shadow-lg hover:bg-purple-800 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>

              {/* Confirmation Message */}
              {isSubmitted && (
                <div className="confirmation-message text-center text-green-600 opacity-0 transform translate-y-10">
                  <p className="text-lg font-semibold">Your message has been sent successfully!</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all transform hover:scale-110"
          >
            <i className="fab fa-facebook-f text-3xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all transform hover:scale-110"
          >
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all transform hover:scale-110"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all transform hover:scale-110"
          >
            <i className="fab fa-linkedin-in text-3xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
