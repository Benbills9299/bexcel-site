'use client';

import { useState } from 'react';
import { 
  FaWhatsapp, FaPhone, FaCheck, FaTruck, FaShieldAlt, 
  FaStar, FaBolt, FaBatteryFull, FaSolarPanel, FaBox,
  FaCreditCard, FaCalendarAlt, FaCheckCircle, FaChevronLeft, FaChevronRight,
  FaGift, FaStarHalf, FaTiktok, FaVideo
} from 'react-icons/fa';
import { whatsappNumber, whatsappMessage } from '@/data/products';
import Link from 'next/link';

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `${whatsappMessage} ${product.name}\nPrice: ${product.price}\n\nI'm interested in this product. Please provide more information.`
  )}`;
  
  const callLink = `tel:+${whatsappNumber}`;
  const displayPhone = `0${whatsappNumber.slice(3)}`;
  const defaultImage = `https://placehold.co/800x600/222222/82B708/png?text=${encodeURIComponent(product.name)}`;
  
  // Handle image navigation
  const nextImage = () => {
    const totalImages = product.images?.length || 1;
    setSelectedImage((prev) => (prev + 1) % totalImages);
  };
  
  const prevImage = () => {
    const totalImages = product.images?.length || 1;
    setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages);
  };
  
  // Get all available images
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image || defaultImage];
  
  // ✅ INSTALLMENT PLANS for Lumos L1 - Fixed calculation
  const getInstallmentPlans = () => {
    // Only show for Lumos L1
    if (product.name === 'Lumos L1' || product.id === 'lumos-l1-portable-power') {
      return [
        { 
          id: 12,
          months: 12, 
          monthly: 39700, 
          firstPayment: 100000,
          total: 100000 + (39700 * 11),
          remainingMonths: 11
        },
        { 
          id: 18,
          months: 18, 
          monthly: 29500, 
          firstPayment: 100000,
          total: 100000 + (29500 * 17),
          remainingMonths: 17
        },
        { 
          id: 24,
          months: 24, 
          monthly: 24950, 
          firstPayment: 100000,
          total: 100000 + (24950 * 23),
          remainingMonths: 23
        }
      ];
    }
    return null;
  };

  const installmentPlans = getInstallmentPlans();
  
  const getCategoryMeta = () => {
    switch(product.category) {
      case 'inverters':
        return { icon: FaBolt, color: 'text-[#82B708]', bg: 'bg-[#82B708]/10', border: 'border-[#82B708]/30' };
      case 'batteries':
        return { icon: FaBatteryFull, color: 'text-[#82B708]', bg: 'bg-[#82B708]/10', border: 'border-[#82B708]/30' };
      case 'panels':
        return { icon: FaSolarPanel, color: 'text-[#82B708]', bg: 'bg-[#82B708]/10', border: 'border-[#82B708]/30' };
      default:
        return { icon: FaBox, color: 'text-[#82B708]', bg: 'bg-[#82B708]/10', border: 'border-[#82B708]/30' };
    }
  };
  
  const categoryMeta = getCategoryMeta();
  const CategoryIcon = categoryMeta.icon;
  
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
            <span className="text-[#222222] font-medium truncate max-w-md">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-8 md:py-12">
        {/* Main Product Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-gray-100 p-6 md:p-8 mb-6 md:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Images with Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-inner group">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name}
                  className="w-full h-[300px] md:h-[400px] object-contain p-4 md:p-8 transition-all duration-300"
                  onError={(e) => { e.target.src = defaultImage; }}
                />
                
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 md:top-4 md:left-4 ${categoryMeta.bg} ${categoryMeta.border} border px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 md:gap-2 shadow-md z-10`}>
                  <CategoryIcon className={`${categoryMeta.color} text-sm md:text-base`} />
                  <span className="capitalize text-[#222222]">{product.category}</span>
                </div>
                
                {/* Image Counter */}
                {productImages.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs font-medium z-10">
                    {selectedImage + 1} / {productImages.length}
                  </div>
                )}

                {/* Navigation Arrows - Only show if multiple images */}
                {productImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-[#82B708] text-[#222222] hover:text-white rounded-full shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="text-sm md:text-base" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-[#82B708] text-[#222222] hover:text-white rounded-full shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 hover:scale-110"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="text-sm md:text-base" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 mt-4">
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
                        alt={`${product.name} - view ${index + 1}`}
                        className="w-full h-16 md:h-20 object-contain bg-gray-50 p-1"
                        onError={(e) => { e.target.src = defaultImage; }}
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-[#82B708]/10 ring-2 ring-[#82B708] rounded-lg"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
              
              {/* ✅ TIKTOK VIDEO LINK - Only shows if product has tiktokLink */}
              {product.tiktokLink && (
                <div className="mt-6">
                  <a
                    href={product.tiktokLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white p-4 rounded-xl border border-gray-800 transition-all transform hover:scale-[1.02] shadow-lg group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all">
                        <FaTiktok className="text-2xl" />
                      </div>
                      <div>
                        <div className="font-bold text-base md:text-lg flex items-center gap-2">
                          Watch Product Video
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                            LIVE
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-300 flex items-center gap-1">
                          <FaVideo className="text-xs" />
                          See {product.name} in action on TikTok
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              )}
              
              {/* If only one image, show helpful message */}
              {productImages.length === 1 && (
                <div className="mt-4 text-center text-sm text-gray-500 bg-gray-50 py-2 px-4 rounded-lg border border-gray-200">
                  <span className="font-medium text-[#82B708]">Note:</span> Multiple angles coming soon.
                </div>
              )}
            </div>
            
            {/* Right Column - Product Info */}
            <div>
              <div className="mb-4 md:mb-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                  <span className="bg-[#82B708]/10 text-[#82B708] px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 border border-[#82B708]/30">
                    <FaWhatsapp className="text-xs md:text-sm" /> In Stock
                  </span>
                  <span className="bg-[#82B708]/10 text-[#82B708] px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 border border-[#82B708]/30">
                    <FaStar className="text-xs md:text-sm" /> {product.rating || 4.8} ({product.reviews || 120}+ reviews)
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#222222] mb-3 md:mb-4">
                  {product.name}
                </h1>
                
                {/* Price Section */}
                <div className="flex items-baseline gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#82B708]">
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.savings && (
                    <span className="text-sm md:text-base text-gray-500 line-through">
                      {product.savings}
                    </span>
                  )}
                </div>

                {/* INTRO SECTION - Only shows if product has intro field */}
                {product.intro && (
                  <div className="mb-6 p-4 bg-[#82B708]/5 rounded-lg border-l-4 border-[#82B708]">
                    <p className="text-sm md:text-base text-gray-700 italic">
                      {product.intro}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Description - Only shows if product has description field */}
              {product.description && (
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-[#222222] mb-2 md:mb-3 flex items-center">
                    <span className="w-1 h-5 md:w-1 md:h-6 bg-[#82B708] rounded-full mr-2 md:mr-3"></span>
                    Description
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}
              
              {/* WHAT'S INCLUDED SECTION - Only shows if product has whatsIncluded array with items */}
              {product.whatsIncluded && product.whatsIncluded.length > 0 && (
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-[#222222] mb-3 md:mb-4 flex items-center">
                    <FaGift className="text-[#82B708] mr-2" />
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {product.whatsIncluded.map((item, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <FaCheckCircle className="text-[#82B708] mr-3 flex-shrink-0 text-sm" />
                        <span className="text-sm md:text-base text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* KEY BENEFITS SECTION - Only shows if product has benefits array with items */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-[#222222] mb-3 md:mb-4 flex items-center">
                    <FaStarHalf className="text-[#82B708] mr-2" />
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <FaCheck className="text-[#82B708] mr-2 flex-shrink-0 text-sm" />
                        <span className="text-sm text-gray-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Key Features - Original features section */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-[#222222] mb-3 md:mb-4 flex items-center">
                    <span className="w-1 h-5 md:w-1 md:h-6 bg-[#82B708] rounded-full mr-2 md:mr-3"></span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-2.5 md:p-3 rounded-lg md:rounded-xl border border-gray-100">
                        <FaCheck className="text-[#82B708] mr-2 md:mr-3 flex-shrink-0 text-sm md:text-base" />
                        <span className="text-xs md:text-sm text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* ✅ INSTALLMENT PLANS SECTION - Only for Lumos L1 */}
              {installmentPlans && (
                <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <FaCreditCard className="text-[#82B708] text-lg md:text-xl" />
                    <h3 className="text-lg md:text-xl font-bold text-[#222222]">
                      Flexible Payment Plans
                    </h3>
                  </div>
                  
                  {/* First Payment Info */}
                  <div className="bg-[#82B708]/10 p-3 md:p-4 rounded-lg mb-4">
                    <div className="text-xs md:text-sm text-gray-600 mb-1">First Payment (Covers Month 1)</div>
                    <div className="text-2xl md:text-3xl font-bold text-[#82B708]">
                      ₦{installmentPlans[0].firstPayment.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Pay today to reserve your unit</div>
                  </div>
                  
                  {/* Plan Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    {installmentPlans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                        className={`relative p-3 md:p-4 rounded-lg border transition-all ${
                          selectedPlan === plan.id
                            ? 'border-[#82B708] bg-[#82B708]/5 shadow-md'
                            : 'border-gray-200 bg-white hover:border-[#82B708]/30 hover:bg-gray-50'
                        }`}
                      >
                        {selectedPlan === plan.id && (
                          <FaCheckCircle className="absolute top-2 right-2 text-[#82B708] text-sm" />
                        )}
                        <div className="text-xs md:text-sm font-bold text-[#82B708] mb-1">
                          {plan.months} Months
                        </div>
                        <div className="text-sm md:text-base font-bold text-[#222222] mb-1">
                          ₦{plan.monthly.toLocaleString()}
                        </div>
                        <div className="text-[10px] md:text-xs text-gray-500">per month</div>
                        <div className="mt-2 text-[10px] md:text-xs text-gray-600">
                          {plan.remainingMonths} more payments
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Selected Plan Details */}
                  {selectedPlan && (
                    <div className="mt-4 p-3 bg-[#82B708]/5 rounded-lg border border-[#82B708]/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs md:text-sm font-semibold text-[#222222]">
                          {installmentPlans.find(p => p.id === selectedPlan)?.months} Months Plan
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-600">Monthly (Months 2-{installmentPlans.find(p => p.id === selectedPlan)?.months})</div>
                          <div className="text-lg md:text-xl font-bold text-[#82B708]">
                            ₦{installmentPlans.find(p => p.id === selectedPlan)?.monthly.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Total Amount</div>
                          <div className="text-base md:text-lg font-bold text-[#222222]">
                            ₦{installmentPlans.find(p => p.id === selectedPlan)?.total.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        First payment of ₦100,000 covers month 1, followed by {installmentPlans.find(p => p.id === selectedPlan)?.remainingMonths} monthly payments
                      </div>
                    </div>
                  )}
                  
                  {/* Installment CTA */}
                  <div className="mt-4">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hello! I'm interested in the ${product.name} with installment plan.\n\n` +
                        `Selected Plan: ${selectedPlan ? installmentPlans.find(p => p.id === selectedPlan)?.months + ' months' : 'Not selected'}\n` +
                        `First Payment: ₦100,000 (covers month 1)\n` +
                        `Monthly Payment: ${selectedPlan ? '₦' + installmentPlans.find(p => p.id === selectedPlan)?.monthly.toLocaleString() : 'Varies by plan'}\n` +
                        `Product: ${product.name}\n\n` +
                        `Please provide more information about the payment process.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#82B708] hover:bg-[#6B9606] text-white py-3 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <FaWhatsapp className="text-lg md:text-xl" />
                      {selectedPlan ? 'Apply for Installment Plan' : 'Inquire About Payment Plans'}
                    </a>
                  </div>
                </div>
              )}
              
              {/* Order Buttons - Only show if no installment plans */}
              {!installmentPlans && (
                <div className="bg-gradient-to-r from-gray-50 to-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-[#222222] mb-3 md:mb-4 text-center">Order Now</h3>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#82B708] hover:bg-[#6B9606] text-white py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all flex items-center justify-center gap-2 md:gap-3 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FaWhatsapp className="text-xl md:text-2xl" />
                      WhatsApp Order
                    </a>
                    
                    <a
                      href={callLink}
                      className="flex-1 bg-[#222222] hover:bg-[#333333] text-white py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all flex items-center justify-center gap-2 md:gap-3 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FaPhone className="text-lg md:text-xl" />
                      Call: {displayPhone}
                    </a>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 text-center mt-2 md:mt-3">
                    ⚡ Quick response within 5 minutes
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Specifications */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-gray-100 p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#222222] mb-6 md:mb-8 flex items-center">
              <span className="w-1.5 h-6 md:w-1.5 md:h-8 bg-[#82B708] rounded-full mr-2 md:mr-3"></span>
              Technical Specifications
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
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
        )}
        
        {/* Delivery & Warranty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 flex items-center gap-3 md:gap-4">
            <div className="bg-[#82B708] p-2 md:p-3 rounded-full flex-shrink-0">
              <FaTruck className="text-white text-lg md:text-2xl" />
            </div>
            <div>
              <h4 className="font-bold text-[#222222] text-base md:text-lg">Nationwide Delivery</h4>
              <p className="text-xs md:text-sm text-gray-700">3-7 business days • Free delivery within Lagos</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 flex items-center gap-3 md:gap-4">
            <div className="bg-[#222222] p-2 md:p-3 rounded-full flex-shrink-0">
              <FaShieldAlt className="text-white text-lg md:text-2xl" />
            </div>
            <div>
              <h4 className="font-bold text-[#222222] text-base md:text-lg">Warranty</h4>
              <p className="text-xs md:text-sm text-gray-700">{product.specs?.Warranty || 'Manufacturer warranty'} • Full support included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}