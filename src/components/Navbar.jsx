'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    const navRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        // GSAP stagger animation for links
        gsap.from(linksRef.current, {
            opacity: 0,
            y: -20,
            stagger: 0.2,
            delay: 3,
            duration: 1,
            ease: 'power2.out',
        });

        // Sticky shrinking/expanding navbar on scroll
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navRef.current.classList.add('bg-black', 'py-2');
                navRef.current.classList.remove('py-4');
            } else {
                navRef.current.classList.remove('bg-black', 'py-2');
                navRef.current.classList.add('py-4');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 transition-all duration-300"
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="text-white font-bold text-2xl">
                    <a href="/">
                        <img src="/logo/logo.png" alt="logo" className="max-w-16 rounded-full" />
                    </a>
                </div>

                {/* Hamburger Button for Mobile */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`${
                        isMenuOpen ? 'flex' : 'hidden'
                    } flex-col lg:flex lg:flex-row lg:space-x-6 text-white absolute lg:static top-16 left-0 right-0 bg-black lg:bg-transparent space-y-4 lg:space-y-0 p-6 lg:p-0`}
                >
                    {['Home', 'About', 'Portfolio', 'Contact'].map((link, index) => (
                        <li
                            key={index}
                            ref={(el) => (linksRef.current[index] = el)}
                            className="hover:text-yellow-500 transition-colors duration-300"
                        >
                            <a href={`#${link.toLowerCase()}`}>{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
