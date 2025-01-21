'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);
const portfolioItems = [
  { id: 1, category: 'branding', image: '/portfolio/branding1.jpg' },
  { id: 2, category: 'illustration', image: '/portfolio/illustration1.jpg' },
  { id: 3, category: 'branding', image: '/portfolio/branding2.jpg' },
  { id: 4, category: 'illustration', image: '/portfolio/illustration2.jpg' },
  { id: 5, category: 'web design', image: '/portfolio/webdesign1.jpg' },
  { id: 6, category: 'web design', image: '/portfolio/webdesign2.jpg' },
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Staggered animations for gallery items
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power2.out' }
    );
  }, [selectedCategory]);

  useEffect(() => {
    const filtered =
      selectedCategory === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === selectedCategory);

    setFilteredItems(filtered);
  }, [selectedCategory]);

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const loadMore = () => {
    // Simulating load more functionality
    const moreItems = [
      { id: 7, category: 'branding', image: '/portfolio/branding3.jpg' },
      { id: 8, category: 'web design', image: '/portfolio/webdesign3.jpg' },
      { id: 9, category: 'illustration', image: '/portfolio/illustration3.jpg' },
    ];
    setFilteredItems((prevItems) => [...prevItems, ...moreItems]);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-10">Portfolio</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          {['all', 'branding', 'illustration', 'web design'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick(item.image)}
            >
              <img
                src={item.image}
                alt="Portfolio"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
                <p className="text-lg font-semibold">View Details</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-pink-500 text-white font-medium rounded-full"
          >
            Load More
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4 bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-3xl text-gray-600"
            >
              &times;
            </button>
            <img src={modalImage} alt="Portfolio" className="w-full h-auto rounded" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
