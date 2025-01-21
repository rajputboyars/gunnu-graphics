'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        // GSAP stagger animation for links
        gsap.from(linksRef.current, {
            opacity: 0,
            y: -20,
            stagger: 0.2,
            delay:3,
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

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 transition-all duration-300"
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="text-white font-bold text-2xl">
                    <a href="/">
                        <img src="/logo/logo.png" alt="logo" className='max-w-16 rounded-full' />
                    </a>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-white">
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
