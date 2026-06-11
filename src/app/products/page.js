import { productsMetadata } from "@/app/page-metadata";
import { ProductsSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

import Navbar2 from "@/components/Navbar2";
import ProductsHero from "@/components/product/ProductsHero";
import ProductCollection from "@/components/product/ProductCollection";
import ProductCollection2 from "@/components/product/Product";
import BulkSupply from "@/components/product/BulkSupply";
import FAQSection from "@/components/product/FAQSection";
import Footer from "@/components/Footer";

export const metadata = productsMetadata;

export default function Page() {
  return (
    <>
      <ProductsSchema />
      <FAQSchema />
      <BreadcrumbSchema items={[
        { name: "Home",     url: "https://www.gvrfreshfoods.com/" },
        { name: "Products", url: "https://www.gvrfreshfoods.com/products" },
      ]} />
      <Navbar2 />
      <ProductsHero />
      <ProductCollection />
      <BulkSupply />
      <FAQSection />
      <Footer />
    </>
  );
}