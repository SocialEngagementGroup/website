import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionforTechStartupsData } from "./solutionforTechStartupsData";
import CTA from "@/components/ServicePage/CTA/CTA";
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
      <HeroSection {...solutionforTechStartupsData.hero} />
      <IntroSection {...solutionforTechStartupsData.intro} />
      <CTA {...solutionforTechStartupsData.cta} />
      <CostofSection
        heading1={solutionforTechStartupsData.Costof.heading1}
        heading2={solutionforTechStartupsData.Costof.heading2}
        description={solutionforTechStartupsData.Costof.description}
        items={solutionforTechStartupsData.Costof.items}
      />
      <ProfessionalBranding {...solutionforTechStartupsData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...solutionforTechStartupsData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={solutionforTechStartupsData.FAQ.items}
        heading={solutionforTechStartupsData.FAQ.heading}
      />
    </>
  );
}
