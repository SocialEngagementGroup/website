import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";

import { GoogleBusinessData } from "@/app/services/(digital)/google-business-data/GoogleBusinessData";
export const metadata = {
  title: {
    default: "Google Business Profile Management | Boost Local SEO",
    template: "%s | SEG",
  },
  description:
    "Get more local calls and visits with expert Google Business Profile management. Optimize listings, boost visibility, and build customer trust.",
};
export default function Page() {
  return (
    <>
      <HeroSection {...GoogleBusinessData.hero} />
      <IntroSection {...GoogleBusinessData.intro} />
      <PlaceHolder />
      <CostofSection
        heading1={GoogleBusinessData.Costof.heading1}
        heading2={GoogleBusinessData.Costof.heading2}
        description={GoogleBusinessData.Costof.description}
        items={GoogleBusinessData.Costof.items}
      />
      <ProfessionalBranding {...GoogleBusinessData.ProfessionalSEO} />
      <BrandingStrategy {...GoogleBusinessData.BrandStrategy} />
      <FAQ
        items={GoogleBusinessData.FAQ.items}
        heading={GoogleBusinessData.FAQ.heading}
      />
    </>
  );
}
