// src/app/products/ProductsClient.jsx
'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/sections/products/ProductCard';
import { FaWhatsapp } from 'react-icons/fa';

export default function ProductsClient({ 
  products, 
  categoryCounts, 
  categoryNames, 
  categoryIcons 
}) {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const productsRef = useRef(null);

  // Update search when URL changes
  useEffect(() => {
    const search = searchParams.get('search') || '';
    setSearchQuery(search);
    
    // ✅ Scroll to products when search is performed
    if (search && productsRef.current) {
      setTimeout(() => {
        productsRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, [searchParams]);

  // Handle search submit - dismiss keyboard and scroll
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // ✅ Dismiss the keyboard on mobile
    if (e.currentTarget) {
      e.currentTarget.blur();
    }
    
    // ✅ Scroll to products after search
    if (searchQuery.trim() && productsRef.current) {
      setTimeout(() => {
        productsRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 200);
    }
  };

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name?.toLowerCase().includes(query) ||
        p.shortDesc?.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [products, activeCategory, searchQuery]);

  const hasFilteredProducts = filteredProducts.length > 0;

  return (
    <>
      {/* Search Bar */}
      <div className="mb-6 md:mb-8">
        <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search products by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#82B708]/50 focus:border-[#82B708] text-sm bg-white"
            />
          </div>
        </form>
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-6 md:mb-8 p-3 md:p-4 bg-white rounded-lg border border-gray-200">
        <span className="text-xs md:text-sm font-medium text-gray-700 mr-1 md:mr-2">Categories:</span>
        
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-[#82B708] text-white shadow-sm'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Products
        </button>
        
        {Object.keys(categoryCounts).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all flex items-center gap-1 cursor-pointer ${
              activeCategory === category
                ? 'bg-[#82B708] text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {categoryIcons[category]}
            <span>{categoryNames[category] || category}</span>
          </button>
        ))}
      </div>
      
      {/* Results Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-[#222222]">
            {activeCategory === 'all' ? 'All Products' : (categoryNames[activeCategory] || activeCategory)}
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">
            Showing <span className="font-medium text-[#82B708]">{filteredProducts.length}</span> of {products.length} products
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>
        {activeCategory !== 'all' && (
          <button 
            onClick={() => setActiveCategory('all')}
            className="text-xs md:text-sm text-[#82B708] hover:text-[#6B9606] transition-colors"
          >
            Clear filter ×
          </button>
        )}
      </div>
      
      {/* ✅ Products Grid with ref for scrolling */}
      <div ref={productsRef}>
        {hasFilteredProducts ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product._id} 
                product={product} 
                isVisible={true}
                delay={index * 50}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-16 bg-white rounded-lg border border-gray-200">
            <div className="text-4xl md:text-5xl mb-4 text-gray-300">🔍</div>
            <h3 className="text-base md:text-lg font-semibold text-[#222222] mb-2">No products found</h3>
            <p className="text-sm text-gray-500 mb-6">We couldn't find any products matching your criteria.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-5 py-2 md:px-6 md:py-2.5 bg-[#82B708] hover:bg-[#6B9606] text-white rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
      
      {/* Need Help Section */}
      <div className="mt-12 md:mt-16 bg-white rounded-lg border border-gray-200 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold text-[#222222] mb-1">Need help choosing the right product?</h3>
            <p className="text-xs md:text-sm text-gray-600">Our solar experts are ready to assist you with personalized recommendations.</p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <a
              href="https://wa.me/2348123589191"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-5 md:py-2.5 bg-[#82B708] hover:bg-[#6B9606] text-white rounded-lg text-xs md:text-sm font-medium transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              <FaWhatsapp className="text-sm md:text-base" />
              <span className="hidden xs:inline">Chat on WhatsApp</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>
            <a
              href="tel:+2348123589191"
              className="px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg text-xs md:text-sm font-medium transition-all"
            >
              <span className="hidden xs:inline">Call Us</span>
              <span className="xs:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}