export const productCategories = [
  { key: "power-stations", label: "Power Stations" },
  { key: "home-solar", label: "Home Solar Systems" },
  { key: "business-solar", label: "Business Solar Systems" },
  { key: "backup", label: "Backup Solutions" },
];

export const products = [
  {
    id: "lumos-1kva",
    category: "power-stations",
    name: "Lumos Box 1kVA",
    capacity: "1kVA",
    idealFor: "Small homes / shops",
    description:
      "Ideal for basic home power needs and small shops. Reliable backup for essential appliances.",
    canPower: ["Lights (10–15)", "TV", "Fans", "Decoder", "Laptop"],
    cannotPower: ["Air Conditioner", "Electric cooker", "Iron"],
    recommendedFor: "1–2 bedroom apartments or kiosks",
  },
  {
    id: "station-2kva",
    category: "power-stations",
    name: "Compact Power 2kVA",
    capacity: "2kVA",
    idealFor: "2–3 bedroom apartments",
    description:
      "More headroom for heavier usage. Great for homes with more fans, TVs, and longer runtime needs.",
    canPower: ["Lights (15–25)", "TV", "Fans", "Decoder", "Laptop"],
    cannotPower: ["Air Conditioner", "Electric cooker"],
    recommendedFor: "2–3 bedroom apartments",
  },
];
