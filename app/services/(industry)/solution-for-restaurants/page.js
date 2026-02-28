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
  title: "Digital Marketing for Restaurants",
  description:
    "Boost your restaurant's visibility and drive more bookings with tailored digital marketing. Get found by local foodies and grow your business with a strong online presence.",
  openGraph: {
    title: "Digital Marketing for Restaurants | SEG - Social Engagement Group",
    description: "Drive more diners to your restaurant with SEG's specialized digital marketing strategies.",
    url: "/services/solution-for-restaurants",
  },
  twitter: {
    title: "Digital Marketing for Restaurants | SEG - Social Engagement Group",
    description: "Drive more diners to your restaurant with SEG's specialized digital marketing strategies.",
  },
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
