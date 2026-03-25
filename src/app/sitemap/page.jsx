import Link from 'next/link';
import { FaArrowLeft, FaHome, FaInfo, FaImage, FaPhone, FaSolarPanel, FaBalanceScale, FaShieldAlt, FaSitemap } from 'react-icons/fa';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();
  
  const mainPages = [
    { name: 'Home', href: '/', icon: <FaHome />, description: 'Return to homepage' },
    { name: 'Products', href: '/products', icon: <FaSolarPanel />, description: 'Browse our solar products' },
    { name: 'About Us', href: '/about', icon: <FaInfo />, description: 'Learn about our company' },
    { name: 'Gallery', href: '/gallery', icon: <FaImage />, description: 'View our installation projects' },
    { name: 'Contact', href: '/contact', icon: <FaPhone />, description: 'Get in touch with us' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', icon: <FaShieldAlt />, description: 'How we handle your data' },
    { name: 'Terms of Service', href: '/terms', icon: <FaBalanceScale />, description: 'Terms and conditions' },
    { name: 'Sitemap', href: '/sitemap', icon: <FaSitemap />, description: 'Site navigation guide' },
  ];

  const productCategories = [
    { name: 'Power Stations', href: '/products?category=powerStations', count: 3 },
    { name: 'Inverters', href: '/products?category=inverters', count: 2 },
    { name: 'Batteries', href: '/products?category=batteries', count: 2 },
    { name: 'Solar Panels', href: '/products?category=panels', count: 1 },
  ];

  const servicePages = [
    { name: 'Solar Installation', href: '/services/solar-installation' },
    { name: 'Portable Power', href: '/products?category=portable' },
    { name: 'Custom Systems', href: '/products?category=custom' },
    { name: 'Maintenance', href: '#' },
    { name: 'Energy Audit', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#82B708] hover:text-[#6B9606] transition-colors mb-6 group"
        >
          <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#222222] mb-2">Sitemap</h1>
          <p className="text-gray-500 mb-8">Complete guide to all pages on Bexcel Innovations website</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-semibold text-[#222222] mb-4 pb-2 border-b border-gray-200">Main Pages</h2>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link 
                      href={page.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-[#82B708] text-lg mt-0.5 group-hover:scale-110 transition-transform">
                        {page.icon}
                      </span>
                      <div>
                        <span className="text-[#222222] font-medium group-hover:text-[#82B708] transition-colors">
                          {page.name}
                        </span>
                        <p className="text-xs text-gray-500 mt-0.5">{page.description}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div>
              <h2 className="text-xl font-semibold text-[#222222] mb-4 pb-2 border-b border-gray-200">Legal & Information</h2>
              <ul className="space-y-3">
                {legalPages.map((page) => (
                  <li key={page.href}>
                    <Link 
                      href={page.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-[#82B708] text-lg mt-0.5 group-hover:scale-110 transition-transform">
                        {page.icon}
                      </span>
                      <div>
                        <span className="text-[#222222] font-medium group-hover:text-[#82B708] transition-colors">
                          {page.name}
                        </span>
                        <p className="text-xs text-gray-500 mt-0.5">{page.description}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h2 className="text-xl font-semibold text-[#222222] mb-4 pb-2 border-b border-gray-200">Product Categories</h2>
              <ul className="space-y-3">
                {productCategories.map((category) => (
                  <li key={category.href}>
                    <Link 
                      href={category.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-[#222222] group-hover:text-[#82B708] transition-colors">
                        {category.name}
                      </span>
                      <span className="bg-[#82B708]/10 text-[#82B708] px-2 py-1 rounded-full text-xs font-medium">
                        {category.count} products
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-semibold text-[#222222] mb-4 pb-2 border-b border-gray-200">Our Services</h2>
              <ul className="space-y-3">
                {servicePages.map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors text-[#222222] hover:text-[#82B708]"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-[#222222] mb-3">Need Help Finding Something?</h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Contact us directly and we'll help you out.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2348123589191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#82B708] text-white rounded-lg hover:bg-[#6B9606] transition-colors"
              >
                <FaPhone className="text-sm" />
                WhatsApp Us
              </a>
              <a
                href="mailto:info@bexcelinnovations.com"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaPhone className="text-sm" />
                Send Email
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-400 mt-8 text-center">
            © {currentYear} Bexcel Innovations. All rights reserved. | Last updated: March 2026
          </p>
        </div>
      </div>
    </div>
  );
}