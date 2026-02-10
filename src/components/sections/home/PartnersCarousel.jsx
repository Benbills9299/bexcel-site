'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const partners = [
  { id: 1, name: 'Compact Power', logo: '/compactpower.svg' },
  { id: 2, name: 'Lumos', logo: '/LUMOS.svg' },
  { id: 3, name: 'Qasa', logo: '/qasa.svg' },
];

export default function PartnersCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || !containerRef.current || !contentRef.current) return;
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const content = contentRef.current;
    let animationId;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += speed;
        
        // Reset when reaching half of duplicated content
        if (scrollPosition >= content.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver excellence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Carousel */}
          <div 
            ref={containerRef}
            className="overflow-x-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              ref={contentRef}
              className="flex items-center"
            >
              {/* First set of logos */}
              {partners.map((partner) => (
                <LogoCard key={`${partner.id}-1`} partner={partner} />
              ))}
              
              {/* Duplicate for seamless loop */}
              {partners.map((partner) => (
                <LogoCard key={`${partner.id}-2`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Logo Card Component
function LogoCard({ partner }) {
  return (
    <div className="group mx-8">
      <div className="w-56 h-32 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center border border-gray-100 hover:border-blue-100">
        <div className="relative w-full h-20">
          <Image
            src={partner.logo}
            alt={`${partner.name} Logo`}
            fill
            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            sizes="(max-width: 768px) 224px, 280px"
          />
        </div>
      </div>
      <p className="text-center mt-3 text-gray-700 font-medium">
        {partner.name}
      </p>
    </div>
  );
}