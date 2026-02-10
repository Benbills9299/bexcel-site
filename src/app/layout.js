import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Instrument_Sans } from 'next/font/google';

// Load Instrument Sans font
const instrumentSans = Instrument_Sans({ 
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  weight: ['400', '500', '600', '700'], // Include all weights you need
});

export const metadata = {
  title: "Bexcel Innovations",
  description: "Reliable Solar Power for Home & Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className={`bg-white text-neutral-900 ${instrumentSans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}