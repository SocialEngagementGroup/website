import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForRestaurantsData } from "./solutionForRestaurantsData";
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
      <HeroSection {...solutionForRestaurantsData.hero} />
      <IntroSection {...solutionForRestaurantsData.intro} />
      <TrustBar {...solutionForRestaurantsData.trustBar} />
      <CostofSection
        heading1={solutionForRestaurantsData.Costof.heading1}
        heading2={solutionForRestaurantsData.Costof.heading2}
        description={solutionForRestaurantsData.Costof.description}
        items={solutionForRestaurantsData.Costof.items}
      />
      <ProfessionalBranding {...solutionForRestaurantsData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...solutionForRestaurantsData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={solutionForRestaurantsData.FAQ.items}
        heading={solutionForRestaurantsData.FAQ.heading}
      />
    </>
  );
}
