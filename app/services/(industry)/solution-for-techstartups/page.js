import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForTechStartupsData } from "./solutionForTechStartupsData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: {
    default: "Digital Marketing for Tech Startups | Launch & Scale Fast",
    template: "%s | SEG",
  },
  description:
    "Accelerate your tech startup’s growth with data-driven marketing. Build traction, attract users, and scale visibility from launch to Series A and beyond.",
};

export default function Page() {
  return (
    <>
      <HeroSection {...solutionForTechStartupsData.hero} />
      <IntroSection {...solutionForTechStartupsData.intro} />
      <TrustBar {...solutionForTechStartupsData.trustBar} />
      <CostofSection
        heading1={solutionForTechStartupsData.Costof.heading1}
        heading2={solutionForTechStartupsData.Costof.heading2}
        description={solutionForTechStartupsData.Costof.description}
        items={solutionForTechStartupsData.Costof.items}
      />
      <ProfessionalBranding {...solutionForTechStartupsData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...solutionForTechStartupsData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={solutionForTechStartupsData.FAQ.items}
        heading={solutionForTechStartupsData.FAQ.heading}
      />
    </>
  );
}
