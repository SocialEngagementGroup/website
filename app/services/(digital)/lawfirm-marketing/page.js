import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { lawfirmMarketingData } from "@/app/services/(digital)/lawfirm-marketing/lawfirmMarketingData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: {
    default: "Social Media Marketing Services | Grow & Engage Audiences",
    template: "%s | SEG",
  },
  description:
    "Boost engagement and sales with data-driven social media marketing. We create high-performing campaigns across Meta, TikTok, LinkedIn, and more.",
};


export default function Page() {
  return (
    <>
      <HeroSection {...lawfirmMarketingData.hero} />
      <IntroSection {...lawfirmMarketingData.intro} />
      <PlaceHolder />
      <CostofSection
        heading1={lawfirmMarketingData.Costof.heading1}
        heading2={lawfirmMarketingData.Costof.heading2}
        description={lawfirmMarketingData.Costof.description}
        items={lawfirmMarketingData.Costof.items}
      />
      <ProfessionalBranding {...lawfirmMarketingData.ProfessionalSEO} />
      <BrandingStrategy {...lawfirmMarketingData.BrandStrategy} />
      <FAQ items={lawfirmMarketingData.FAQ.items} heading={lawfirmMarketingData.FAQ.heading} />
    </>
  );
}
