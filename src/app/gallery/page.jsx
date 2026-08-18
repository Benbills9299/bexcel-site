'use client';

import { useState } from 'react';
import { FaWhatsapp, FaTimes, FaChevronLeft, FaChevronRight, FaTiktok, FaPlay } from 'react-icons/fa';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Gallery Projects Data - TikTok is OPTIONAL
  const projects = [
    {
      id: 1,
      title: "2kVA Solar Installation",
      category: "Residential",
      capacity: "2kVA",
      location: "Warri, Delta State",
      description: "Complete 2kVA solar power system for a residential property.",
      features: ["2kVA Inverter", "Solar Panels", "Battery Backup", "24/7 Power"],
      image: "/products/2kva_2.jpeg",
      images: [
        "/products/2kva_1.jpeg",
        "/products/2kva_2.jpeg",
      ]
      // NO TIKTOK - won't show video badge
    },
    {
      id: 2,
      title: "12kVA Itel Solar Installation",
      category: "Commercial",
      capacity: "12kVA",
      location: "Warri, Delta State",
      description: "Commercial-grade 12kVA Itel solar system providing reliable power.",
      features: ["12kVA Itel Inverter", "High Capacity Batteries", "Commercial Grade", "Energy Monitoring"],
      image: "/products/12kva.jpeg",
      images: [
        "/products/12kva.jpeg",
      ],
      // WITH TIKTOK - will show video badge
      tiktokUrl: "https://www.tiktok.com/@yourusername/video/xxxxx",
    },
    {
      id: 3,
      title: "12kVA System with 30kWh Battery Bank",
      category: "Residential/Commercial",
      capacity: "12kVA",
      location: "Warri, Delta State",
      description: "Heavy-duty 12kVA solar installation with dual 15kWh batteries.",
      features: ["12kVA Inverter", "2 x 15kWh Batteries", "Extended Backup"],
      image: "/products/12kvaclean.jpeg",
      images: [
        "/products/lvtopsun12kva.jpeg",
        "/products/12kvaclean.jpeg",
      ],
      tiktokUrl: "https://www.tiktok.com/embed/v2/7633801073957817620",
      
    },
    {
      id: 4,
      title: "6kVA Solar System with 5kWh Battery",
      category: "Residential/Commercial",
      capacity: "6kVA",
      location: "Warri, Delta State",
      description: "Efficient 6kVA solar installation with lithium battery.",
      features: ["6kVA Inverter", "5kWh Lithium Battery", "Smart Management"],
      image: "/products/6kva-installation.jpg",
      images: [
        "/products/12kva.jpeg",
      ]
      // NO TIKTOK - won't show video badge
    }
  ];

  const openLightbox = (project, index) => {
    setSelectedImage(project);
    setCurrentIndex(index);
    setSelectedVideo(null);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
    setCurrentIndex(0);
  };

  const openVideo = (project) => {
    setSelectedVideo(project);
    setSelectedImage(null);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const nextImage = () => {
    if (selectedImage && selectedImage.images) {
      setCurrentIndex((prev) => (prev + 1) % selectedImage.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage && selectedImage.images) {
      setCurrentIndex((prev) => (prev - 1 + selectedImage.images.length) % selectedImage.images.length);
    }
  };

  const categories = ["All", "Residential", "Commercial", "Industrial"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-16">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#82B708]/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#82B708] rounded-full"></span>
              <span className="text-sm font-semibold text-[#82B708]">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
              Solar Installation <span className="text-[#82B708]">Gallery</span>
            </h1>
            <p className="text-lg text-gray-600">
              Browse through our completed solar projects across Warri and Delta State. 
              See the quality and professionalism we bring to every installation.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#82B708] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#82B708]">20+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#82B708]">100%</div>
              <div className="text-sm text-gray-500">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#82B708]">Warri</div>
              <div className="text-sm text-gray-500">Local Expertise</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#82B708]">4+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(project, 0)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-100 p-4"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/222222/82B708/png?text=' + encodeURIComponent(project.title);
                  }}
                />
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold bg-[#82B708] px-4 py-2 rounded-full">
                    Click to View Full Size
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#82B708] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
                {/* TikTok Badge - ONLY SHOWS IF tiktokUrl EXISTS */}
                {project.tiktokUrl && (
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideo(project);
                    }}
                    className="absolute bottom-4 right-4 bg-black/80 hover:bg-black text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
                  >
                    <FaTiktok className="text-base" />
                    <FaPlay className="text-xs" />
                    Watch Video
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#222222]">{project.title}</h3>
                  <span className="text-[#82B708] font-semibold text-sm">{project.capacity}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{project.location}</p>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/2348123589191?text=${encodeURIComponent(
                    `Hello! I saw your ${project.title} installation in your gallery. I'm interested in a similar solar system for my property in Warri. Please provide more information.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#82B708] hover:bg-[#6B9606] text-white py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-base" />
                  Request Similar Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#222222] to-[#333333] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Power Your Property?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Get a free consultation and site mapping for your solar installation. 
            We serve Warri and all surrounding areas in Delta State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348123589191?text=Hello! I'd like to schedule a free consultation for solar installation at my property in Warri."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#82B708] hover:bg-[#6B9606] text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <FaWhatsapp className="text-xl" />
              Get Free Consultation
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/20"
            >
              Visit Our Warri Office
            </a>
          </div>
        </div>
      </div>

      {/* Full Size Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#82B708] transition-colors z-10"
          >
            <FaTimes size={30} />
          </button>
          
          {selectedImage.images && selectedImage.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#82B708] transition-colors bg-black/50 hover:bg-black/70 p-3 rounded-full z-10"
              >
                <FaChevronLeft size={30} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#82B708] transition-colors bg-black/50 hover:bg-black/70 p-3 rounded-full z-10"
              >
                <FaChevronRight size={30} />
              </button>
            </>
          )}
          
          <div className="max-w-[90vw] max-h-[90vh] overflow-auto">
            <img
              src={selectedImage.images?.[currentIndex] || selectedImage.image}
              alt={selectedImage.title}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
              onError={(e) => {
                e.target.src = 'https://placehold.co/1200x800/222222/82B708/png?text=' + encodeURIComponent(selectedImage.title);
              }}
            />
            <div className="text-center mt-4 bg-black/50 p-4 rounded-lg">
              <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{selectedImage.location}</p>
              <p className="text-gray-400 text-sm mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* TikTok Video Modal - PORTRAIT MODE FOR MOBILE */}
      {selectedVideo && selectedVideo.tiktokUrl && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 text-white hover:text-[#82B708] transition-colors z-10"
          >
            <FaTimes size={30} />
          </button>
          
          <div className="w-full max-w-md mx-auto"> {/* Portrait container */}
            <div className="relative rounded-lg overflow-hidden bg-black">
              {/* 9:16 Portrait aspect ratio for TikTok videos */}
              <div className="relative pb-[177.78%] h-0">
                <iframe
                  src={selectedVideo.tiktokUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${selectedVideo.title} - TikTok Video`}
                />
              </div>
            </div>
            <div className="text-center mt-4 bg-black/50 p-4 rounded-lg">
              <h3 className="text-white text-xl font-bold">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{selectedVideo.location}</p>
              <a
                href={selectedVideo.tiktokOriginalUrl || selectedVideo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-[#82B708] hover:text-white transition-colors"
              >
                <FaTiktok className="text-lg" />
                Watch on TikTok
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}