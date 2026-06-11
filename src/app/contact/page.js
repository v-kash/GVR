import { contactMetadata } from "@/app/page-metadata";
import { ContactPageSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

import Navbar2 from "@/components/Navbar2";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import LocationSection from "@/components/contact/LocationSection";
import Footer from "@/components/Footer";

export const metadata = contactMetadata;

export default function Page() {
  return (
    <>
      <ContactPageSchema />
      <FAQSchema />
      <BreadcrumbSchema items={[
        { name: "Home",    url: "https://www.gvrfreshfoods.com/" },
        { name: "Contact", url: "https://www.gvrfreshfoods.com/contact" },
      ]} />
      <Navbar2 />
      <ContactHero />
      <ContactSection />
      <LocationSection />
      <Footer />
    </>
  );
}