import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { VisualMediaData } from "./VisualMediaData";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";



export const metadata = {
  title: "Videography & Photography Services | Visual Storytelling",
  description: "Capture your brand’s story with stunning visuals. We offer professional videography and photography that build trust, boost engagement, and drive growth.",
};


export default function Page() {
  return (
    <>
      <HeroSection {...VisualMediaData.hero} />
      <IntroSection {...VisualMediaData.intro} />
      <CTA {...VisualMediaData.cta} />
      <CostofSection
        heading1={VisualMediaData.Costof.heading1}
        heading2={VisualMediaData.Costof.heading2}
        description={VisualMediaData.Costof.description}
        items={VisualMediaData.Costof.items}
      />
      <ProfessionalBranding {...VisualMediaData.ProfessionalLogoDesign} />
      <SecondaryCTA />
      <BrandingStrategy {...VisualMediaData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={VisualMediaData.FAQ.items}
        heading={VisualMediaData.FAQ.heading}
      />
    </>
  );
}
