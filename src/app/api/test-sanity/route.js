// src/app/api/test-sanity/route.js
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    const query = `*[_type == "product"] {
      _id,
      id,
      name,
      price,
      category,
      "image": image.asset->url
    }`;
    
    const products = await client.fetch(query);
    
    return Response.json({
      success: true,
      count: products.length,
      products: products
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}