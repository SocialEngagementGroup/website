import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
// update url

import { reviewReputationManagementData } from "./reviewReputationManagementData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "Review & Reputation Management",
  description:
    "Protect and grow your online reputation. We monitor reviews, manage responses, and generate positive feedback to boost trust and conversions.",
  openGraph: {
    title: "Review & Reputation Management | SEG - Social Engagement Group",
    description: "Protect and grow your online reputation with SEG's expert review management.",
    url: "/services/review-and-reputation-management",
  },
  twitter: {
    title: "Review & Reputation Management | SEG - Social Engagement Group",
    description: "Protect and grow your online reputation with SEG's expert review management.",
  },
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
      <CTA />
      <BrandingStrategy {...reviewReputationManagementData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={reviewReputationManagementData.FAQ.items}
        heading={reviewReputationManagementData.FAQ.heading}
      />
    </>
  );
}
