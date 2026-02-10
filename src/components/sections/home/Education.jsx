"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/5 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full translate-y-48 -translate-x-48 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-lime-400/10 rounded-full transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-lime-700">Solar Education</span>
            </div>
            
            {/* Main Heading */}
            <div className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                Solar Systems Should <span className="text-lime-500">Fit Your Needs</span>, Not Just Your Roof
              </h2>
            </div>
            
            {/* Key Points */}
            <div className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Every home is different. That's why we design custom solar solutions that match your actual energy usage, not generic packages.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lime-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Right-Sized Systems</p>
                    <p className="text-neutral-600 text-sm mt-1">kVA/kW ratings tailored to your consumption</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lime-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Confirmed Warranty</p>
                    <p className="text-neutral-600 text-sm mt-1">Full protection on all components</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lime-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Maximum Savings</p>
                    <p className="text-neutral-600 text-sm mt-1">Optimized for efficiency and ROI</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <button className="group relative rounded-full bg-lime-400 px-8 py-4 text-base font-bold text-neutral-900 hover:bg-lime-300 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Get Custom Quote</span>
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Image & Visual Content */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-12'
          }`}>
            {/* Image Container with Scroll-Jump Effect */}
            <div 
              className="relative group mb-8"
              ref={imageRef}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-lime-400/20 to-blue-400/20 rounded-2xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative aspect-[4/3] transition-all duration-1000">
                  <Image
                    src="/edupic.png"
                    alt="Modern solar panel installation on a residential roof with clean aesthetic"
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    } group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    onLoad={() => setImageLoaded(true)}
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-lime-400/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl">
                      Custom Design
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm text-neutral-900 text-sm font-bold px-4 py-2 rounded-full shadow-xl">
                      Optimized Layout
                    </div>
                  </div>
                  
                  {/* Subtle Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-lime-400 rounded-tl-lg" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-lime-400 rounded-bl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blue-400 rounded-br-lg" />
            </div>
            
            {/* System Info Cards with Staggered Animation */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-6 rounded-xl bg-gradient-to-br from-white to-lime-50/30 border border-lime-100 group hover:border-lime-300 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: '600ms'}}>
                <div className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-lime-600 transition-colors">1-3 kWh</div>
                <div className="text-sm text-neutral-600">Essential Power for Basics</div>
                <div className="mt-4 pt-4 border-t border-lime-100 group-hover:border-lime-200 transition-colors">
                  <div className="text-xs font-medium text-lime-600">Ideal For: Lighting, TV, Charging, fridge</div>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className={`p-6 rounded-xl bg-gradient-to-br from-white to-blue-50/30 border border-blue-100 group hover:border-blue-300 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: '700ms'}}>
                <div className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">4-6 kWh</div>
                <div className="text-sm text-neutral-600">Full Home Power System</div>
                <div className="mt-4 pt-4 border-t border-blue-100 group-hover:border-blue-200 transition-colors">
                  <div className="text-xs font-medium text-blue-600">Includes: AC, Appliances, More</div>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}