export default function ProductGrid({ items, onSelect }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {items.map((p) => (
        <button
          key={p.id}
          onClick={() => onSelect(p)}
          className="text-left rounded-2xl border bg-white p-5 hover:shadow-md transition"
        >
          <div className="h-28 rounded-xl bg-neutral-200" />
          <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
          <p className="text-sm text-neutral-600">Capacity: {p.capacity}</p>
          <p className="mt-2 text-sm text-neutral-700">Ideal for: {p.idealFor}</p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-700">
            <span className="rounded-full bg-neutral-100 px-3 py-1">✓ Lights</span>
            <span className="rounded-full bg-neutral-100 px-3 py-1">✓ TV</span>
            <span className="rounded-full bg-neutral-100 px-3 py-1">✗ AC</span>
          </div>

          <div className="mt-5 inline-flex rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white">
            View Details
          </div>
        </button>
      ))}
    </div>
  );
}
