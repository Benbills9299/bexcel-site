
// src/app/products/[id]/page.jsx
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity';
import ProductDetails from '@/components/sections/products/ProductDetails';
import ProductCard from '@/components/sections/products/ProductCard';

async function getProduct(id) {
  const query = `*[_type == "product" && id == $id][0] {
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
    youtubeLink
  }`;
  
  return await client.fetch(query, { id });
}

// Fetch all products for static generation
async function getAllProducts() {
  const query = `*[_type == "product"] {
    id
  }`;
  
  return await client.fetch(query);
}

// Generate static paths
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

// Fetch related products
async function getRelatedProducts(category, currentId) {
  const query = `*[_type == "product" && category == $category && id != $currentId][0...4] {
    _id,
    id,
    name,
    category,
    price,
    shortDesc,
    "image": image.asset->url,
    rating,
    reviews
  }`;
  
  return await client.fetch(query, { category, currentId });
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = await getRelatedProducts(product.category, product.id);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductDetails product={product} />
      
      {relatedProducts.length > 0 && (
        <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 mt-12 py-16">
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
                <ProductCard key={related._id} product={related} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}