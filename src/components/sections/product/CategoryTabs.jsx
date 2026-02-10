export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {categories.map((c) => {
        const isActive = c.key === active;
        return (
          <button
            key={c.key}
            onClick={() => onChange(c.key)}
            className={[
              "rounded-xl border px-4 py-2 text-sm transition",
              isActive
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-neutral-700 hover:bg-neutral-50",
            ].join(" ")}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
