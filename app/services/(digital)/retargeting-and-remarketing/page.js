import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";

import { retargetingRemarketingData } from "./retargetingRemarketingData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";
export const metadata = {
  title: "Retargeting & Remarketing Services",
  description:
    "Re-engage lost visitors with smart retargeting ads. Personalized campaigns across Google and Meta that boost conversions and maximize marketing ROI.",
  openGraph: {
    title: "Retargeting & Remarketing Services | SEG - Social Engagement Group",
    description: "Re-engage lost visitors and win back customers with SEG's smart retargeting ads.",
    url: "/services/retargeting-and-remarketing",
  },
  twitter: {
    title: "Retargeting & Remarketing Services | SEG - Social Engagement Group",
    description: "Re-engage lost visitors and win back customers with SEG's smart retargeting ads.",
  },
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
      <CTA {...retargetingRemarketingData.CTA} />
      <BrandingStrategy {...retargetingRemarketingData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={retargetingRemarketingData.FAQ.items}
        heading={retargetingRemarketingData.FAQ.heading}
      />
    </>
  );
}
