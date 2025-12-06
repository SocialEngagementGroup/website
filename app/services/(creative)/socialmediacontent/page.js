
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { SocialMediaContentData } from "@/app/services/(creative)/socialmediacontent/SocialMediaContentData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: {
    default: "Social Media Content Services | Meta & TikTok Experts", // default for pages without page metadata
    template: "%s | SEG", // will replace %s with page-level title
  },
  description: "Create scroll-stopping social content that engages, converts, and builds community. Expert strategies for Meta, TikTok, and beyond to grow your brand.", // default description
};
export default function Page() {
  return (
    <>
  <HeroSection {...SocialMediaContentData.hero} />
      <IntroSection {...SocialMediaContentData.intro} />
      <PlaceHolder/>
      <CostofSection
        heading1={SocialMediaContentData.Costof.heading1}
        heading2={SocialMediaContentData.Costof.heading2}
        description={SocialMediaContentData.Costof.description}
        items={SocialMediaContentData.Costof.items}
      />
      <ProfessionalBranding {...SocialMediaContentData.ProfessionalLogoDesign}/>
      <BrandingStrategy {...SocialMediaContentData.BrandStrategy}/>
      <FAQ items={SocialMediaContentData.FAQ.items} heading={SocialMediaContentData.FAQ.heading} />


    </>
  );
}



