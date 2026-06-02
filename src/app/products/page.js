import Navbar2 from "@/components/Navbar2";
import ProductsHero from "@/components/product/ProductsHero";
import ProductCollection from "@/components/product/ProductCollection";
import ProductCollection2 from "@/components/product/Product";
import BulkSupply from "@/components/product/BulkSupply";
import FAQSection from "@/components/product/FAQSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar2 />
    <ProductsHero/>
    <ProductCollection/>
    <BulkSupply />
    <FAQSection />
      <Footer/>
    </>
  );
}