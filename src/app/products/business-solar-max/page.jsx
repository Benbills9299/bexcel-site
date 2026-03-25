'use client';

import { useState } from 'react';
import { 
  FaWhatsapp, FaPhone, FaCheck, FaTruck, FaShieldAlt, 
  FaStar, FaBolt, FaSolarPanel, FaBox,
  FaCreditCard, FaCheckCircle, FaChevronLeft, FaChevronRight,
  FaBuilding, FaChartLine, FaCog, FaBatteryFull
} from 'react-icons/fa';
import { whatsappNumber } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

export default function BusinessSolarMax() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello! I'm interested in the Business Solar Max for my commercial project.\n\n` +
    `I'd like to get a custom quote and consultation for my business. Please provide more information about:\n` +
    `• System sizing for my facility\n` +
    `• ROI calculations\n` +
    `• Installation timeline\n` +
    `• Available financing options`
  )}`;
  
  const callLink = `tel:+${whatsappNumber}`;
  const displayPhone = `0${whatsappNumber.slice(3)}`;
  
  const productImages = [
    '/custom-system-2.png',
    '/custom-system-1.png',
    '/solar-panel-installation.jpg', // You'll need to add this image
  ];

  const features = [
    "Commercial Scale Systems (10kW - 1MW+)",
    "ROI Calculator & Financial Analysis",
    "Real-Time Energy Monitoring",
    "Grid-Tie & Off-Grid Options",
    "Net Metering Support",
    "25-Year Performance Warranty",
    "Remote System Management",
    "Backup Power Integration"
  ];

  const benefits = [
    "Reduce electricity bills by up to 70%",
    "Tax incentives and depreciation benefits",
    "Protect against rising energy costs",
    "Green business certification eligible",
    "Minimal maintenance required",
    "Scalable for future expansion"
  ];

  const specs = {
    'System Size': '10kW - 1MW+ (Customizable)',
    'Panel Type': 'Monocrystalline PERC',
    'Panel Efficiency': '> 21%',
    'Inverter Type': 'Commercial Grade String/Triple',
    'Monitoring': 'Real-time web & mobile app',
    'Warranty': '25 Years Performance, 10 Years Product',
    'ROI Period': '3-5 Years Typical',
    'Lifespan': '30+ Years'
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#82B708] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/products" className="hover:text-[#82B708] transition-colors">Products</Link>
            <span className="mx-2">›</span>
            <Link href="/products?category=custom" className="hover:text-[#82B708] transition-colors">Custom Systems</Link>
            <span className="mx-2">›</span>
            <span className="text-[#222222] font-medium truncate max-w-md">Business Solar Max</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-8 md:py-12">
        {/* Main Product Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-gray-100 p-6 md:p-8 mb-6 md:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Images */}
            <div>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-inner group">
                <img 
                  src={productImages[selectedImage]} 
                  alt="Business Solar Max - Commercial Solar System"
                  className="w-full h-[300px] md:h-[400px] object-contain p-4 md:p-8 transition-all duration-300"
                  onError={(e) => { e.target.src = 'https://placehold.co/800x600/222222/82B708/png?text=Business+Solar+Max'; }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-[#82B708]/10 border border-[#82B708]/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 md:gap-2 shadow-md z-10">
                  <FaBuilding className="text-[#82B708] text-sm md:text-base" />
                  <span className="capitalize text-[#222222]">Commercial</span>
                </div>
                
                {/* Commercial Badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#222222] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md z-10">
                  Custom Quote
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-[#82B708] shadow-md scale-105' 
                        : 'border-gray-200 hover:border-[#82B708]/50 hover:scale-105'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Business Solar Max - view ${index + 1}`}
                      className="w-full h-16 md:h-20 object-contain bg-gray-50 p-1"
                      onError={(e) => { e.target.src = 'https://placehold.co/200x150/222222/82B708/png?text=View'; }}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Column - Product Info */}
            <div>
              <div className="mb-4 md:mb-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                  <span className="bg-[#82B708]/10 text-[#82B708] px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 border border-[#82B708]/30">
                    <FaWhatsapp className="text-xs md:text-sm" /> Inquire Now
                  </span>
                  <span className="bg-[#82B708]/10 text-[#82B708] px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 border border-[#82B708]/30">
                    <FaStar className="text-xs md:text-sm" /> 4.9 (50+ commercial clients)
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#222222] mb-3 md:mb-4">
                  Business Solar Max
                </h1>
                
                <p className="text-lg text-[#82B708] font-semibold mb-2">Commercial & Industrial Solar Solutions</p>
                
                {/* Price Section */}
                <div className="flex items-baseline gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-[#222222]">
                    Custom Quote
                  </span>
                  <span className="text-sm md:text-base text-gray-500">
                    Based on your specific needs
                  </span>
                </div>

                {/* Intro */}
                <div className="mb-6 p-4 bg-[#82B708]/5 rounded-lg border-l-4 border-[#82B708]">
                  <p className="text-sm md:text-base text-gray-700">
                    A comprehensive commercial solar solution designed for businesses, factories, and large facilities. 
                    Custom-engineered to maximize ROI and provide energy independence.
                  </p>
                </div>
              </div>
              
              {/* Key Benefits */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-[#222222] mb-3 md:mb-4 flex items-center">
                  <FaChartLine className="text-[#82B708] mr-2" />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <FaCheck className="text-[#82B708] mr-2 flex-shrink-0 text-sm" />
                      <span className="text-sm text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-[#222222] mb-3 md:mb-4 flex items-center">
                  <FaCog className="text-[#82B708] mr-2" />
                  System Features
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <FaCheckCircle className="text-[#82B708] mr-3 flex-shrink-0 text-sm" />
                      <span className="text-sm text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* WhatsApp CTA - Prominent */}
              <div className="bg-gradient-to-r from-[#82B708]/10 to-white p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#82B708]/30 mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#222222] mb-3 text-center">
                  Get Your Custom Quote
                </h3>
                <p className="text-sm text-gray-600 text-center mb-6">
                  Our commercial solar experts will design a system tailored to your business needs and provide a detailed ROI analysis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#82B708] hover:bg-[#6B9606] text-white py-4 md:py-5 px-4 md:px-6 rounded-xl font-bold text-base md:text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <FaWhatsapp className="text-2xl md:text-3xl" />
                    Inquire on WhatsApp
                  </a>
                  
                  <a
                    href={callLink}
                    className="flex-1 bg-[#222222] hover:bg-[#333333] text-white py-4 md:py-5 px-4 md:px-6 rounded-xl font-bold text-base md:text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <FaPhone className="text-xl md:text-2xl" />
                    Call: {displayPhone}
                  </a>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  ⚡ Response within 1 hour • Free consultation • Site visit available
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specifications */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-gray-100 p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#222222] mb-6 md:mb-8 flex items-center">
            <span className="w-1.5 h-6 md:w-1.5 md:h-8 bg-[#82B708] rounded-full mr-2 md:mr-3"></span>
            Technical Specifications
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(specs).map(([key, value]) => (
              <div 
                key={key} 
                className="bg-gray-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-gray-200 hover:border-[#82B708]/30 transition-all"
              >
                <span className="text-gray-600 text-xs md:text-sm block mb-1">{key}</span>
                <span className="font-bold text-[#222222] text-base md:text-lg">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Commercial Applications */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-gray-100 p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#222222] mb-6 md:mb-8 flex items-center">
            <span className="w-1.5 h-6 md:w-1.5 md:h-8 bg-[#82B708] rounded-full mr-2 md:mr-3"></span>
            Ideal For
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Manufacturing Facilities",
              "Office Complexes",
              "Shopping Malls",
              "Warehouses",
              "Hotels & Resorts",
              "Schools & Universities",
              "Hospitals",
              "Agricultural Farms"
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <FaBuilding className="text-[#82B708] text-2xl mx-auto mb-2" />
                <span className="text-xs md:text-sm font-medium text-[#222222]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Go Commercial Solar */}
        <div className="bg-gradient-to-br from-[#82B708]/5 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6 md:mb-8 border border-[#82B708]/20">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#222222] mb-6 text-center">
            Why Nigerian Businesses Are Switching to Solar
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#82B708] mb-2">70%</div>
              <p className="text-sm text-gray-700">Average reduction in electricity costs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#82B708] mb-2">3-5yrs</div>
              <p className="text-sm text-gray-700">Typical ROI period</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#82B708] mb-2">25yrs</div>
              <p className="text-sm text-gray-700">Performance warranty</p>
            </div>
          </div>
        </div>
        
        {/* Delivery & Warranty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 flex items-center gap-3 md:gap-4">
            <div className="bg-[#82B708] p-2 md:p-3 rounded-full flex-shrink-0">
              <FaTruck className="text-white text-lg md:text-2xl" />
            </div>
            <div>
              <h4 className="font-bold text-[#222222] text-base md:text-lg">Professional Installation</h4>
              <p className="text-xs md:text-sm text-gray-700">Nationwide • Certified commercial installers</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 flex items-center gap-3 md:gap-4">
            <div className="bg-[#222222] p-2 md:p-3 rounded-full flex-shrink-0">
              <FaShieldAlt className="text-white text-lg md:text-2xl" />
            </div>
            <div>
              <h4 className="font-bold text-[#222222] text-base md:text-lg">Comprehensive Warranty</h4>
              <p className="text-xs md:text-sm text-gray-700">25-year performance • 10-year product • Workmanship</p>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="mt-10 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#82B708] hover:bg-[#6B9606] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <FaWhatsapp className="text-2xl" />
            Get Your Commercial Quote Now
          </a>
          <p className="text-xs text-gray-500 mt-4">
            * Free consultation • Custom ROI analysis • No obligation
          </p>
        </div>
      </div>
    </div>
  );
}