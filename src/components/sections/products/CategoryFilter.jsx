'use client';

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={`px-6 py-3 rounded-full transition-all ${
              active === category.id 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="font-medium">{category.name}</span>
            <span className="ml-2 text-sm opacity-75">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
}