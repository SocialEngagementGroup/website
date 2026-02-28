import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionforDoctorsData } from "./solutionforDoctorsData";
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
      <HeroSection {...solutionforDoctorsData.hero} />
      <IntroSection {...solutionforDoctorsData.intro} />
      <TrustBar {...solutionforDoctorsData.trustBar} />
      <CostofSection
        heading1={solutionforDoctorsData.Costof.heading1}
        heading2={solutionforDoctorsData.Costof.heading2}
        description={solutionforDoctorsData.Costof.description}
        items={solutionforDoctorsData.Costof.items}
      />
      <ProfessionalBranding {...solutionforDoctorsData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...solutionforDoctorsData.BrandStrategy} customClass="solutionForDoctors"/>
      <Testimonials />
      <FAQ items={solutionforDoctorsData.FAQ.items} heading={solutionforDoctorsData.FAQ.heading} />
    </>
  );
}
