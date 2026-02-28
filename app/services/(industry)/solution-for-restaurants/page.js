import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionforRestaurantsData } from "./solutionforRestaurantsData";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

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
      <HeroSection {...solutionforRestaurantsData.hero} />
      <IntroSection {...solutionforRestaurantsData.intro} />
      <CTA {...solutionforRestaurantsData.cta} />
      <CostofSection
        heading1={solutionforRestaurantsData.Costof.heading1}
        heading2={solutionforRestaurantsData.Costof.heading2}
        description={solutionforRestaurantsData.Costof.description}
        items={solutionforRestaurantsData.Costof.items}
      />
      <ProfessionalBranding {...solutionforRestaurantsData.ProfessionalSEO} />
      <BrandingStrategy {...solutionforRestaurantsData.BrandStrategy} />
      <SecondaryCTA />
      <FAQ
        items={solutionforRestaurantsData.FAQ.items}
        heading={solutionforRestaurantsData.FAQ.heading}
      />
    </>
  );
}
