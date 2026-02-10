import Hero from "@/components/sections/home/Hero";
import PartnersCarousel from "@/components/sections/home/PartnersCarousel";
import Education from "@/components/sections/home/Education";
import ProductTiles from "@/components/sections/home/ProductTiles";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersCarousel />
      <Education />
      <ProductTiles />
    </>
  );
}
