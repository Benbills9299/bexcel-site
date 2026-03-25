'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const pathname = usePathname();
  const heroRef = useRef(null);

  // Page type detection
  const isHomePage = pathname === '/';
  const isProductsListingPage = pathname === '/products';
  const isProductDetailPage = pathname?.startsWith('/products/') && pathname !== '/products';

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      
      // Only check hero section on HOME PAGE
      if (isHomePage) {
        const heroHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroHeight * 0.8) {
          setIsHeroSection(false);
        } else {
          setIsHeroSection(true);
        }
      } else {
        // ALL OTHER PAGES - always treat as non-hero section
        setIsHeroSection(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // ============ NAVBAR BACKGROUND ============
  const getNavbarBackground = () => {
    // HOME PAGE - Transparent → Glass blur on scroll
    if (isHomePage) {
      if (isHeroSection) {
        return isScrolled 
          ? 'bg-white/20 backdrop-blur-md shadow-sm' 
          : 'bg-transparent';
      } else {
        return 'bg-white shadow-md';
      }
    }
    
    // ALL OTHER PAGES (Products, Product Details, About, Gallery) - Transparent → Glass blur on scroll
    return isScrolled 
      ? 'bg-white/20 backdrop-blur-md shadow-sm border-b border-white/30' 
      : 'bg-transparent';
  };

  // ============ TEXT COLOR ============
  const getTextColor = () => {
    // HOME PAGE - White text in hero section, dark text elsewhere
    if (isHomePage) {
      if (isHeroSection) {
        return isScrolled ? 'text-gray-800' : 'text-white';
      } else {
        return 'text-gray-800';
      }
    }
    
    // ALL OTHER PAGES - Dark text (BLACK) when transparent, dark when scrolled
    return isScrolled ? 'text-gray-800' : 'text-gray-900 font-medium';
  };

  // ============ ACTIVE LINK COLOR ============
  const getActiveColor = () => {
    // HOME PAGE - Lime when hero, brand when scrolled/other sections
    if (isHomePage) {
      if (isHeroSection) {
        return isScrolled ? 'text-[#82B708]' : 'text-lime-400';
      } else {
        return 'text-lime-600';
      }
    }
    
    // ALL OTHER PAGES - Brand color (#82B708)
    return 'text-[#82B708] font-semibold';
  };

  // ============ HOVER COLOR ============
  const getHoverColor = () => {
    // HOME PAGE - Lime/Green hover
    if (isHomePage) {
      if (isHeroSection) {
        return isScrolled ? 'hover:text-[#82B708]' : 'hover:text-lime-400';
      } else {
        return 'hover:text-lime-600';
      }
    }
    
    // ALL OTHER PAGES - Brand color hover
    return 'hover:text-[#82B708]';
  };

  // ============ LOGO BRIGHTNESS ============
  const getLogoBrightness = () => {
    // HOME PAGE - Normal logo in hero, dark when scrolled/other sections
    if (isHomePage) {
      if (isHeroSection) {
        return isScrolled ? 'brightness-0' : '';
      } else {
        return 'brightness-0';
      }
    }
    
    // ALL OTHER PAGES - DARK LOGO for dark text on transparent background
    // Always brightness-0 for non-home pages to ensure dark logo is visible
    return 'brightness-0';
  };

  // ============ HAMBURGER COLOR ============
  const getHamburgerColor = () => {
    // HOME PAGE - White in hero, dark elsewhere
    if (isHomePage) {
      if (isHeroSection) {
        return isScrolled ? 'text-gray-800' : 'text-white';
      } else {
        return 'text-gray-800';
      }
    }
    
    // ALL OTHER PAGES - Dark text when transparent, dark when scrolled
    return isScrolled ? 'text-gray-800' : 'text-gray-900';
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans ${getNavbarBackground()}`}>
      <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center py-2 md:py-3">
          
          {/* Logo */}
          <div className="flex items-center z-50">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Bexcel Innovations Logo"
                className={`h-7 md:h-8 cursor-pointer transition-all duration-300 ${getLogoBrightness()}`}
              />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className={`md:hidden relative w-7 h-7 focus:outline-none z-50 transition-colors duration-300 ${getHamburgerColor()}`}
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== '/' && pathname?.startsWith(link.href));
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 text-sm lg:text-base ${
                    isActive 
                      ? `${getActiveColor()}` 
                      : `${getTextColor()} font-normal ${getHoverColor()}`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 pt-14">
            <div 
              className="fixed inset-0 bg-black/20" 
              onClick={() => setIsOpen(false)}
            />
            
            <div className="relative mx-3 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <nav className="flex flex-col p-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || 
                    (link.href !== '/' && pathname?.startsWith(link.href));
                  
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center hover:bg-gray-100 rounded-xl p-2 mb-1 transition-all duration-300 ${
                        isActive ? 'bg-gray-100' : ''
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 transition-opacity duration-300 ${
                        isActive 
                          ? 'opacity-100 bg-[#82B708]' 
                          : 'opacity-0 group-hover:opacity-100 bg-gray-600'
                      }`}></div>
                      <span className={`transition-colors duration-300 text-sm ${
                        isActive 
                          ? 'text-[#82B708] font-semibold' 
                          : 'text-gray-800 group-hover:text-[#82B708]'
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
                  );
                })}
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