import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { contentCreationData } from "./contentCreationData";
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
    canonical: "/services/content-creation",
  },
  title: siteMetadata.contentCreation.title,
  description: siteMetadata.contentCreation.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.contentCreation.title,
    description: siteMetadata.contentCreation.description,
    url: "/services/content-creation",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.contentCreation.title,
    description: siteMetadata.contentCreation.description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.contentCreation.title}
        description={siteMetadata.contentCreation.description}
        url="/services/content-creation" faqs={contentCreationData.FAQ.items}
      />
      <HeroSection {...contentCreationData.hero} />
      <IntroSection {...contentCreationData.intro} />
      <TrustBar {...contentCreationData.trustBar} />

      <CostofSection
        heading1={contentCreationData.Costof.heading1}
        heading2={contentCreationData.Costof.heading2}
        description={contentCreationData.Costof.description}
        items={contentCreationData.Costof.items}
      />
      <ProfessionalBranding {...contentCreationData.ProfessionalContent} />
      <CTA />
      <BrandingStrategy {...contentCreationData.ContentStrategy} />
      <Testimonials />
      <FAQ
        items={contentCreationData.FAQ.items}
        heading={contentCreationData.FAQ.heading} />
    <RelatedBlogs />
      </>
  );
}
