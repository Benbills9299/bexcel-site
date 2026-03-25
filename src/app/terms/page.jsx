import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#82B708] hover:text-[#6B9606] transition-colors mb-6 group"
        >
          <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#222222] mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: March 2026</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using the services provided by Bexcel Innovations, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">2. Products and Services</h2>
              <p className="leading-relaxed">
                Bexcel Innovations provides solar energy solutions including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Solar panel installation and maintenance</li>
                <li>Portable power stations and inverters</li>
                <li>Battery storage systems</li>
                <li>Custom solar solutions for homes and businesses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">3. Orders and Payments</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>All prices are in Nigerian Naira (₦) and include applicable taxes</li>
                <li>Payment must be received in full before product delivery</li>
                <li>We accept bank transfers and secure online payments</li>
                <li>Orders are subject to availability and confirmation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">4. Delivery and Installation</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Delivery times are estimates and may vary based on location</li>
                <li>Free delivery within Lagos for qualifying orders</li>
                <li>Installation services are performed by certified technicians</li>
                <li>Customers must provide safe access to installation areas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">5. Warranty and Returns</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>All products come with manufacturer warranty as specified</li>
                <li>Warranty periods vary by product (2-25 years)</li>
                <li>Returns accepted within 7 days for defective products</li>
                <li>Installation services have a 30-day workmanship warranty</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">6. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Bexcel Innovations shall not be liable for any indirect, incidental, or consequential damages arising from the use 
                or inability to use our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">7. Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these Terms, please contact us:
              </p>
              <ul className="list-none mt-2 space-y-1">
                <li>Email: info@bexcelinnovations.com</li>
                <li>Phone: 0812 358 9191</li>
                <li>Address: Warri, Delta State, Nigeria</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}