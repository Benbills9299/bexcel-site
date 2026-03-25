// ⚠️ CHANGE THIS TO YOUR WHATSAPP NUMBER!
// Format: 2348123456789 (remove 0, add 234)
export const whatsappNumber = '2348123589191';
export const whatsappMessage = 'Hello! I want to inquire about this product: ';

export const productCategories = [
  { id: 'inverters', name: 'Inverters', count: 2 },
  { id: 'batteries', name: 'Batteries', count: 1 },
  { id: 'panels', name: 'Solar Panels', count: 1 },
  { id: 'powerStations', name: 'Portable Power Stations', count: 3 },
  { id: 'bulbs', name: 'dc bulbs', count: 1 }
];

export const products = [
  {
    id: 'lumos-l1-portable-power',
    name: 'Lumos L1',
    category: 'powerStations',
    price: 525000,
    shortDesc: 'Modified sine wave hybrid inverter for home use',
    intro: 'A compact and reliable power solution for home or small business use.',
    description: 'The 320Wh Hybrid Solar Inverter System is a compact and reliable power solution designed to provide uninterrupted electricity for your home or small business. It comes as a complete solar kit, making it easy to enjoy clean and dependable power even during grid outages.',
    whatsIncluded: [
      '160W Monocrystalline Solar Panel',
      'Built-in Inverter with MPPT Charge Controller',
      'Durable Deep Cycle Battery',
      'Inverter Grid Charger',
      '4 Energy-Saving LED Bulbs'
    ],
    benefits: [
      'Smart MPPT technology for maximum charging efficiency',
      'Intelligent battery management system for longer life',
      'Dual charging options (solar and grid)',
      'Perfect for lights, phones, and small appliances',
      'Ready to use out of the box'
    ],
    images: ['/products/Lumosl1.png', '/products/Lumosl12.png', '/products/Lumosl13.png'],
    specs: {
      'Capacity': '320Wh / 160W',
      'Battery Voltage': '12V DC',
      'Solar Input': '160W Max',
      'Efficiency': '> 90%',
      'Warranty': '2 Years'
    },
    // ✅ ADD TIKTOK LINK HERE
    tiktokLink: 'https://www.tiktok.com/@yourusername/video/123456789' // Replace with actual Lumos L1 video
  },
  
  {
    id: 'Itel-Power-Tank-1000wh',
    name: 'Itel 1000wh Power Station',
    category: 'powerStations',
    price: 380000,
    shortDesc: 'High-capacity lithium battery with 10+ years lifespan',
    description: 'Advanced lithium iron phosphate battery with built-in BMS. 6000+ cycle life.',
    images: ['/products/itelpowertank.jpg', '/products/itelpowertank2.jpg'],
    features: [
      '6000+ Cycle Life',
      'Built-in BMS',
      '90% Depth of Discharge',
      'Maintenance Free',
    ],
    specs: {
      'Capacity': '1Kwh',
      'Voltage': '12V',
      'Cycle Life': '> 6000 cycles',
      'Warranty': '2 Years',
      'Weight': '5 kg'
    },
    // ✅ ADD TIKTOK LINK HERE
    tiktokLink: 'https://www.tiktok.com/@yourusername/video/987654321' // Replace with actual Itel 1000wh video
  },
  
  {
    id: 'Itel-Power-Go-320wh',
    name: 'Itel 320wh Power Station',
    category: 'powerStations',
    price: 120000,
    shortDesc: 'High-capacity lithium battery with 10+ years lifespan',
    description: 'Advanced lithium iron phosphate battery with built-in BMS. 6000+ cycle life.',
    images: ['/products/itelpowergo.png'],
    features: [
      '6000+ Cycle Life',
      'Built-in BMS',
      '90% Depth of Discharge',
      'Maintenance Free',
    ],
    specs: {
      'Capacity': '320Wh',
      'Voltage': '12V',
      'Cycle Life': '> 6000 cycles',
      'Warranty': '1 Year',
      'Weight': '3 kg'
    },
    // ✅ ADD TIKTOK LINK HERE
    tiktokLink: 'https://www.tiktok.com/@yourusername/video/456789123' // Replace with actual Itel 320wh video
  },
  
  {
    id: 'dc-bulbs',
    name: 'Dc Bulb 9watts',
    category: 'bulbs',
    price: 10500,
    shortDesc: 'High-quality dc bulb',
    description: 'Long-Lasting 12V DC Bulb – Works Seamlessly with Sunking, Lumos & Other Solar Systems',
    images: ['/products/DCBULBS.png'],
    features: [
      '12V DC',
      'Built-in switch',
      '5-metre cable',
      'LED light',
      'Low power consumption'
    ],
    specs: {
      'Power Rating': '9 Watts',
      'Voltage': '12V',
      'Cycle Life': '> 6000 cycles',
    },
    // ✅ ADD TIKTOK LINK HERE (optional - can be empty if no video)
    tiktokLink: '' // Empty string means no TikTok link for this product
  },
  
  {
    id: 'solar-panel-550w',
    name: 'Solar Panel 550W Monocrystalline',
    category: 'panels',
    price: 45000,
    shortDesc: 'High-efficiency monocrystalline panel',
    description: 'Premium monocrystalline solar panel with PERC technology and anti-reflective coating.',
    images: ['https://placehold.co/600x400/1565C0/FFFFFF/png?text=Solar+Panel+550W'],
    features: [
      '21.5% Cell Efficiency',
      'PERC Technology',
      'Anti-Reflective Coating',
      'PID Resistance',
      '12-Year Warranty'
    ],
    specs: {
      'Power': '550W',
      'Efficiency': '21.5%',
      'Dimensions': '2278 x 1134 x 35 mm',
      'Warranty': '12 Years Product',
      'Performance Warranty': '25 Years'
    },
    // ✅ NO TIKTOK LINK - this product won't show the TikTok section
  },
  
  {
    id: 'inverter-3kva',
    name: 'Solar Inverter 3KVA',
    category: 'inverters',
    price: 85000,
    shortDesc: 'Compact inverter for small homes',
    description: 'Reliable 3KVA solar inverter perfect for small households and offices.',
    images: ['https://placehold.co/600x400/0A2463/FFFFFF/png?text=3KVA+Inverter'],
    features: [
      'Pure Sine Wave',
      'LED Display',
      'Battery Protection',
      'Compact Design',
      'Easy Installation'
    ],
    specs: {
      'Capacity': '3KVA / 2400W',
      'Battery Voltage': '24V DC',
      'Solar Input': '150V Max',
      'Warranty': '2 Years'
    },
    // ✅ NO TIKTOK LINK - this product won't show the TikTok section
  }
];