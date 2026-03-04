import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForJewelersData } from "./solutionForJewelersData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "Digital Marketing for Jewelers | Shine Online & Attract Buyers",
  description:
    "Grow your jewelry brand's visibility and customer trust with tailored digital marketing. Get found first, attract quality buyers and build a brand people return to.",
  openGraph: {
    title: "Digital Marketing for Jewelers | SEG - Social Engagement Group",
    description: "Grow your jewelry brand's visibility and customer trust with SEG's tailored jewelry marketing.",
    url: "/services/solution-for-jewelers",
  },
  twitter: {
    title: "Digital Marketing for Jewelers | SEG - Social Engagement Group",
    description: "Grow your jewelry brand's visibility and customer trust with SEG's tailored jewelry marketing.",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection {...solutionForJewelersData.hero} />
      <IntroSection {...solutionForJewelersData.intro} />
      <TrustBar {...solutionForJewelersData.trustBar} />
      <CostofSection
        heading1={solutionForJewelersData.Costof.heading1}
        heading2={solutionForJewelersData.Costof.heading2}
        description={solutionForJewelersData.Costof.description}
        items={solutionForJewelersData.Costof.items}
      />
      <ProfessionalBranding {...solutionForJewelersData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...solutionForJewelersData.BrandStrategy} customClass="solutionForJewelers"/>
      <Testimonials />
      <FAQ items={solutionForJewelersData.FAQ.items} heading={solutionForJewelersData.FAQ.heading} />
    </>
  );
}
