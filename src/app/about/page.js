import { aboutMetadata } from "@/app/page-metadata";
import { AboutPageSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

import Navbar2 from "@/components/Navbar2";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import OurValues from "@/components/about/OurValues";
import FarmToDelivery from "@/components/about/FarmToDelivery";
import FounderMessage from "@/components/about/FounderMessage";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import Footer from "@/components/Footer";

export const metadata = aboutMetadata;

export default function Page() {
  return (
    <>
      <AboutPageSchema />
      <BreadcrumbSchema items={[
        { name: "Home",  url: "https://www.gvrfreshfoods.com/" },
        { name: "About", url: "https://www.gvrfreshfoods.com/about" },
      ]} />
      <Navbar2 />
      <AboutHero />
      <AboutStory />
      <OurValues />
      <FarmToDelivery />
      <MissionVisionSection/>
      <FounderMessage />
      <Footer />
    </>
  );
}