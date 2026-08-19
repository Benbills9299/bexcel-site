'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaBolt, FaBatteryFull, FaSolarPanel, FaCreditCard, FaCalendarAlt } from 'react-icons/fa';
import { whatsappNumber } from '@/data/products';

export default function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('portable');
  const sectionRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState({});
  const [showInstallment, setShowInstallment] = useState({});

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
        name: "Lumos L1 + 160w Panel",
        capacity: "320Wh",
        features: ["Fast Charging", "Multiple Outputs", "Quiet Operation"],
        price: "from ₦100,000",
        image: "/portable-power-1.png",
        slug: "lumos-l1-portable-power",
        category: "Portable Power",
        hasInstallment: true,
        installmentPlans: [
          { months: 12, monthly: 39700, firstPayment: 100000, remainingMonths: 11 },
          { months: 18, monthly: 29500, firstPayment: 100000, remainingMonths: 17 },
          { months: 24, monthly: 24950, firstPayment: 100000, remainingMonths: 23 }
        ]
      },
      {
        id: 2,
        name: "Itel Power Tank 1000Wh",
        capacity: "1000Wh",
        features: ["Fast Charging", "2 AC Outputs", "LCD Display"],
        price: "₦310,000",
        image: "/products/itelpowertank.jpg",
        slug: "Itelpowertank",
        category: "Portable Power",
        hasInstallment: false
      }
    ],
    custom: [
      {
        id: 3,
        name: "Home Solar Pro",
        capacity: "1.5kW+",
        features: ["Full Backup", "Grid-Tie", "25-Yr Warranty"],
        price: "From ₦1.5M",
        image: "/custom-system-1.png",
        slug: "",
        category: "Custom Systems",
        hasInstallment: false
      },
      {
      id: 4,
      name: "Business Solar Max",
      capacity: "10kW+",
      features: ["Commercial", "ROI Calc", "Monitoring"],
      price: "Custom Quote",
      image: "/custom-system-2.png",
      slug: "business-solar-max",
      category: "Custom Systems",
      hasInstallment: false,
      isWhatsappOnly: true 
      }
    ]
  };

  const toggleInstallment = (productId) => {
    console.log('Toggling installment for product:', productId);
    setShowInstallment(prev => {
      const newState = {
        ...prev,
        [productId]: !prev[productId]
      };
      console.log('New state:', newState);
      return newState;
    });
  };

  const getWhatsappLink = (product) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hello! I'm interested in the ${product.name}.\n\nPrice: ${product.price}\n\nPlease provide more information.`
    )}`;
  };

  const getInstallmentWhatsappLink = (product, plan) => {
    const total = plan.firstPayment + (plan.monthly * plan.remainingMonths);
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hello! I'm interested in the ${product.name} with installment plan.\n\n` +
      `Plan: ${plan.months} months\n` +
      `First Payment: ₦${plan.firstPayment.toLocaleString()} (covers month 1)\n` +
      `Monthly: ₦${plan.monthly.toLocaleString()} (months 2-${plan.months})\n` +
      `Total: ₦${total.toLocaleString()}\n\n` +
      `Please provide more information about the payment process.`
    )}`;
  };

  // Consultation WhatsApp link
  const consultationMessage = encodeURIComponent(
    "Hello! I'd like to get a custom solar solution for my home/business. Please provide a consultation and quote."
  );
  const consultationLink = `https://wa.me/${whatsappNumber}?text=${consultationMessage}`;

  return (
    <section ref={sectionRef} className="relative py-12 md:py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#82B708]/5 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#82B708]/5 rounded-full translate-y-48 -translate-x-48 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
        {/* Section Header - Compact on mobile */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-[#82B708]/10 rounded-full mb-3 md:mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#82B708] rounded-full animate-pulse"></span>
            <span className="text-[10px] md:text-sm font-semibold text-[#82B708]">Our Solutions</span>
          </div>
          
          <div className={`transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222222] mb-3 md:mb-6 leading-tight">
              Power That <span className="text-[#82B708]">Fits Your Lifestyle</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 hidden md:block ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From portable power for mobility to custom systems for permanence—discover solutions designed for Nigerian energy needs.
            </p>
          </div>
        </div>

        {/* Tab Navigation - Compact on mobile */}
        <div className={`flex justify-center mb-6 md:mb-12 transition-all duration-700 delay-250 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div className="inline-flex p-1 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setActiveTab('portable')}
              className={`px-3 md:px-8 py-1.5 md:py-3 rounded-lg text-[10px] md:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 md:gap-3 ${
                activeTab === 'portable'
                  ? 'bg-[#82B708] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#222222] hover:bg-gray-100'
              }`}
            >
              <div className={`w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                activeTab === 'portable' ? 'bg-white/20' : 'bg-[#82B708]/10'
              }`}>
                <FaBolt className={`text-[10px] md:text-base ${activeTab === 'portable' ? 'text-white' : 'text-[#82B708]'}`} />
              </div>
              <span>Portable</span>
            </button>
            
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-3 md:px-8 py-1.5 md:py-3 rounded-lg text-[10px] md:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 md:gap-3 ${
                activeTab === 'custom'
                  ? 'bg-[#82B708] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#222222] hover:bg-gray-100'
              }`}
            >
              <div className={`w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                activeTab === 'custom' ? 'bg-white/20' : 'bg-[#82B708]/10'
              }`}>
                <FaSolarPanel className={`text-[10px] md:text-base ${activeTab === 'custom' ? 'text-white' : 'text-[#82B708]'}`} />
              </div>
              <span>Custom</span>
            </button>
          </div>
        </div>

        {/* Products Grid - Side by side on mobile */}
        <div className={`grid grid-cols-2 gap-2 md:gap-6 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {products[activeTab].map((product, index) => (
            <div
              key={product.id}
              className={`group relative rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-[#82B708]/5 p-2 md:p-6 border border-[#82B708]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${350 + index * 100}ms` }}
            >
              {/* Product Header - Compact */}
              <div className="relative mb-1.5 md:mb-6">
                <div className="flex flex-col">
                  <div>
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 md:px-3 md:py-1 bg-[#82B708]/10 rounded-full mb-0.5 md:mb-3">
                      <span className="w-1 h-1 md:w-2 md:h-2 bg-[#82B708] rounded-full"></span>
                      <span className="text-[6px] md:text-xs font-semibold text-[#82B708]">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-[10px] leading-tight sm:text-xs md:text-2xl font-bold text-[#222222] line-clamp-2">{product.name}</h3>
                  </div>
                  
                  {/* Price Tag */}
                  <div className="mt-0.5 md:mt-0">
                    <div className="text-[8px] sm:text-[10px] md:text-2xl font-bold text-[#222222]">{product.price}</div>
                  </div>
                </div>
              </div>
              
              {/* Image Container - Smaller on mobile */}
              <div className="relative h-16 sm:h-20 md:h-56 rounded-lg md:rounded-xl overflow-hidden mb-1.5 md:mb-4">
                <Link href={`/products/${product.slug}`} className="block absolute inset-0 z-10">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.capacity}`}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      imageLoaded[product.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    } group-hover:scale-110`}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 600px"
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [product.id]: true }))}
                  />
                </Link>
                
                <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" />
                
                {/* Capacity Badge */}
                <div className="absolute bottom-0.5 right-0.5 md:bottom-4 md:right-4 bg-white/95 backdrop-blur-sm text-[#222222] text-[6px] md:text-sm font-bold px-1 py-0.5 md:px-3 md:py-2 rounded shadow-md border border-[#82B708]/30 z-30 pointer-events-none">
                  {product.capacity}
                </div>
                
                {/* Installment Badge */}
                {product.hasInstallment && (
                  <div className="absolute top-0.5 left-0.5 md:top-4 md:left-4 bg-[#82B708] text-white text-[5px] md:text-xs font-bold px-1 py-0.5 md:px-3 md:py-1.5 rounded-full flex items-center gap-0.5 shadow-md z-30 pointer-events-none">
                    <FaCreditCard className="text-[4px] md:text-xs" />
                    <span className="hidden sm:inline">Pay in Installments</span>
                    <span className="sm:hidden">Install</span>
                  </div>
                )}
              </div>

              {/* Features - Compact on mobile */}
              <div className="mb-1.5 md:mb-6">
                <div className="grid grid-cols-3 gap-0.5 md:gap-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-0.5 md:gap-2 p-0.5 md:p-3 rounded bg-white/50 backdrop-blur-sm border border-[#82B708]/20"
                    >
                      <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-[#82B708]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[4px] md:text-xs font-bold text-[#82B708]">✓</span>
                      </div>
                      <span className="text-[5px] md:text-xs font-medium text-[#222222] truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Installment Button - Compact */}
              {product.hasInstallment && (
                <div className="mb-1.5 md:mb-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleInstallment(product.id);
                    }}
                    className={`w-full border text-[6px] md:text-base ${
                      showInstallment[product.id] 
                        ? 'bg-[#82B708] text-white border-[#82B708]' 
                        : 'bg-transparent border-[#82B708] text-[#82B708] hover:bg-[#82B708] hover:text-white'
                    } font-semibold py-0.5 md:py-3 px-1 md:px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-0.5 md:gap-2 cursor-pointer relative z-50`}
                  >
                    <FaCreditCard className={`text-[8px] md:text-lg ${showInstallment[product.id] ? 'text-white' : 'text-[#82B708]'}`} />
                    <span className="hidden sm:inline">{showInstallment[product.id] ? 'Hide Plans' : 'View Plans'}</span>
                    <span className="sm:hidden">{showInstallment[product.id] ? 'Hide' : 'Plans'}</span>
                  </button>
                </div>
              )}
              
              {/* Installment Plans - Compact */}
              {product.hasInstallment && showInstallment[product.id] && (
                <div className="mb-1.5 md:mb-6 p-1 md:p-4 bg-gray-50 rounded border border-[#82B708]/20 animate-fadeIn">
                  <div className="flex items-center gap-0.5 md:gap-2 mb-0.5 md:mb-3">
                    <FaCalendarAlt className="text-[#82B708] text-[6px] md:text-sm" />
                    <span className="text-[6px] md:text-sm font-semibold text-[#222222]">Flexible Plans</span>
                  </div>
                  
                  <div className="bg-[#82B708]/10 p-0.5 md:p-3 rounded mb-0.5 md:mb-3">
                    <div className="text-[5px] md:text-xs text-gray-600 mb-0.5">First Payment</div>
                    <div className="text-[8px] md:text-xl font-bold text-[#82B708]">
                      ₦{product.installmentPlans[0].firstPayment.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-0.5 md:gap-2 mb-0.5 md:mb-3">
                    {product.installmentPlans.map((plan, idx) => (
                      <div key={idx} className="text-center p-0.5 md:p-2 bg-white rounded border border-gray-200">
                        <div className="text-[5px] md:text-xs font-bold text-[#82B708]">{plan.months}m</div>
                        <div className="text-[6px] md:text-sm font-bold text-[#222222]">₦{plan.monthly.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={getInstallmentWhatsappLink(product, product.installmentPlans[0])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#82B708] hover:bg-[#6B9606] text-white text-center py-0.5 md:py-2 rounded text-[6px] md:text-xs font-medium transition-all"
                  >
                    <span className="flex items-center justify-center gap-0.5 md:gap-2">
                      <FaWhatsapp className="text-[6px] md:text-base" />
                      Apply
                    </span>
                  </a>
                </div>
              )}
              
              {/* Action Buttons - Compact */}
              <div className="flex gap-0.5 md:gap-3">
                <Link 
                  href={`/products/${product.slug}`}
                  className="group/btn flex-1 block"
                >
                  <button className="w-full bg-[#82B708] hover:bg-[#6B9606] text-white font-semibold py-0.5 md:py-3 rounded-lg transition-all duration-300 text-[6px] md:text-base">
                    <span className="flex items-center justify-center gap-0.5 md:gap-2">
                      {activeTab === 'portable' ? 'Buy' : 'Quote'}
                      <svg className="w-2 h-2 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </Link>
                
                <a
                  href={getWhatsappLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1 md:px-4 py-0.5 md:py-3 border border-[#82B708]/30 hover:bg-[#82B708]/10 rounded-lg transition-colors flex items-center"
                >
                  <FaWhatsapp className="w-2.5 h-2.5 md:w-5 md:h-5 text-[#82B708]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className={`mt-8 md:mt-12 text-center transition-all duration-700 delay-450 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-[#82B708] hover:text-[#6B9606] font-semibold text-sm md:text-base group"
          >
            View All Products
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Trust Section */}
        <div className={`mt-12 md:mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-white to-[#82B708]/5 rounded-2xl p-4 md:p-8 border border-[#82B708]/20">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8">
              <div className="text-center p-2 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#82B708]/20">
                <div className="text-lg md:text-3xl font-bold text-[#222222] mb-0.5 md:mb-2">500+</div>
                <div className="text-[8px] md:text-sm font-medium text-gray-600">Systems</div>
              </div>
              
              <div className="text-center p-2 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#82B708]/20">
                <div className="text-lg md:text-3xl font-bold text-[#222222] mb-0.5 md:mb-2">4.9★</div>
                <div className="text-[8px] md:text-sm font-medium text-gray-600">Rating</div>
              </div>
              
              <div className="text-center p-2 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#82B708]/20">
                <div className="text-lg md:text-3xl font-bold text-[#222222] mb-0.5 md:mb-2">24/7</div>
                <div className="text-[8px] md:text-sm font-medium text-gray-600">Support</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-6 md:mt-10 pt-4 md:pt-8 border-t border-[#82B708]/20 text-center">
              <a
                href={consultationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto"
              >
                <button className="group relative rounded-full bg-[#82B708] px-4 py-2 md:px-8 md:py-4 text-xs md:text-base font-bold text-white hover:bg-[#6B9606] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl w-full md:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaWhatsapp className="w-3 h-3 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">Get Your Custom Solution</span>
                    <span className="sm:hidden">Get Solution</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
              </a>
              
              <p className="mt-3 md:mt-6 text-xs md:text-sm text-gray-500">
                <span className="font-medium text-[#82B708]">Expert Consultation:</span> Perfect system for your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}