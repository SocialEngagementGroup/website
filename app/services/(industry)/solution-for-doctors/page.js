import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForDoctorsData } from "./solutionForDoctorsData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

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
      <HeroSection {...solutionForDoctorsData.hero} />
      <IntroSection {...solutionForDoctorsData.intro} />
      <TrustBar {...solutionForDoctorsData.trustBar} />
      <CostofSection
        heading1={solutionForDoctorsData.Costof.heading1}
        heading2={solutionForDoctorsData.Costof.heading2}
        description={solutionForDoctorsData.Costof.description}
        items={solutionForDoctorsData.Costof.items}
      />
      <ProfessionalBranding {...solutionForDoctorsData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...solutionForDoctorsData.BrandStrategy} customClass="solutionForDoctors"/>
      <Testimonials />
      <FAQ items={solutionForDoctorsData.FAQ.items} heading={solutionForDoctorsData.FAQ.heading} />
    </>
  );
}
