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

import siteMetadata from "@/data/metadata";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

export const metadata = {
  title: siteMetadata.doctors.title,
  description: siteMetadata.doctors.description,
  openGraph: {
    title: siteMetadata.doctors.title,
    description: siteMetadata.doctors.description,
    url: "/services/solution-for-doctors",
  },
  twitter: {
    title: siteMetadata.doctors.title,
    description: siteMetadata.doctors.description,
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
    <RelatedBlogs />
      </>
  );
}
