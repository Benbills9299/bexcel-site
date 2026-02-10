"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const pathname = usePathname();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 10px for shadow effect
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      
      // Check if we're in hero section (first 100vh)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > heroHeight * 0.8) {
        setIsHeroSection(false);
      } else {
        setIsHeroSection(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background based on section
  const getNavbarBackground = () => {
    if (isHeroSection) {
      // In hero section - transparent/glass effect
      return isScrolled 
        ? 'bg-white/20 backdrop-blur-md shadow-sm' 
        : 'bg-transparent';
    } else {
      // In white background sections - solid white
      return 'bg-white shadow-md';
    }
  };

  // Determine text color based on section
  const getTextColor = () => {
    if (isHeroSection) {
      return 'text-white';
    } else {
      return 'text-gray-800';
    }
  };

  // Determine active link color based on section
  const getActiveColor = () => {
    if (isHeroSection) {
      return 'text-lime-400';
    } else {
      return 'text-lime-600';
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans ${getNavbarBackground()}`}>
      {/* KEY CHANGE: Consistent padding with Hero component */}
      <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* Navbar content - NO extra padding here */}
        <div className="flex justify-between items-center py-2 md:py-3">
          
          {/* Logo */}
          <div className="flex items-center z-50">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Bexcel Innovations Logo"
                className={`h-7 md:h-8 cursor-pointer transition-all duration-300 ${
                  isHeroSection ? '' : 'brightness-0'
                }`}
              />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className={`md:hidden relative w-7 h-7 focus:outline-none z-50 transition-colors duration-300 ${
              isHeroSection ? 'text-white' : 'text-gray-800'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
          >
            <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90" : "opacity-100"
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
            <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-lime-400 transition-colors duration-200 text-sm lg:text-base ${
                  pathname === link.href ? `${getActiveColor()} font-medium` : `${getTextColor()} font-normal hover:${getActiveColor().replace('text-', 'text-')}`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu - Always white background */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 pt-14">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content - Always white */}
            <div className="relative mx-3 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <nav className="flex flex-col p-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center hover:bg-gray-100 rounded-xl p-2 mb-1 transition-all duration-300 ${
                      pathname === link.href ? 'bg-gray-100' : ''
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 transition-opacity duration-300 ${
                      pathname === link.href 
                        ? 'opacity-100 bg-lime-600' 
                        : 'opacity-0 group-hover:opacity-100 bg-gray-600'
                    }`}></div>
                    <span className={`transition-colors duration-300 text-sm ${
                      pathname === link.href 
                        ? 'text-lime-600 font-semibold' 
                        : 'text-gray-800 group-hover:text-lime-600'
                    }`}>
                      {link.label}
                    </span>
                    <svg  
                      className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 text-gray-600" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                ))}
              </nav>
              
              <div className="px-4 py-1.5 border-t border-gray-200">
                <div className="text-xs text-gray-600 text-center">
                  Bexcel Innovations
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;