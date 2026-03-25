import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductDetails from '@/components/sections/products/ProductDetails';
import ProductCard from '@/components/sections/products/ProductCard';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductDetails product={product} />
      
      {/* Related Products - Matching Navbar Container */}
      {relatedProducts.length > 0 && (
        <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 mt-12 py-16">
          {/* EXACT container padding as navbar */}
          <div className="w-full px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-[#82B708]/10 text-[#82B708] px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block border border-[#82B708]/30">
                YOU MAY ALSO LIKE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
                Related Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore similar products in the same category
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}