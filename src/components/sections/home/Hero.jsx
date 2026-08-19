"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen bg-neutral-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/herobg.jpeg')] bg-cover bg-center bg-no-repeat" 
           aria-label="Professional solar panel installation and electronics by Bexcel Innovations" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-neutral-900/50" />
      
      {/* Content - Centered vertically */}
      <div className="relative z-10 flex items-center justify-center h-full pt-16 pb-8 md:pt-20 md:pb-12">
        <div className="w-full px-4 md:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            
            {/* Badge */}
            <div className={`transition-all duration-700 ease-out ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-3 md:mb-6">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-lime-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] md:text-sm font-medium text-lime-300">Solar & Electronics Store • Warri, Delta State</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
                <span className="text-lime-300">Solar Power</span>
                <span className="hidden sm:inline"> &amp; </span>
                <span className="block sm:inline text-lime-300">Premium Electronics</span>
                <span className="block text-white text-lg sm:text-xl md:text-3xl lg:text-4xl mt-1 md:mt-2">
                  For Your Home &amp; Business
                </span>
              </h1>
            </div>
            
            {/* Subheading */}
            <div className={`transition-all duration-700 ease-out delay-100 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="mt-2 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 font-light leading-relaxed max-w-2xl">
                From solar installations to the latest electronics — we bring you quality products 
                and professional services at the best prices. Based in Warri, serving Nigeria.
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className={`mt-3 md:mt-8 flex flex-wrap gap-2 md:gap-3 transition-all duration-700 ease-out delay-200 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5 md:px-4 md:py-3 hover:bg-white/10 transition-all duration-300">
                <span className="text-lime-300 text-xs md:text-sm">→</span>
                <span className="text-xs md:text-sm font-medium">Solar &amp; Electronics</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5 md:px-4 md:py-3 hover:bg-white/10 transition-all duration-300">
                <span className="text-lime-300 text-xs md:text-sm">→</span>
                <span className="text-xs md:text-sm font-medium">Best Prices</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5 md:px-4 md:py-3 hover:bg-white/10 transition-all duration-300">
                <span className="text-lime-300 text-xs md:text-sm">→</span>
                <span className="text-xs md:text-sm font-medium">Pro Installation</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={`mt-4 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-700 ease-out delay-300 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link href="/products" className="block w-full sm:w-auto">
                <button className="group relative rounded-xl bg-lime-400 px-6 py-2.5 md:px-8 md:py-4 text-sm md:text-base font-semibold text-neutral-900 hover:bg-lime-300 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl w-full">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Shop Solar &amp; Electronics
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
              </Link>
              
              <a
                href="https://wa.me/2348123589191"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto"
              >
                <button className="rounded-xl border border-white/30 px-6 py-2.5 md:px-8 md:py-4 text-sm md:text-base font-medium text-white hover:bg-white/5 hover:border-white/50 transition-all duration-300 group w-full">
                  <span className="flex items-center justify-center gap-2">
                    Get Free Consultation
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className={`mt-5 md:mt-10 pt-4 md:pt-8 border-t border-white/10 transition-all duration-700 ease-out delay-400 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6">
                <div className="text-center">
                  <div className="text-base md:text-2xl font-bold text-lime-300">500+</div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-0.5">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-base md:text-2xl font-bold text-lime-300">4.9★</div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-0.5">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-base md:text-2xl font-bold text-lime-300">Solar</div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-0.5">&amp; Electronics Expert</div>
                </div>
                <div className="text-center">
                  <div className="text-base md:text-2xl font-bold text-lime-300">Warri</div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-0.5">Based • Nationwide</div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="mt-3 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="flex items-center flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-300">
                  "Quality products, professional solar installations, and great customer service."
                </p>
              </div>
              
              {/* Service area */}
              <div className="mt-3 md:mt-6 text-center">
                <p className="text-[10px] md:text-xs text-gray-400">
                  🌞 Solar Installation • 🛍️ Electronics • 💡 Smart Solutions • Nigeria-wide
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}