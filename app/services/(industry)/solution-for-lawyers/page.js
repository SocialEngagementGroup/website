import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForLawyersData } from "./solutionForLawyersData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "Digital Marketing for Law Firms",
  description:
    "Boost your law firm’s visibility and reputation with tailored digital marketing. Get found first, attract quality clients, and grow your practice with trust.",
  openGraph: {
    title: "Digital Marketing for Law Firms | SEG - Social Engagement Group",
    description: "Boost your law firm’s visibility and reputation with SEG's tailored digital marketing.",
    url: "/services/solution-for-lawyers",
  },
  twitter: {
    title: "Digital Marketing for Law Firms | SEG - Social Engagement Group",
    description: "Boost your law firm’s visibility and reputation with SEG's tailored digital marketing.",
  },
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
      <CTA />
      <BrandingStrategy {...solutionForLawyersData.BrandStrategy} />
      <Testimonials />
      <FAQ items={solutionForLawyersData.FAQ.items} heading={solutionForLawyersData.FAQ.heading} />
    </>
  );
}
