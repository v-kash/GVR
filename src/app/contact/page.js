import Navbar2 from "@/components/Navbar2";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import LocationSection from "@/components/contact/LocationSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar2 />
    <ContactHero/>
    <ContactSection/>
    <LocationSection/>
      <Footer/>
    </>
  );
}