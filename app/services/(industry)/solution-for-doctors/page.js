import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionforDoctorsData } from "./solutionforDoctorsData";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: {
    default: "Digital Marketing for Doctors | Get Patients & Build Trust",
    template: "%s | SEG",
  },
  description:
    "Grow your clinic’s visibility and patient trust with tailored healthcare marketing. Get found first, attract quality patients, and scale your practice ethically.",
};

export default function Page() {
  return (
    <>
      <HeroSection {...solutionforDoctorsData.hero} />
      <IntroSection {...solutionforDoctorsData.intro} />
      <CTA {...solutionforDoctorsData.cta} />
      <CostofSection
        heading1={solutionforDoctorsData.Costof.heading1}
        heading2={solutionforDoctorsData.Costof.heading2}
        description={solutionforDoctorsData.Costof.description}
        items={solutionforDoctorsData.Costof.items}
      />
      <ProfessionalBranding {...solutionforDoctorsData.ProfessionalSEO} />
      <BrandingStrategy {...solutionforDoctorsData.BrandStrategy} customClass="solutionForDoctors"/>
      <SecondaryCTA />
      <FAQ items={solutionforDoctorsData.FAQ.items} heading={solutionforDoctorsData.FAQ.heading} />
    </>
  );
}
