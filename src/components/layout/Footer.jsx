import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/product' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const services = [
    { name: 'Solar Installation', href: '/services/solar-installation' },
    { name: 'Portable Power', href: '/product?category=portable' },
    { name: 'Custom Systems', href: '/product?category=custom' },
    { name: 'Maintenance', href: '/services/maintenance' },
    { name: 'Energy Audit', href: '/services/energy-audit' },
  ];
  
  const contactInfo = [
    { icon: <FaPhone className="w-4 h-4" />, text: '0812 358 9191', href: 'tel:+2348123589191' },
    { icon: <FaEnvelope className="w-4 h-4" />, text: 'info@bexcelinnovations.com', href: 'mailto:info@bexcelinnovations.com' },
    { icon: <FaMapMarkerAlt className="w-4 h-4" />, text: 'Warri, Delta State, Nigeria', href: 'https://maps.google.com/?q=Warri+Delta+State' },
  ];
  
  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: 'https://facebook.com/bexcelinnovations', label: 'Facebook' },
    { icon: <FaInstagram className="w-5 h-5" />, href: 'https://instagram.com/bexcelinnovations', label: 'Instagram' },
    { icon: <FaLinkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/bexcelinnovations', label: 'LinkedIn' },
    { icon: <FaTwitter className="w-5 h-5" />, href: 'https://twitter.com/bexcelinnovate', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-neutral-950 text-white/80 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="Bexcel Innovations Logo" 
                className="h-10 brightness-0 invert"
              />
              <div>
                <p className="text-xl font-bold text-white">
                  Bexcel <span className="text-lime-400">Innovations</span>
                </p>
                <p className="text-sm text-white/60">Solar Energy Solutions</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-white/70">
              Leading solar energy company providing premium solar solutions for homes and businesses across Nigeria.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-lime-400/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-lime-400 group"
                  aria-label={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400/0 group-hover:bg-lime-400 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-white/10">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-white/70 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400/0 group-hover:bg-lime-400 transition-all duration-300"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-white/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 text-white/70 hover:text-lime-400 transition-colors duration-300 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-lime-400/10 flex items-center justify-center mt-0.5 group-hover:bg-lime-400/20 transition-colors">
                      {contact.icon}
                    </span>
                    <span className="flex-1">{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Call to Action */}
            <div className="mt-8">
              <Link href="/contact">
                <button className="w-full bg-lime-400 text-neutral-900 font-semibold py-3 rounded-lg hover:bg-lime-300 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl">
                  Get Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm text-white/50">
                © {currentYear} Bexcel Innovations. All rights reserved.
              </p>
              <p className="text-xs text-white/40 mt-1">
                Powering a sustainable future across Nigeria
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-sm text-white/50 hover:text-lime-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/50 hover:text-lime-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-white/50 hover:text-lime-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/5">
            <div className="text-center">
              <div className="text-xs text-white/40 mb-1">Certified Installers</div>
              <div className="text-xs text-lime-400 font-medium">NAFDAC Registered</div>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="text-center">
              <div className="text-xs text-white/40 mb-1">Service Area</div>
              <div className="text-xs text-lime-400 font-medium">Nationwide Coverage</div>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="text-center">
              <div className="text-xs text-white/40 mb-1">Warranty</div>
              <div className="text-xs text-lime-400 font-medium">25-Year Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}