import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";

import { retargetingRemarketingData } from "./retargetingRemarketingData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";
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
      <HeroSection {...retargetingRemarketingData.hero} />
      <IntroSection {...retargetingRemarketingData.intro} />
      <TrustBar {...retargetingRemarketingData.trustBar} />
      <CostofSection
        heading1={retargetingRemarketingData.Costof.heading1}
        heading2={retargetingRemarketingData.Costof.heading2}
        description={retargetingRemarketingData.Costof.description}
        items={retargetingRemarketingData.Costof.items}
      />
      <ProfessionalBranding {...retargetingRemarketingData.ProfessionalSEO} />
      <SecondaryCTA {...retargetingRemarketingData.SecondaryCTA} />
      <BrandingStrategy {...retargetingRemarketingData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={retargetingRemarketingData.FAQ.items}
        heading={retargetingRemarketingData.FAQ.heading}
      />
    </>
  );
}
