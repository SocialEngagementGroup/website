import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import CTA from "@/components/ServicePage/CTA/CTA";

import { RetargetingServiceData } from "./RetargetingServiceData";
export const metadata = {
  title: {
    default: "Retargeting & Remarketing Services | Win Back Customers",
    template: "%s | SEG",
  },
  description:
    "Re-engage lost visitors with smart retargeting ads. Personalized campaigns across Google and Meta that boost conversions and maximize marketing ROI.",
};

export default function Page() {
  return (
    <>
      <HeroSection {...RetargetingServiceData.hero} />
      <IntroSection {...RetargetingServiceData.intro} />
      <CTA {...RetargetingServiceData.cta} />
      <CostofSection
        heading1={RetargetingServiceData.Costof.heading1}
        heading2={RetargetingServiceData.Costof.heading2}
        description={RetargetingServiceData.Costof.description}
        items={RetargetingServiceData.Costof.items}
      />
      <ProfessionalBranding {...RetargetingServiceData.ProfessionalSEO} />
      <BrandingStrategy {...RetargetingServiceData.BrandStrategy} />
      <FAQ
        items={RetargetingServiceData.FAQ.items}
        heading={RetargetingServiceData.FAQ.heading}
      />
    </>
  );
}
