import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
// update url

import { reviewReputationManagementData } from "./reviewReputationManagementData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";
import ServiceSchema from "@/components/ServicePage/ServiceSchema";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

export const metadata = {
  alternates: {
    canonical: "/services/review-and-reputation-management",
  },
  title: siteMetadata.reputationManagement.title,
  description: siteMetadata.reputationManagement.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.reputationManagement.title,
    description: siteMetadata.reputationManagement.description,
    url: "/services/review-and-reputation-management",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.reputationManagement.title,
    description: siteMetadata.reputationManagement.description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.reputationManagement.title}
        description={siteMetadata.reputationManagement.description}
        url="/services/review-and-reputation-management" faqs={reviewReputationManagementData.FAQ.items}
      />
      <HeroSection {...reviewReputationManagementData.hero} />
      <IntroSection {...reviewReputationManagementData.intro} />
      <TrustBar {...reviewReputationManagementData.trustBar} />
      <CostofSection
        heading1={reviewReputationManagementData.Costof.heading1}
        heading2={reviewReputationManagementData.Costof.heading2}
        description={reviewReputationManagementData.Costof.description}
        items={reviewReputationManagementData.Costof.items}
      />
      <ProfessionalBranding {...reviewReputationManagementData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...reviewReputationManagementData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={reviewReputationManagementData.FAQ.items}
        heading={reviewReputationManagementData.FAQ.heading}
      />
    <RelatedBlogs />
      </>
  );
}
