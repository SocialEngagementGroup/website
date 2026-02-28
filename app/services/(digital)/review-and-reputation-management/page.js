import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
// update url

import { reviewReputationManagementData } from "./reviewReputationManagementData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

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
      <HeroSection {...reviewReputationManagementData.hero} />
      <IntroSection {...reviewReputationManagementData.intro} />
      <TrustBar {...reviewReputationManagementData.trustBar} />
      <CostofSection
        heading1={reviewReputationManagementData.Costof.heading1}
        heading2={reviewReputationManagementData.Costof.heading2}
        description={reviewReputationManagementData.Costof.description}
        items={reviewReputationManagementData.Costof.items}
      />
      <ProfessionalBranding {...reviewReputationManagementData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...reviewReputationManagementData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={reviewReputationManagementData.FAQ.items}
        heading={reviewReputationManagementData.FAQ.heading}
      />
    </>
  );
}
