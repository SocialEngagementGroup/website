import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { VisualMediaData } from "@/app/services/(creative)/video-graphy-photography/VisualMediaData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: {
    default: "Videography & Photography Services | Visual Storytelling",
    template: "%s | SEG",
  },
  description:
    "Capture your brand’s story with stunning visuals. We offer professional videography and photography that build trust, boost engagement, and drive growth.",
};

export default function Page() {
  return (
    <>
      <HeroSection {...VisualMediaData.hero} />
      <IntroSection {...VisualMediaData.intro} />
      <PlaceHolder />
      <CostofSection
        heading1={VisualMediaData.Costof.heading1}
        heading2={VisualMediaData.Costof.heading2}
        description={VisualMediaData.Costof.description}
        items={VisualMediaData.Costof.items}
      />
      <ProfessionalBranding {...VisualMediaData.ProfessionalLogoDesign} />
      <BrandingStrategy {...VisualMediaData.BrandStrategy} />
      <FAQ
        items={VisualMediaData.FAQ.items}
        heading={VisualMediaData.FAQ.heading}
      />
    </>
  );
}
