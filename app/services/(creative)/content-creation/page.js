import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { contentCreationData } from "./ContentcreationData.js";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: "Content Creation Services | Graphic, Video & AI Solutions",
  description: "Create content that converts. From videos and graphics to influencer and AI-generated assets—build engagement, trust, and growth for your brand.",
};

export default function Page() {
  return (
    <>
      <HeroSection {...contentCreationData.hero} />
      <IntroSection {...contentCreationData.intro} />
      <CTA {...contentCreationData.cta}/>

      <CostofSection
        heading1={contentCreationData.Costof.heading1}
        heading2={contentCreationData.Costof.heading2}
        description={contentCreationData.Costof.description}
        items={contentCreationData.Costof.items}
      />
      <ProfessionalBranding {...contentCreationData.ProfessionalContent}/>
      <BrandingStrategy {...contentCreationData.ContentStrategy}/>
      <FAQ items={contentCreationData.FAQ.items} heading={contentCreationData.FAQ.heading} />
    </>
  );
}
