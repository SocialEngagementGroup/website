import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";

import { websiteDevelopmentData } from "./websiteDevelopmentData";

import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.websiteDevelopment.title,
  description: siteMetadata.websiteDevelopment.description,
  openGraph: {
    title: siteMetadata.websiteDevelopment.title,
    description: siteMetadata.websiteDevelopment.description,
    url: "/services/website-development",
  },
  twitter: {
    title: siteMetadata.websiteDevelopment.title,
    description: siteMetadata.websiteDevelopment.description,
  },
};


export default function Page() {
  return (
    <>
      <HeroSection {...websiteDevelopmentData.hero} />
      <IntroSection {...websiteDevelopmentData.intro} />
      <TrustBar {...websiteDevelopmentData.trustBar} />
      <CostofSection
        heading1={websiteDevelopmentData.Costof.heading1}
        heading2={websiteDevelopmentData.Costof.heading2}
        description={websiteDevelopmentData.Costof.description}
        items={websiteDevelopmentData.Costof.items}
      />
      <ProfessionalBranding {...websiteDevelopmentData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...websiteDevelopmentData.BrandStrategy} />
      <Testimonials />
      <FAQ items={websiteDevelopmentData.FAQ.items} heading={websiteDevelopmentData.FAQ.heading} />
    </>
  );
}
