import Image from 'next/image';
import Link from 'next/link';
import { 
  FaShieldAlt, FaMapMarkerAlt, FaWhatsapp, FaPhone, 
  FaCheckCircle, FaAward, FaUsers, FaSolarPanel, 
  FaBolt, FaBatteryFull, FaHandshake
} from 'react-icons/fa';
import { whatsappNumber } from '@/data/products';

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello! I'd like to schedule a site mapping and consultation for my solar project."
  )}`;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-16">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#82B708]/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#82B708] rounded-full"></span>
              <span className="text-sm font-semibold text-[#82B708]">About Bexcel Innovations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 leading-tight">
              Powering Warri & Beyond with{' '}
              <span className="text-[#82B708]">Certified Solar Expertise</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 4 years of hands-on field experience and professional training from 
              Nigeria's leading energy institutions, we bring industrial-grade solar solutions 
              to homes and businesses across Delta State.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        {/* Meet the Founder Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 mb-10">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-[#82B708]/10 to-white rounded-xl p-6 text-center border border-[#82B708]/20">
                <div className="w-32 h-32 mx-auto bg-[#222222] rounded-full flex items-center justify-center mb-4 border-4 border-[#82B708]">
                  <span className="text-5xl text-white font-bold">GO</span>
                </div>
                <h2 className="text-2xl font-bold text-[#222222]">Godspower Onobia</h2>
                <p className="text-[#82B708] font-semibold mb-3">Founder & Lead Solar Consultant</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center justify-center gap-2">
                    <FaMapMarkerAlt className="text-[#82B708]" />
                    Based in Warri, Delta State
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <FaAward className="text-[#82B708]" />
                    4+ Years Field Experience
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#222222] mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#82B708] rounded-full"></span>
                  Professional Journey
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  My name is <span className="font-semibold">Godspower Onobia</span>, and I've dedicated my career 
                  to making reliable solar energy accessible to businesses and families in Warri and across 
                  Delta State. What started as a passion for sustainable energy has grown into a mission-driven 
                  business built on technical excellence and unwavering integrity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#222222] mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#82B708] rounded-full"></span>
                  A Local Presence You Can Trust
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Unlike online-only sellers, Bexcel Innovations is a fully registered business with a physical 
                  office right here in Warri. This means when you work with us, you're not just buying equipment—you're 
                  building a relationship with a local expert who will be here for years to come. You can visit our 
                  office, meet us face-to-face, and know exactly where to find us if you ever need support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="bg-gradient-to-br from-[#82B708]/5 to-white rounded-2xl border border-[#82B708]/20 p-8 md:p-12 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-8 text-center">
            Certified Excellence You Can Count On
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#82B708]/10 rounded-full flex items-center justify-center">
                  <FaAward className="text-[#82B708] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#222222]">Petroleum Training Institute (PTI)</h3>
                  <p className="text-sm text-gray-500">Effurun, Delta State</p>
                </div>
              </div>
              <p className="text-gray-700">
                Professional training in industrial energy systems, electrical installations, 
                and safety protocols. This foundation ensures every installation meets rigorous 
                industrial standards.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#82B708]/10 rounded-full flex items-center justify-center">
                  <FaSolarPanel className="text-[#82B708] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#222222]">Asteven Solar</h3>
                  <p className="text-sm text-gray-500">Specialized Solar Training</p>
                </div>
              </div>
              <p className="text-gray-700">
                Advanced certification in modern solar PV systems, battery storage, and 
                system design optimization. Specialized expertise in Nigerian solar applications.
              </p>
            </div>
          </div>
          
          <div className="bg-[#82B708]/5 p-6 rounded-xl">
            <p className="text-gray-700 italic">
              "These certifications aren't just wall decorations—they're your guarantee that 
              your installation is designed and executed by someone who truly understands the 
              science and safety behind every connection."
            </p>
          </div>
        </div>

        {/* The 80/20 Model Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-6">
            Smarter Solar: The <span className="text-[#82B708]">80/20 Advantage</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here's where we do things differently. Through our direct-to-distributor sourcing model, 
                we cut out the retail markups that inflate solar prices across Nigeria. Here's how it works:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#82B708] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-1">You Pay an 80% Deposit</h3>
                    <p className="text-sm text-gray-600">
                      This secures your place in our wholesale purchasing cycle and locks in 
                      the best market prices for your equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#82B708] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-1">We Source at Wholesale</h3>
                    <p className="text-sm text-gray-600">
                      Leveraging our distributor relationships, we procure your system components 
                      at true wholesale rates—savings we pass directly to you.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#82B708] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-1">You Save 20-35%</h3>
                    <p className="text-sm text-gray-600">
                      By avoiding retail markups, you get premium equipment at significantly 
                      lower prices than typical market rates.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#82B708] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-1">We Install Professionally</h3>
                    <p className="text-sm text-gray-600">
                      The remaining 20% is paid upon delivery, and our certified team handles 
                      the complete, warrantied installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#82B708] to-[#6B9606] text-white p-8 rounded-xl">
              <FaHandshake className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Why This Works for You</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-white text-lg flex-shrink-0 mt-0.5" />
                  <span className="text-sm">You get wholesale prices without buying in bulk</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-white text-lg flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Your deposit protects you against price fluctuations</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-white text-lg flex-shrink-0 mt-0.5" />
                  <span className="text-sm">You work with a local installer who stands behind their work</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-white text-lg flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Complete transparency from procurement to installation</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-bold">Peace of Mind:</span> Because we're a registered business with a physical 
              Warri office, your 80% deposit isn't a risk—it's an investment in savings, secured by a local 
              company you can visit anytime.
            </p>
          </div>
        </div>

        {/* Consultancy-First Approach */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-6">
            Consultancy-First: <span className="text-[#82B708]">Never Over-Buy or Under-Size</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The biggest mistake in solar? Buying the wrong equipment. Too small, and you're left 
                with blackouts. Too large, and you've wasted money on capacity you don't need.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                That's why every project starts with a consultation, not a sales pitch. Before we talk 
                about products, we talk about your:
              </p>
              
              <ul className="space-y-2 mb-6">
                {[
                  "Daily energy consumption patterns",
                  "Critical vs. non-critical loads",
                  "Future expansion plans",
                  "Budget and savings goals"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#82B708] text-sm" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-700 font-medium">
                Only then do we design a system that's perfectly matched to your needs—no more, no less.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#222222] mb-4">Our Promise to You</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#82B708]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaBolt className="text-[#82B708]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#222222]">Right-Sized Systems</p>
                    <p className="text-xs text-gray-500">Perfectly matched to your actual usage</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#82B708]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaBatteryFull className="text-[#82B708]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#222222]">Quality Components</p>
                    <p className="text-xs text-gray-500">No corner-cutting, ever</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#82B708]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaShieldAlt className="text-[#82B708]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#222222]">5-Year Workmanship Warranty</p>
                    <p className="text-xs text-gray-500">We stand behind every installation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-[#222222] to-[#333333] text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience the Bexcel Difference?
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you're ready to start your project or just want to understand your options, 
            we're here to help. No pressure, just honest advice from a local expert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#82B708] hover:bg-[#6B9606] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              <FaWhatsapp className="text-2xl" />
              Book a Site Mapping
            </a>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
            >
              <FaMapMarkerAlt className="text-xl" />
              Visit Our Warri Office
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            📍 Located in Warri, Delta State • Fully Registered Business • Certified Installers
          </p>
        </div>
      </div>
    </div>
  );
}