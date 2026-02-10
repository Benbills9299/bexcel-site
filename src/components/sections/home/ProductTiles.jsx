"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('portable');
  const sectionRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState({});

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

  const products = {
    portable: [
      {
        id: 1,
        name: "Lumos L1",
        capacity: "1000W",
        features: ["Fast Charging", "Multiple Outputs", "Quiet Operation"],
        price: "₦299,999",
        savings: "Save ₦120,000",
        image: "/portable-power-1.png",
        color: "lime",
        slug: "lumos-l1-portable-power",
        category: "portable-power"
      },
      {
        id: 2,
        name: "Compact Power",
        capacity: "2000W",
        features: ["Expandable Battery", "Solar Compatible", "Smart App"],
        price: "₦499,999",
        savings: "₦450,000",
        image: "/portable-power-2.png",
        color: "blue",
        slug: "compact-power-station",
        category: "portable-power"
      }
    ],
    custom: [
      {
        id: 1,
        name: "Home Solar Pro",
        capacity: "5kW System",
        features: ["Full Home Backup", "Grid-Tie Option", "25-Year Warranty"],
        price: "From ₦2.5M",
        savings: "Save 70% on Bills",
        image: "/custom-system-1.png",
        color: "lime",
        slug: "home-solar-pro",
        category: "custom-systems"
      },
      {
        id: 2,
        name: "Business Solar Max",
        capacity: "10kW+ Systems",
        features: ["Commercial Scale", "ROI Calculator", "Energy Monitoring"],
        price: "Custom Quote",
        savings: "Tax Benefits Available",
        image: "/custom-system-2.png",
        color: "blue",
        slug: "business-solar-max",
        category: "custom-systems"
      }
    ]
  };

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Elements - Matching Education Page */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/5 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full translate-y-48 -translate-x-48 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header - Matching Education Style */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-lime-400/10 rounded-full mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-lime-700">Our Solutions</span>
          </div>
          
          <div className={`transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              Power That <span className="text-lime-500">Fits Your Lifestyle</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From portable power for mobility to custom systems for permanence—discover solutions designed for Nigerian energy needs.
            </p>
          </div>
        </div>

        {/* Tab Navigation - Enhanced with Education Style */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-250 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div className="inline-flex p-1 bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-100 shadow-sm">
            <button
              onClick={() => setActiveTab('portable')}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'portable'
                  ? 'bg-lime-400 text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeTab === 'portable' ? 'bg-neutral-900/10' : 'bg-lime-400/10'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Portable Power</span>
            </button>
            
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'custom'
                  ? 'bg-lime-400 text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeTab === 'custom' ? 'bg-neutral-900/10' : 'bg-lime-400/10'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Custom Systems</span>
            </button>
          </div>
        </div>

        {/* Products Grid - Matching Education Card Style */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {products[activeTab].map((product, index) => (
            <div
              key={product.id}
              className={`group relative rounded-2xl bg-gradient-to-br from-white ${product.color === 'lime' ? 'to-lime-50/30 border-lime-100' : 'to-blue-50/30 border-blue-100'} p-6 border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${350 + index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 ${product.color === 'lime' ? 'bg-gradient-to-r from-lime-400/5' : 'bg-gradient-to-r from-blue-400/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Product Header */}
              <div className="relative mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 ${product.color === 'lime' ? 'bg-lime-400/10' : 'bg-blue-400/10'} rounded-full mb-3`}>
                      <span className={`w-2 h-2 ${product.color === 'lime' ? 'bg-lime-400' : 'bg-blue-400'} rounded-full`}></span>
                      <span className={`text-xs font-semibold ${product.color === 'lime' ? 'text-lime-700' : 'text-blue-700'}`}>
                        {activeTab === 'portable' ? 'Portable' : 'Custom'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">{product.name}</h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      {activeTab === 'portable' ? 'Take power anywhere' : 'Designed for your space'}
                    </p>
                  </div>
                  
                  {/* Price Tag - Matching Education Stats */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                    {product.savings && (
                      <div className={`text-sm font-medium ${product.color === 'lime' ? 'text-lime-600' : 'text-blue-600'}`}>
                        {product.savings}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Image Container with Link - Matching Education Image Style */}
              <Link href={`/product/${product.slug}`} className="block">
                <div className="relative h-56 rounded-xl overflow-hidden mb-6 group/image">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-blue-400/10 z-0" />
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.capacity}`}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      imageLoaded[product.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    } group-hover/image:scale-105`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [product.id]: true }))}
                  />
                  
                  {/* Capacity Badge - Matching Education Badges */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-neutral-900 text-sm font-bold px-3 py-2 rounded-lg shadow-sm">
                    {product.capacity}
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-neutral-900 font-semibold px-4 py-2 rounded-lg shadow-lg">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Features - Matching Education Checkbox Style */}
              <div className="mb-8">
                <div className="grid grid-cols-3 gap-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-neutral-100 group/feature"
                    >
                      <div className={`w-6 h-6 rounded-full ${product.color === 'lime' ? 'bg-lime-400/20' : 'bg-blue-400/20'} flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-xs font-bold ${product.color === 'lime' ? 'text-lime-600' : 'text-blue-600'}`}>✓</span>
                      </div>
                      <span className="text-xs font-medium text-neutral-900 truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons - Matching Education CTA */}
              <div className="flex gap-3">
                <Link 
                  href={`/product/${product.slug}`}
                  className="group/btn flex-1 block"
                >
                  <button className={`w-full ${product.color === 'lime' ? 'bg-lime-400 hover:bg-lime-300' : 'bg-blue-400 hover:bg-blue-300'} text-neutral-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl`}>
                    <span className="flex items-center justify-center gap-2">
                      {activeTab === 'portable' ? 'Buy Now' : 'Get Quote'}
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </Link>
                
                <Link 
                  href={`/product/${product.slug}#specifications`}
                  className="block"
                >
                  <button className={`px-4 py-3 border ${product.color === 'lime' ? 'border-lime-200 hover:bg-lime-50' : 'border-blue-200 hover:bg-blue-50'} rounded-lg transition-colors group/info`}>
                    <svg className={`w-5 h-5 ${product.color === 'lime' ? 'text-lime-600 group-hover/info:text-lime-700' : 'text-blue-600 group-hover/info:text-blue-700'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </Link>
              </div>
              
              {/* Savings Badge */}
              <div className={`absolute top-4 left-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="bg-lime-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.savings}
                </div>
              </div>
              
              {/* Quick View Link */}
              <Link 
                href={`/product/${product.slug}`}
                className="absolute bottom-4 right-4 text-xs text-neutral-500 hover:text-lime-600 transition-colors hidden group-hover:block"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className={`mt-12 text-center transition-all duration-700 delay-450 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link 
            href="/product" 
            className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold group"
          >
            View All Products
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Trust Section - Matching Education Stats */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-white to-lime-50/30 rounded-2xl p-8 border border-lime-100">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-lime-100">
                <div className="text-3xl font-bold text-neutral-900 mb-2">500+</div>
                <div className="text-sm font-medium text-neutral-600">Systems Deployed</div>
                <div className="mt-2 text-xs text-lime-600">Across Nigeria</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100">
                <div className="text-3xl font-bold text-neutral-900 mb-2">4.9★</div>
                <div className="text-sm font-medium text-neutral-600">Customer Rating</div>
                <div className="mt-2 text-xs text-blue-600">Based on 247 reviews</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-lime-100">
                <div className="text-3xl font-bold text-neutral-900 mb-2">24/7</div>
                <div className="text-sm font-medium text-neutral-600">Support Available</div>
                <div className="mt-2 text-xs text-lime-600">Nationwide coverage</div>
              </div>
            </div>
            
            {/* CTA Button - Matching Education */}
            <div className="mt-10 pt-8 border-t border-lime-100 text-center">
              <Link href="/consultation" className="inline-block">
                <button className="group relative rounded-full bg-lime-400 px-8 py-4 text-base font-bold text-neutral-900 hover:bg-lime-300 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Your Custom Solution
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
              </Link>
              
              <p className="mt-6 text-sm text-neutral-500">
                <span className="font-medium text-lime-600">Expert Consultation:</span> Our solar engineers will design the perfect system for your needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}