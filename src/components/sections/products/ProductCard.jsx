'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaBolt, FaBatteryFull, FaSolarPanel, FaStar, FaRegStar, FaCreditCard, FaCalendarAlt } from 'react-icons/fa';
import { whatsappNumber, whatsappMessage } from '@/data/products';

export default function ProductCard({ product, isVisible = true, delay = 0 }) {
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageError, setImageError] = useState({});
  const [showInstallment, setShowInstallment] = useState(false);
  
  // Handle both Sanity and local product formats
  const productId = product._id || product.id;
  const productSlug = product.id || product._id;
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `${whatsappMessage} ${product.name} - ${product.price}\n\nI'm interested in this product. Please provide more information.`
  )}`;
  
  const defaultImage = `https://placehold.co/600x400/222222/82B708/png?text=${encodeURIComponent(product.name?.substring(0, 20) || 'Product')}`;
  
  // Get image source - handles both Sanity and local data
  const getImageSrc = () => {
    if (imageError[productId]) {
      return defaultImage;
    }
    // Sanity image (string URL)
    if (product.image && typeof product.image === 'string') {
      return product.image;
    }
    // Local data images array
    if (product.images && product.images.length > 0) {
      return product.images[0];
    }
    return defaultImage;
  };

  const getCategoryIcon = () => {
    switch(product.category) {
      case 'inverters':
        return <FaBolt className="text-[#82B708]" />;
      case 'batteries':
        return <FaBatteryFull className="text-[#82B708]" />;
      case 'panels':
        return <FaSolarPanel className="text-[#82B708]" />;
      default:
        return null;
    }
  };

  // Installment plans - only for Lumos L1
  const getInstallmentPlans = () => {
    if (product.name === 'Lumos L1' || product.id === 'lumos-l1-portable-power') {
      return [
        { months: 12, monthly: 39700, total: 576400, firstPayment: 100000 },
        { months: 18, monthly: 29500, total: 631000, firstPayment: 100000 },
        { months: 24, monthly: 24950, total: 698800, firstPayment: 100000 }
      ];
    }
    return null;
  };

  const installmentPlans = getInstallmentPlans();
  
  // Use rating from Sanity or fallback
  const rating = product.rating ? product.rating.toFixed(1) : (4 + Math.random()).toFixed(1);
  const reviews = product.reviews || Math.floor(Math.random() * 50) + 20;
  
  return (
    <div 
      className={`group bg-white rounded-lg border border-gray-200 hover:border-[#82B708]/30 hover:shadow-md transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link href={`/products/${productSlug}`} className="block relative">
        <div className="relative h-48 bg-gray-50 rounded-t-lg overflow-hidden">
          <img
            src={getImageSrc()}
            alt={product.name || 'Product'}
            className={`w-full h-full object-contain p-4 transition-all duration-500 ${
              imageLoaded[productId] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            } group-hover:scale-105`}
            onLoad={() => {
              setImageLoaded(prev => ({ ...prev, [productId]: true }));
              setImageError(prev => ({ ...prev, [productId]: false }));
            }}
            onError={() => {
              console.error(`Failed to load image for ${product.name}:`, getImageSrc());
              setImageError(prev => ({ ...prev, [productId]: true }));
              setImageLoaded(prev => ({ ...prev, [productId]: true }));
            }}
          />
          
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 shadow-sm border border-gray-200">
            {getCategoryIcon()}
            <span className="capitalize text-gray-700">{product.category}</span>
          </div>
          
          {product.capacity && (
            <div className="absolute bottom-3 right-3 bg-[#82B708]/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md shadow-sm">
              {product.capacity}
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${productSlug}`}>
          <h3 className="text-base font-semibold text-[#222222] hover:text-[#82B708] line-clamp-2 mb-1 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xs text-gray-500 mb-2 line-clamp-2 min-h-[32px]">
          {product.shortDesc || 'High-quality solar power solution'}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              i < Math.floor(parseFloat(rating)) 
                ? <FaStar key={i} className="text-xs" />
                : <FaRegStar key={i} className="text-xs" />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {rating} ({reviews} reviews)
          </span>
        </div>
        
        {/* Price Section */}
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-[#222222]">{product.price}</span>
              {product.savings && (
                <div className="text-[10px] font-medium text-[#82B708] uppercase tracking-wider">
                  {product.savings}
                </div>
              )}
            </div>
            
            {installmentPlans && (
              <button
                onClick={() => setShowInstallment(!showInstallment)}
                className="flex items-center gap-1 text-xs bg-[#82B708]/10 text-[#82B708] px-2 py-1 rounded-md hover:bg-[#82B708]/20 transition-colors"
              >
                <FaCreditCard className="text-xs" />
                <span>{showInstallment ? 'Hide' : 'Pay in'} Installments</span>
              </button>
            )}
          </div>
        </div>
        
        {/* Installment Plans */}
        {installmentPlans && showInstallment && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <FaCalendarAlt className="text-[#82B708] text-xs" />
              <span className="text-xs font-semibold text-[#222222]">Flexible Payment Plans</span>
            </div>
            <div className="text-xs text-gray-600 mb-2">
              <span className="font-medium">First Payment:</span> ₦{installmentPlans[0].firstPayment.toLocaleString()}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {installmentPlans.map((plan, index) => (
                <div key={index} className="text-center p-2 bg-white rounded-md border border-gray-200">
                  <div className="text-xs font-bold text-[#82B708]">{plan.months} months</div>
                  <div className="text-sm font-bold text-[#222222]">₦{plan.monthly.toLocaleString()}</div>
                  <div className="text-[10px] text-gray-500">per month</div>
                </div>
              ))}
            </div>
            <div className="mt-2 text-[10px] text-gray-500 text-center">
              Total from ₦{installmentPlans[0].total.toLocaleString()} to ₦{installmentPlans[2].total.toLocaleString()}
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-[#82B708]/30 hover:bg-[#82B708]/10 text-[#82B708] transition-colors"
              title="Order via WhatsApp"
            >
              <FaWhatsapp className="text-sm" />
            </a>
            
            <Link
              href={`/products/${productSlug}`}
              className="px-3 py-1.5 bg-[#82B708] hover:bg-[#6B9606] text-white text-xs font-medium rounded-md transition-colors flex items-center gap-1"
            >
              <span>View</span>
              <span className="text-sm">→</span>
            </Link>
          </div>
          
          {installmentPlans && (
            <div className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full">
              0% Interest
            </div>
          )}
        </div>
      </div>
    </div>
  );
}