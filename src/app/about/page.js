import Navbar2 from "@/components/Navbar2";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import OurValues from "@/components/about/OurValues";
import FarmToDelivery from "@/components/about/FarmToDelivery";
import FounderMessage from "@/components/about/FounderMessage";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar2 />
     <AboutHero/>
     <AboutStory/>
     <OurValues/>
     <FarmToDelivery/>
     <FounderMessage/>
      <Footer/>
    </>
  );
}