import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { threeDAnimationRenderingData } from "./threeDAnimationRenderingData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "3D Animation & Rendering",
  description: "Transform ideas into stunning 3D visuals. We create hyper-realistic renders, animations, and product demos that captivate audiences and drive engagement.",
  openGraph: {
    title: "3D Animation & Rendering | SEG - Social Engagement Group",
    description: "Transform ideas into stunning 3D visuals with SEG's hyper-realistic 3D animation and rendering.",
    url: "/services/3D-animation-and-rendering",
  },
  twitter: {
    title: "3D Animation & Rendering | SEG - Social Engagement Group",
    description: "Transform ideas into stunning 3D visuals with SEG's hyper-realistic 3D animation and rendering.",
  },
};


export default function Page() {
  return (
    <>
      <HeroSection {...threeDAnimationRenderingData.hero} />
      <IntroSection {...threeDAnimationRenderingData.intro} />
      <TrustBar {...threeDAnimationRenderingData.trustBar} />
      <CostofSection
        heading1={threeDAnimationRenderingData.Costof.heading1}
        heading2={threeDAnimationRenderingData.Costof.heading2}
        description={threeDAnimationRenderingData.Costof.description}
        items={threeDAnimationRenderingData.Costof.items}
      />
      <ProfessionalBranding {...threeDAnimationRenderingData.ProfessionalLogoDesign} />
      <SecondaryCTA />
      <BrandingStrategy {...threeDAnimationRenderingData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={threeDAnimationRenderingData.FAQ.items}
        heading={threeDAnimationRenderingData.FAQ.heading}
      />
    </>
  );
}
