import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForLawyersData } from "./solutionForLawyersData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: {
    default: "Digital Marketing for Law Firms | Build Trust & Grow",
    template: "%s | SEG",
  },
  description:
    "Boost your law firm’s visibility and reputation with tailored digital marketing. Get found first, attract quality clients, and grow your practice with trust.",
};



export default function Page() {
  return (
    <>
      <HeroSection {...solutionForLawyersData.hero} />
      <IntroSection {...solutionForLawyersData.intro} />
      <TrustBar {...solutionForLawyersData.trustBar} />
      <CostofSection
        heading1={solutionForLawyersData.Costof.heading1}
        heading2={solutionForLawyersData.Costof.heading2}
        description={solutionForLawyersData.Costof.description}
        items={solutionForLawyersData.Costof.items}
      />
      <ProfessionalBranding {...solutionForLawyersData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...solutionForLawyersData.BrandStrategy} />
      <Testimonials />
      <FAQ items={solutionForLawyersData.FAQ.items} heading={solutionForLawyersData.FAQ.heading} />
    </>
  );
}
