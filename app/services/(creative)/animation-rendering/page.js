import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { ThreeDAnimationData } from "@/app/services/(creative)/animation-rendering/ThreeDAnimationData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: {
    default: "3D Animation & Rendering Services | Realistic Visual Design",
    template: "%s | SEG",
  },
  description:
    "Transform ideas into stunning 3D visuals. We create hyper-realistic renders, animations, and product demos that captivate audiences and drive engagement.",
};

export default function Page() {
  return (
    <>
      <HeroSection {...ThreeDAnimationData.hero} />
      <IntroSection {...ThreeDAnimationData.intro} />
      <PlaceHolder />
      <CostofSection
        heading1={ThreeDAnimationData.Costof.heading1}
        heading2={ThreeDAnimationData.Costof.heading2}
        description={ThreeDAnimationData.Costof.description}
        items={ThreeDAnimationData.Costof.items}
      />
      <ProfessionalBranding {...ThreeDAnimationData.ProfessionalLogoDesign} />
      <BrandingStrategy {...ThreeDAnimationData.BrandStrategy} />
      <FAQ
        items={ThreeDAnimationData.FAQ.items}
        heading={ThreeDAnimationData.FAQ.heading}
      />
    </>
  );
}
