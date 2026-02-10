"use client";

import { useMemo, useState } from "react";
import { productCategories, products } from "@/data/products";
import CategoryTabs from "@/components/sections/product/CategoryTabs";
import ProductGrid from "@/components/sections/product/ProductGrid";
import ProductModal from "@/components/sections/product/ProductModal";

export default function ProductPage() {
  const [active, setActive] = useState(productCategories[0].key);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => products.filter((p) => p.category === active),
    [active]
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-extrabold">Our Products</h1>
      <p className="mt-2 text-neutral-600">
        Browse through our range of solar backup power solutions.
      </p>

      <CategoryTabs categories={productCategories} active={active} onChange={setActive} />
      <ProductGrid items={filtered} onSelect={setSelected} />

      <div className="mt-16 rounded-2xl bg-neutral-50 p-8">
        <h2 className="text-2xl font-bold">Not sure what you need?</h2>
        <p className="mt-2 text-neutral-700">Let us recommend the right system for you.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white">
            Get a Free Recommendation
          </button>
          <button className="rounded-full border px-5 py-3 text-sm font-semibold hover:bg-white">
            WhatsApp Us
          </button>
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
