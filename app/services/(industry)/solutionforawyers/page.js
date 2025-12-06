import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionforawyersData } from "@/app/services/(industry)/solutionforawyers/solutionforawyersData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

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
      <HeroSection {...solutionforawyersData.hero} />
      <IntroSection {...solutionforawyersData.intro} />
      <PlaceHolder />
      <CostofSection
        heading1={solutionforawyersData.Costof.heading1}
        heading2={solutionforawyersData.Costof.heading2}
        description={solutionforawyersData.Costof.description}
        items={solutionforawyersData.Costof.items}
      />
      <ProfessionalBranding {...solutionforawyersData.ProfessionalSEO} />
      <BrandingStrategy {...solutionforawyersData.BrandStrategy} />
      <FAQ items={solutionforawyersData.FAQ.items} heading={solutionforawyersData.FAQ.heading} />
    </>
  );
}
