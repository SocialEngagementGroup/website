import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForDoctorsData } from "./solutionForDoctorsData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "Digital Marketing for Doctors",
  description:
    "Grow your clinic’s visibility and patient trust with tailored healthcare marketing. Get found first, attract quality patients, and scale your practice ethically.",
  openGraph: {
    title: "Digital Marketing for Doctors | SEG - Social Engagement Group",
    description: "Grow your clinic’s visibility and patient trust with SEG's tailored healthcare marketing.",
    url: "/services/solution-for-doctors",
  },
  twitter: {
    title: "Digital Marketing for Doctors | SEG - Social Engagement Group",
    description: "Grow your clinic’s visibility and patient trust with SEG's tailored healthcare marketing.",
  },
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
      <CTA />
      <BrandingStrategy {...solutionForDoctorsData.BrandStrategy} customClass="solutionForDoctors"/>
      <Testimonials />
      <FAQ items={solutionForDoctorsData.FAQ.items} heading={solutionForDoctorsData.FAQ.heading} />
    </>
  );
}
