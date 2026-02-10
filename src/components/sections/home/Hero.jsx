"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-neutral-900 text-white">
      {/* Background Image with optimized alt text */}
      <div className="absolute inset-0 bg-[url('/herobg.jpeg')] bg-cover bg-center bg-no-repeat" 
           aria-label="Professional solar panel installation by Bexcel Innovations" />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-neutral-900/50" />
      
      {/* Content */}
      <div className="relative z-10 min-h-[70vh] md:min-h-screen flex items-center pt-16 md:pt-20">
        <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="pl-0 md:pl-0 lg:pl-0 max-w-4xl">
            
            {/* Modern Heading - Clean, strategic keyword placement */}
            <div className={`transition-all duration-700 ease-out ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-lime-300">Premium Solar Solutions Nigeria</span>
              </div>
              
              {/* Main heading - One strategic mention */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
                Smart Solar Power for <span className="text-lime-300">Homes</span> & <span className="text-lime-300">Businesses</span> Across Nigeria
              </h1>
            </div>
            
            {/* Subheading - Natural, with one strategic mention */}
            <div className={`transition-all duration-700 ease-out delay-100 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="mt-6 text-lg sm:text-xl text-gray-100 font-light leading-relaxed max-w-2xl">
                From Warri to nationwide coverage, we deliver professional solar installations 
                that cut energy costs by up to 70% with guaranteed performance.
              </p>
            </div>
            
            {/* Key Benefits - Clean, no location spam */}
            <div className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ease-out delay-200 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/10 transition-all duration-300">
                <span className="text-lime-300 text-sm">→</span>
                <span className="text-sm font-medium">Eliminate Power Bills</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/10 transition-all duration-300 delay-75">
                <span className="text-lime-300 text-sm">→</span>
                <span className="text-sm font-medium">25-Year Performance Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/10 transition-all duration-300 delay-150">
                <span className="text-lime-300 text-sm">→</span>
                <span className="text-sm font-medium">Smart Energy Monitoring</span>
              </div>
            </div>
            
            {/* CTA Section - Clean, strategic */}
            <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-300 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link href="/contact" className="block">
                <button className="group relative rounded-xl bg-lime-400 px-8 py-4 text-base font-semibold text-neutral-900 hover:bg-lime-300 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Free Solar Consultation
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
              </Link>
              
              <Link href="/product" className="block">
                <button className="rounded-xl border border-white/30 px-8 py-4 text-base font-medium text-white hover:bg-white/5 hover:border-white/50 transition-all duration-300 group w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    View Solar Solutions
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
            
            {/* Trust Indicators - Clean, with subtle location context */}
            <div className={`mt-10 pt-8 border-t border-white/10 transition-all duration-700 ease-out delay-400 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-lime-300">500+</div>
                  <div className="text-xs text-gray-400 mt-1">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lime-300">4.9★</div>
                  <div className="text-xs text-gray-400 mt-1">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lime-300">25yr</div>
                  <div className="text-xs text-gray-400 mt-1">Panel Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lime-300">24/7</div>
                  <div className="text-xs text-gray-400 mt-1">Nationwide Support</div>
                </div>
              </div>
              
              {/* Testimonial - One strategic location mention */}
              <div className="mt-8 flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="flex items-center flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-300">
                  "Professional solar installation cut our monthly bills by 65%. Excellent service 
                  from our Warri-based team to nationwide coverage."
                </p>
              </div>
              
              {/* Service area - Clean, subtle mention */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                  Serving Nigeria • Premium Solar Installations • Residential & Commercial
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}