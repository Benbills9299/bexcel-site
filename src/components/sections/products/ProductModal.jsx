export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold">{product.name}</h3>
            <p className="mt-1 text-sm text-neutral-600">Capacity: {product.capacity}</p>
            <p className="mt-3 text-neutral-700">{product.description}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border px-3 py-1 text-sm hover:bg-neutral-50"
          >
            Close
          </button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-semibold">Recommended Load (Can Power)</p>
            <ul className="mt-2 space-y-2 text-sm text-neutral-700">
              {product.canPower.map((x) => (
                <li key={x}>✓ {x}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold">Not Recommended (Cannot Power)</p>
            <ul className="mt-2 space-y-2 text-sm text-neutral-700">
              {product.cannotPower.map((x) => (
                <li key={x}>✗ {x}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-neutral-700">
          <span className="font-semibold">Recommended for:</span> {product.recommendedFor}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white">
            Get Quote
          </button>
          <button className="rounded-full border px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
