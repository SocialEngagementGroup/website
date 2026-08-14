
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { brandingData } from "./brandingData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";
import ServiceSchema from "@/components/ServicePage/ServiceSchema";

export const metadata = {
  alternates: {
    canonical: "/services/branding",
  },
  title: siteMetadata.branding.title,
  description: siteMetadata.branding.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.branding.title,
    description: siteMetadata.branding.description,
    url: "/services/branding",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.branding.title,
    description: siteMetadata.branding.description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.branding.title}
        description={siteMetadata.branding.description}
        url="/services/branding" faqs={brandingData.FAQ.items}
      />
      <HeroSection {...brandingData.hero} />
      <IntroSection {...brandingData.intro} />
      <TrustBar {...brandingData.trustBar} />
      <CostofSection
        heading1={brandingData.Costof.heading1}
        heading2={brandingData.Costof.heading2}
        description={brandingData.Costof.description}
        items={brandingData.Costof.items}
      />
      <ProfessionalBranding {...brandingData.ProfessionalBranding} />
      <CTA />
      <BrandingStrategy {...brandingData.BrandStrategy} />
      <Testimonials />
      <FAQ items={brandingData.FAQ.items} heading={brandingData.FAQ.heading} />
      <RelatedBlogs />
    </>
  );
}
