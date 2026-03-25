'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { FaWhatsapp, FaSearch, FaBolt, FaBatteryFull, FaSolarPanel, FaArrowRight, FaFilter } from 'react-icons/fa';
import { productCategories, products, whatsappNumber } from '@/data/products';
import ProductCard from '@/components/sections/products/ProductCard';

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const sectionRef = useRef(null);

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
  
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sort products
    switch(sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => {
          const priceA = parseInt(a.price.toString().replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.toString().replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => {
          const priceA = parseInt(a.price.toString().replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.toString().replace(/[^0-9]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }
    
    return filtered;
  }, [activeCategory, searchQuery, sortBy]);

  // Get category icon
  const getCategoryIcon = (categoryId) => {
    switch(categoryId) {
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

  // Get total products count
  const totalProducts = products.length;
  const activeCategoryName = activeCategory === 'all' 
    ? 'All Products' 
    : productCategories.find(c => c.id === activeCategory)?.name || 'Products';
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Clean and Minimal */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#82B708]/10 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-[#82B708] rounded-full"></span>
              <span className="text-xs font-semibold text-[#82B708] uppercase tracking-wider">Product Catalog</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
              Solar Energy <span className="text-[#82B708]">Solutions</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Browse our comprehensive range of premium solar products. 
              From portable power stations to complete home systems, find the perfect solution for your energy needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="font-bold text-[#82B708] text-lg">{totalProducts}+</span> Products Available
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="font-bold text-[#82B708] text-lg">24/7</span> Support
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="font-bold text-[#82B708] text-lg">Nationwide</span> Delivery
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={sectionRef} className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-12">
        
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#82B708]/50 focus:border-[#82B708] text-sm bg-white"
              />
            </div>
            
            {/* Sort Dropdown */}
            <div className="md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#82B708]/50 focus:border-[#82B708] text-sm bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
            
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden px-4 py-3 rounded-lg border border-gray-300 bg-white flex items-center justify-center gap-2 text-gray-700"
            >
              <FaFilter className="text-sm" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>
        </div>
        
        {/* Category Filters - Desktop */}
        <div className={`hidden md:flex flex-wrap items-center gap-2 mb-8 p-4 bg-white rounded-lg border border-gray-200`}>
          <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
          
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-[#82B708] text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
            <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
              activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-gray-300 text-gray-700'
            }`}>
              {productCategories.reduce((acc, cat) => acc + (cat.count || 0), 0)}
            </span>
          </button>
          
          {productCategories.filter(c => c.id !== 'all').map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                activeCategory === category.id
                  ? 'bg-[#82B708] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryIcon(category.id)}
              <span>{category.name}</span>
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-300 text-gray-700'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
        
        {/* Category Filters - Mobile */}
        {showFilters && (
          <div className="md:hidden mb-8 p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setActiveCategory('all'); setShowFilters(false); }}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === 'all'
                    ? 'bg-[#82B708] text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                All ({productCategories.reduce((acc, cat) => acc + (cat.count || 0), 0)})
              </button>
              
              {productCategories.filter(c => c.id !== 'all').map((category) => (
                <button
                  key={category.id}
                  onClick={() => { setActiveCategory(category.id); setShowFilters(false); }}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                    activeCategory === category.id
                      ? 'bg-[#82B708] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#222222]">
              {activeCategoryName}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Showing <span className="font-medium text-[#82B708]">{filteredProducts.length}</span> of {totalProducts} products
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
          
          {/* Active Filters */}
          <div className="hidden md:block text-sm text-gray-500">
            {activeCategory !== 'all' && (
              <button 
                onClick={() => setActiveCategory('all')}
                className="flex items-center gap-1 text-[#82B708] hover:text-[#6B9606] transition-colors"
              >
                Clear filters
                <span className="text-lg">&times;</span>
              </button>
            )}
          </div>
        </div>
        
        {/* Products Grid - 3 Columns */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isVisible={isVisible}
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
        
        {/* Need Help Section - Subtle CTA */}
        <div className="mt-16 bg-white rounded-lg border border-gray-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Need help choosing the right product?</h3>
              <p className="text-sm text-gray-600">Our solar experts are ready to assist you with personalized recommendations.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#82B708] hover:bg-[#6B9606] text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <FaWhatsapp className="text-base" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+${whatsappNumber}`}
                className="px-5 py-2.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-all"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}