// src/app/products/ProductsClient.jsx
'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/sections/products/ProductCard';
import { FaWhatsapp } from 'react-icons/fa';

export default function ProductsClient({ 
  products, 
  categoryCounts, 
  categoryNames, 
  categoryIcons 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
        p.shortDesc?.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [products, activeCategory, searchQuery]);

  const hasFilteredProducts = filteredProducts.length > 0;

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search products by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#82B708]/50 focus:border-[#82B708] text-sm bg-white"
            />
          </div>
        </div>
      </div>
      
      {/* Category Filters - Without Counts */}
      <div className="flex flex-wrap items-center gap-2 mb-8 p-4 bg-white rounded-lg border border-gray-200">
        <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
        
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 cursor-pointer ${
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
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#222222]">
            {activeCategory === 'all' ? 'All Products' : (categoryNames[activeCategory] || activeCategory)}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Showing <span className="font-medium text-[#82B708]">{filteredProducts.length}</span> of {products.length} products
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>
        {activeCategory !== 'all' && (
          <button 
            onClick={() => setActiveCategory('all')}
            className="text-sm text-[#82B708] hover:text-[#6B9606] transition-colors"
          >
            Clear filter ×
          </button>
        )}
      </div>
      
      {/* Products Grid */}
      {hasFilteredProducts ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
          <div className="text-5xl mb-4 text-gray-300">🔍</div>
          <h3 className="text-lg font-semibold text-[#222222] mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">We couldn't find any products matching your criteria.</p>
          <button 
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="px-6 py-2.5 bg-[#82B708] hover:bg-[#6B9606] text-white rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            View All Products
          </button>
        </div>
      )}
      
      {/* Need Help Section */}
      <div className="mt-16 bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-[#222222] mb-1">Need help choosing the right product?</h3>
            <p className="text-sm text-gray-600">Our solar experts are ready to assist you with personalized recommendations.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/2348123589191"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#82B708] hover:bg-[#6B9606] text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              <FaWhatsapp className="text-base" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+2348123589191"
              className="px-5 py-2.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-all"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}