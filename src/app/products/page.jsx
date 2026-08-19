// src/app/products/page.jsx
import { client } from '@/lib/sanity';
import ProductsClient from './ProductsClient';
import { FaBolt, FaBatteryFull, FaSolarPanel } from 'react-icons/fa';

// Fetch products from Sanity on the server
async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    id,
    name,
    category,
    price,
    shortDesc,
    description,
    features,
    specs,
    "image": image.asset->url,
    "images": images[].asset->url,
    rating,
    reviews,
    capacity,
    youtubeLink
  }`;
  
  return await client.fetch(query);
}

// Get unique categories with counts
function getCategoriesWithCounts(products) {
  const categories = {};
  products.forEach(product => {
    if (product.category) {
      categories[product.category] = (categories[product.category] || 0) + 1;
    }
  });
  return categories;
}

export default async function ProductsPage() {
  const products = await getProducts();
  const categoryCounts = getCategoriesWithCounts(products);
  
  const categoryNames = {
    powerStations: 'Portable Power Stations',
    inverters: 'Inverters',
    batteries: 'Batteries',
    panels: 'Solar Panels',
    custom: 'Custom Systems',
    electronics: 'Electronics',
    bulbs: 'DC Bulbs'
  };

  const categoryIcons = {
    powerStations: <FaBolt className="text-[#82B708]" />,
    inverters: <FaBolt className="text-[#82B708]" />,
    batteries: <FaBatteryFull className="text-[#82B708]" />,
    panels: <FaSolarPanel className="text-[#82B708]" />,
    custom: <FaSolarPanel className="text-[#82B708]" />,
    electronics: <FaBolt className="text-[#82B708]" />,
    bulbs: <FaBolt className="text-[#82B708]" />
  };

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 text-center">
          <h2 className="text-2xl font-bold text-[#222222] mb-4">No Products Found</h2>
          <p className="text-gray-600 mb-6">Add your first product in Sanity Studio!</p>
          <a 
            href="https://bexcel-site.sanity.studio" 
            target="_blank" 
            className="bg-[#82B708] text-white px-6 py-3 rounded-lg hover:bg-[#6B9606] inline-block"
          >
            Open Sanity Studio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
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
                <span className="font-bold text-[#82B708] text-lg">{products.length}+</span> Products Available
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
      <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-12">
        <ProductsClient 
          products={products} 
          categoryCounts={categoryCounts}
          categoryNames={categoryNames}
          categoryIcons={categoryIcons}
        />
      </div>
    </div>
  );
}