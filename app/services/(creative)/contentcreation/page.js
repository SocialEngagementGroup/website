import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { contentCreationData } from "@/app/services/(creative)/contentcreation/ContentcreationData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: "Professional Content Creation Services | Engage & Convert",
  description: "Create content that captures attention and drives engagement. Scroll-stopping graphics, videos, influencer campaigns, and AI-powered assets for your brand.",
};

export default function Page() {
  return (
    <>
      <HeroSection {...contentCreationData.hero} />
      <IntroSection {...contentCreationData.intro} />
      <PlaceHolder/>
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
