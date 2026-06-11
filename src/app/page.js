import { homeMetadata } from "@/app/page-metadata";
import { LocalBusinessSchema, WebSiteSchema, FAQSchema } from "@/components/seo/JsonLd";

import Navbar2 from "@/components/Navbar2";
import HeroSection2 from "@/components/HeroSection2";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhoWeServe from "@/components/WhoWeServe";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = homeMetadata;

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <WebSiteSchema />
      <FAQSchema />
      <Navbar2 />
      <HeroSection2 />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <WhoWeServe />
      <GallerySection />
      <CTASection />
      <Footer />
    </>
  );
}