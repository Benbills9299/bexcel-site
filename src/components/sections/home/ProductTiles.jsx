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
        name: "Lumos L1 + 160watts Panel",
        capacity: "320hW",
        features: ["Fast Charging", "Multiple Outputs", "Quiet Operation"],
        price: "starts from ₦100,000",
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
        name: "Itel Power Tank 500w 1000wh",
        capacity: "1000Wh",
        features: ["2 Hr Fast Charging", '2 AC Outputs','Lcd Display'],
        price: "₦380,000",
        image: "/products/itelpowertank.jpg",
        slug: "Itel-Power-Tank-1000wh",
        category: "Portable Power",
        hasInstallment: false
      }
    ],
    custom: [
      {
        id: 3,
        name: "Home Solar Pro",
        capacity: "1.5kW + System",
        features: ["Full Home Backup", "Grid-Tie Option", "25-Year Warranty"],
        price: "From ₦1.5M",
        image: "/custom-system-1.png",
        slug: "",
        category: "Custom Systems",
        hasInstallment: false
      },
      {
      id: 4,
      name: "Business Solar Max",
      capacity: "10kW+ Systems",
      features: ["Commercial Scale", "ROI Calculator", "Energy Monitoring"],
      price: "Custom Quote",
      image: "/custom-system-2.png",
      slug: "business-solar-max", // Keeping slug for reference but we'll use WhatsApp
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
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Elements - Brand Colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#82B708]/5 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#82B708]/5 rounded-full translate-y-48 -translate-x-48 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#82B708]/10 rounded-full mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <span className="w-2 h-2 bg-[#82B708] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-[#82B708]">Our Solutions</span>
          </div>
          
          <div className={`transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6 leading-tight">
              Power That <span className="text-[#82B708]">Fits Your Lifestyle</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From portable power for mobility to custom systems for permanence—discover solutions designed for Nigerian energy needs.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-250 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div className="inline-flex p-1 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setActiveTab('portable')}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'portable'
                  ? 'bg-[#82B708] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#222222] hover:bg-gray-100'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeTab === 'portable' ? 'bg-white/20' : 'bg-[#82B708]/10'
              }`}>
                <FaBolt className={activeTab === 'portable' ? 'text-white' : 'text-[#82B708]'} />
              </div>
              <span>Portable Power</span>
            </button>
            
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'custom'
                  ? 'bg-[#82B708] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#222222] hover:bg-gray-100'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeTab === 'custom' ? 'bg-white/20' : 'bg-[#82B708]/10'
              }`}>
                <FaSolarPanel className={activeTab === 'custom' ? 'text-white' : 'text-[#82B708]'} />
              </div>
              <span>Custom Systems</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {products[activeTab].map((product, index) => (
            <div
              key={product.id}
              className={`group relative rounded-2xl bg-gradient-to-br from-white to-[#82B708]/5 p-6 border border-[#82B708]/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${350 + index * 100}ms` }}
            >
              {/* Product Header */}
              <div className="relative mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#82B708]/10 rounded-full mb-3">
                      <span className="w-2 h-2 bg-[#82B708] rounded-full"></span>
                      <span className="text-xs font-semibold text-[#82B708]">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#222222]">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {activeTab === 'portable' ? 'Take power anywhere' : 'Designed for your space'}
                    </p>
                  </div>
                  
                  {/* Price Tag */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#222222]">{product.price}</div>
                  </div>
                </div>
              </div>
              
              {/* Image Container */}
              <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                {/* Product Image Link */}
                <Link href={`/products/${product.slug}`} className="block absolute inset-0 z-10">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.capacity}`}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      imageLoaded[product.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    } group-hover:scale-110`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [product.id]: true }))}
                  />
                </Link>
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" />
                
                {/* Capacity Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[#222222] text-sm font-bold px-3 py-2 rounded-lg shadow-md border border-[#82B708]/30 z-30 pointer-events-none">
                  {product.capacity}
                </div>
                
                {/* Installment Badge */}
                {product.hasInstallment && (
                  <div className="absolute top-4 left-4 bg-[#82B708] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md z-30 pointer-events-none">
                    <FaCreditCard className="text-xs" />
                    <span>Pay in Installments</span>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-40 pointer-events-none">
                  <span className="bg-white text-[#222222] font-semibold px-8 py-4 rounded-lg shadow-xl transform group-hover:scale-110 transition-all duration-300 border-2 border-[#82B708]/30">
                    View Details →
                  </span>
                </div>
              </div>

              {/* INSTALLMENT BUTTON - FIXED */}
              {product.hasInstallment && (
                <div className="mb-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Button clicked for product:', product.id);
                      toggleInstallment(product.id);
                    }}
                    className={`w-full border-2 ${
                      showInstallment[product.id] 
                        ? 'bg-[#82B708] text-white border-[#82B708]' 
                        : 'bg-transparent border-[#82B708] text-[#82B708] hover:bg-[#82B708] hover:text-white'
                    } font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative z-50`}
                  >
                    <FaCreditCard className={`text-lg ${showInstallment[product.id] ? 'text-white' : 'text-[#82B708] group-hover/install-btn:text-white'}`} />
                    <span>
                      {showInstallment[product.id] ? 'Hide Installment Plans' : 'View Installment Plans'}
                    </span>
                  </button>
                </div>
              )}
              
              {/* Features */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[#82B708]/20"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#82B708]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-[#82B708]">✓</span>
                      </div>
                      <span className="text-xs font-medium text-[#222222] truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Installment Plans - Shows when button is clicked */}
              {product.hasInstallment && showInstallment[product.id] && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-[#82B708]/20 animate-fadeIn">
                  <div className="flex items-center gap-2 mb-3">
                    <FaCalendarAlt className="text-[#82B708] text-sm" />
                    <span className="text-sm font-semibold text-[#222222]">Flexible Payment Plans</span>
                  </div>
                  
                  <div className="bg-[#82B708]/10 p-3 rounded-lg mb-3">
                    <div className="text-xs text-gray-600 mb-1">First Payment (Covers Month 1)</div>
                    <div className="text-xl font-bold text-[#82B708]">
                      ₦{product.installmentPlans[0].firstPayment.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {product.installmentPlans.map((plan, idx) => (
                      <div key={idx} className="text-center p-2 bg-white rounded-md border border-gray-200">
                        <div className="text-xs font-bold text-[#82B708]">{plan.months} months</div>
                        <div className="text-sm font-bold text-[#222222]">₦{plan.monthly.toLocaleString()}</div>
                        <div className="text-[10px] text-gray-500">per month</div>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={getInstallmentWhatsappLink(product, product.installmentPlans[0])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#82B708] hover:bg-[#6B9606] text-white text-center py-2 rounded-lg text-xs font-medium transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FaWhatsapp />
                      Apply for Installment Plan
                    </span>
                  </a>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link 
                  href={`/products/${product.slug}`}
                  className="group/btn flex-1 block"
                >
                  <button className="w-full bg-[#82B708] hover:bg-[#6B9606] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center gap-2">
                      {activeTab === 'portable' ? 'Buy Now' : 'Get Quote'}
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </Link>
                
                <a
                  href={getWhatsappLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-[#82B708]/30 hover:bg-[#82B708]/10 rounded-lg transition-colors group/whatsapp"
                  title="Order via WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#82B708] group-hover/whatsapp:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className={`mt-12 text-center transition-all duration-700 delay-450 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-[#82B708] hover:text-[#6B9606] font-semibold group"
          >
            View All Products
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Trust Section */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-white to-[#82B708]/5 rounded-2xl p-8 border border-[#82B708]/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#82B708]/20">
                <div className="text-3xl font-bold text-[#222222] mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600">Systems Deployed</div>
                <div className="mt-2 text-xs text-[#82B708]">Across Nigeria</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#82B708]/20">
                <div className="text-3xl font-bold text-[#222222] mb-2">4.9★</div>
                <div className="text-sm font-medium text-gray-600">Customer Rating</div>
                <div className="mt-2 text-xs text-[#82B708]">Based on 247 reviews</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#82B708]/20">
                <div className="text-3xl font-bold text-[#222222] mb-2"></div>
                <div className="text-sm font-medium text-gray-600">Support Available</div>
                <div className="mt-2 text-xs text-[#82B708]">Nationwide coverage</div>
              </div>
            </div>
            
            {/* CTA Button - UPDATED to WhatsApp */}
            <div className="mt-10 pt-8 border-t border-[#82B708]/20 text-center">
              <a
                href={consultationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="group relative rounded-full bg-[#82B708] px-8 py-4 text-base font-bold text-white hover:bg-[#6B9606] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaWhatsapp className="w-5 h-5" />
                    Get Your Custom Solution
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
              </a>
              
              <p className="mt-6 text-sm text-gray-500">
                <span className="font-medium text-[#82B708]">Expert Consultation:</span> Our solar engineers will design the perfect system for your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or create a style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}