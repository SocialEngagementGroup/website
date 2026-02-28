import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import { googleBusinessProfileManagementData } from "./googleBusinessProfileManagementData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "Google Business Profile Management",
  description:
    "Get more local calls and visits with expert Google Business Profile management. Optimize listings, boost visibility, and build customer trust.",
  openGraph: {
    title: "Google Business Profile Management | SEG - Social Engagement Group",
    description: "Get more local calls and visits with SEG's expert Google Business Profile management.",
    url: "/services/google-business-profile-management",
  },
  twitter: {
    title: "Google Business Profile Management | SEG - Social Engagement Group",
    description: "Get more local calls and visits with SEG's expert Google Business Profile management.",
  },
};
export default function Page() {
  return (
    <>
      <HeroSection {...googleBusinessProfileManagementData.hero} />
      <IntroSection {...googleBusinessProfileManagementData.intro} />
      <TrustBar {...googleBusinessProfileManagementData.trustBar} />
      <CostofSection
        heading1={googleBusinessProfileManagementData.Costof.heading1}
        heading2={googleBusinessProfileManagementData.Costof.heading2}
        description={googleBusinessProfileManagementData.Costof.description}
        items={googleBusinessProfileManagementData.Costof.items}
      />
      <ProfessionalBranding {...googleBusinessProfileManagementData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...googleBusinessProfileManagementData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={googleBusinessProfileManagementData.FAQ.items}
        heading={googleBusinessProfileManagementData.FAQ.heading}
      />
    </>
  );
}
