import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Instrument_Sans } from 'next/font/google';

// Load Instrument Sans font
const instrumentSans = Instrument_Sans({ 
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: {
    default: "Bexcel Innovations - Solar Energy Solutions in Warri, Delta State",
    template: "%s | Bexcel Innovations"
  },
  description: "Certified solar installer in Warri, Delta State. Professional solar panel installation, portable power stations, and custom solar systems for homes and businesses in Nigeria.",
  keywords: "solar installer Warri, solar panels Delta State, solar energy Nigeria, Bexcel Innovations, solar installation, portable power stations, solar inverter",
  authors: [{ name: "Godspower Onobia" }],
  creator: "Bexcel Innovations",
  publisher: "Bexcel Innovations",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Bexcel Innovations - Professional Solar Installation in Warri",
    description: "Certified solar installer serving Warri and Delta State. Get clean, reliable solar energy for your home or business.",
    url: "https://bexcel-site.vercel.app",  // Changed to your actual URL
    siteName: "Bexcel Innovations",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bexcel Innovations Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bexcel Innovations - Solar Energy Solutions",
    description: "Certified solar installer in Warri, Delta State",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "W43tnDLsC8RYFifviwbv5dLIIeElSR-qyX_FcQPdLfQ",  // Added your verification code
  },
  alternates: {
    canonical: "https://bexcel-site.vercel.app",  // Changed to your actual URL
  },
  category: "solar energy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`bg-white text-neutral-900 ${instrumentSans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}