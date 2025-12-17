import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import CTA from "@/components/ServicePage/CTA/CTA";

import { ReviewReputationData } from "@/app/services/(digital)/review-and-reputation-management/ReviewReputationData";

export const metadata = {
  title: {
    default: "Review & Reputation Management | Build Customer Trust",
    template: "%s | SEG",
  },
  description:
    "Protect and grow your online reputation. We monitor reviews, manage responses, and generate positive feedback to boost trust and conversions.",
};

export default function Page() {
  return (
    <>
      <HeroSection {...ReviewReputationData.hero} />
      <IntroSection {...ReviewReputationData.intro} />
      <CTA {...ReviewReputationData.cta} />
      <CostofSection
        heading1={ReviewReputationData.Costof.heading1}
        heading2={ReviewReputationData.Costof.heading2}
        description={ReviewReputationData.Costof.description}
        items={ReviewReputationData.Costof.items}
      />
      <ProfessionalBranding {...ReviewReputationData.ProfessionalSEO} />
      <BrandingStrategy {...ReviewReputationData.BrandStrategy} />
      <FAQ
        items={ReviewReputationData.FAQ.items}
        heading={ReviewReputationData.FAQ.heading}
      />
    </>
  );
}
