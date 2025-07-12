import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    // Function to adjust scroll position to account for fixed header
    const scrollWithOffset = (el) => {
        const headerOffset = 64; // Adjust this value to match your header height (in pixels)
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <HashLink 
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900" 
                smooth 
                to="/#about" 
                scroll={scrollWithOffset}
            >
                About
            </HashLink>
            <HashLink 
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900" 
                smooth 
                to="/#services" 
                scroll={scrollWithOffset}
            >
                Services
            </HashLink>
            <HashLink 
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900" 
                to="/contact#contact" 
                scroll={scrollWithOffset}
            >
                Contact Us
            </HashLink>
            <HashLink 
                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" 
                smooth 
                to="/get-demo#demo" 
                scroll={scrollWithOffset}
            >
                Demo our products
            </HashLink>
        </>
    )
}

export default NavLinks;