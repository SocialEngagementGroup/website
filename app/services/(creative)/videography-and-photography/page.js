import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { videographyPhotographyData } from "./videographyPhotographyData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";



export const metadata = {
  title: "Videography & Photography",
  description: "Capture your brand’s story with stunning visuals. We offer professional videography and photography that build trust, boost engagement, and drive growth.",
  openGraph: {
    title: "Videography & Photography | SEG - Social Engagement Group",
    description: "Capture your brand’s story with stunning visuals through SEG's professional videography and photography.",
    url: "/services/videography-and-photography",
  },
  twitter: {
    title: "Videography & Photography | SEG - Social Engagement Group",
    description: "Capture your brand’s story with stunning visuals through SEG's professional videography and photography.",
  },
};


export default function Page() {
  return (
    <>
      <HeroSection {...videographyPhotographyData.hero} />
      <IntroSection {...videographyPhotographyData.intro} />
      <TrustBar {...videographyPhotographyData.trustBar} />
      <CostofSection
        heading1={videographyPhotographyData.Costof.heading1}
        heading2={videographyPhotographyData.Costof.heading2}
        description={videographyPhotographyData.Costof.description}
        items={videographyPhotographyData.Costof.items}
      />
      <ProfessionalBranding {...videographyPhotographyData.ProfessionalLogoDesign} />
      <SecondaryCTA />
      <BrandingStrategy {...videographyPhotographyData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={videographyPhotographyData.FAQ.items}
        heading={videographyPhotographyData.FAQ.heading}
      />
    </>
  );
}
