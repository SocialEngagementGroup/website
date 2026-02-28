import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { ThreeDAnimationData } from "./ThreeDAnimationData";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "3D Animation & Rendering Services | Realistic Visual Design",
  description: "Transform ideas into stunning 3D visuals. We create hyper-realistic renders, animations, and product demos that captivate audiences and drive engagement.",
};


export default function Page() {
  return (
    <>
      <HeroSection {...ThreeDAnimationData.hero} />
      <IntroSection {...ThreeDAnimationData.intro} />
      <CTA {...ThreeDAnimationData.cta} />
      <CostofSection
        heading1={ThreeDAnimationData.Costof.heading1}
        heading2={ThreeDAnimationData.Costof.heading2}
        description={ThreeDAnimationData.Costof.description}
        items={ThreeDAnimationData.Costof.items}
      />
      <ProfessionalBranding {...ThreeDAnimationData.ProfessionalLogoDesign} />
      <SecondaryCTA />
      <BrandingStrategy {...ThreeDAnimationData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={ThreeDAnimationData.FAQ.items}
        heading={ThreeDAnimationData.FAQ.heading}
      />
    </>
  );
}
