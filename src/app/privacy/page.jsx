import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#82B708] hover:text-[#6B9606] transition-colors mb-6 group"
        >
          <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#222222] mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: March 2026</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed">
                At Bexcel Innovations, we collect information you provide directly to us, such as when you create an account, 
                make a purchase, request customer support, or communicate with us via WhatsApp, email, or phone. This may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Information about your solar energy needs and preferences</li>
                <li>Communications you have with our team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">2. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Process your orders and payments</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send you technical updates and product information</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">3. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Service providers who assist in operating our business (payment processors, delivery services)</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">5. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information. To exercise these rights, 
                please contact us at info@bexcelinnovations.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#222222] mb-3">6. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none mt-2 space-y-1">
                <li>Email: info@bexcelinnovations.com</li>
                <li>Phone: 0812 358 9191</li>
                <li>WhatsApp: <a href="https://wa.me/2348123589191" className="text-[#82B708] hover:underline">Chat with us</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}