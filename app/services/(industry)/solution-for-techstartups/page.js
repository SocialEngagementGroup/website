import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForTechStartupsData } from "./solutionForTechStartupsData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";
import ServiceSchema from "@/components/ServicePage/ServiceSchema";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

export const metadata = {
  alternates: {
    canonical: "/services/solution-for-techstartups",
  },
  title: siteMetadata.techStartups.title,
  description: siteMetadata.techStartups.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.techStartups.title,
    description: siteMetadata.techStartups.description,
    url: "/services/solution-for-techstartups",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.techStartups.title,
    description: siteMetadata.techStartups.description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.techStartups.title}
        description={siteMetadata.techStartups.description}
        url="/services/solution-for-techstartups" faqs={solutionForTechStartupsData.FAQ.items}
      />
      <HeroSection {...solutionForTechStartupsData.hero} />
      <IntroSection {...solutionForTechStartupsData.intro} />
      <TrustBar {...solutionForTechStartupsData.trustBar} />
      <CostofSection
        heading1={solutionForTechStartupsData.Costof.heading1}
        heading2={solutionForTechStartupsData.Costof.heading2}
        description={solutionForTechStartupsData.Costof.description}
        items={solutionForTechStartupsData.Costof.items}
      />
      <ProfessionalBranding {...solutionForTechStartupsData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...solutionForTechStartupsData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={solutionForTechStartupsData.FAQ.items}
        heading={solutionForTechStartupsData.FAQ.heading}
      />
    <RelatedBlogs />
      </>
  );
}
