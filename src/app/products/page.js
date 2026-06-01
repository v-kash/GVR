import Navbar2 from "@/components/Navbar2";
import ProductsHero from "@/components/product/ProductsHero";
import ProductCollection from "@/components/product/ProductCollection";
import BulkSupply from "@/components/product/BulkSupply";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar2 />
    <ProductsHero/>
    <ProductCollection/>
    <BulkSupply />
      <Footer/>
    </>
  );
}