import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";


import { ppcCampaignsData } from "./ppcCampaignsData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";
import ServiceSchema from "@/components/ServicePage/ServiceSchema";

export const metadata = {
  alternates: {
    canonical: "/services/ppc-campaigns",
  },
  title: siteMetadata.ppc.title,
  description: siteMetadata.ppc.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.ppc.title,
    description: siteMetadata.ppc.description,
    url: "/services/ppc-campaigns",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.ppc.title,
    description: siteMetadata.ppc.description,
  },
};
export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.ppc.title}
        description={siteMetadata.ppc.description}
        url="/services/ppc-campaigns" faqs={ppcCampaignsData.FAQ.items}
      />
      <HeroSection {...ppcCampaignsData.hero} />
      <IntroSection {...ppcCampaignsData.intro} />
      <TrustBar {...ppcCampaignsData.trustBar} />
      <CostofSection
        heading1={ppcCampaignsData.Costof.heading1}
        heading2={ppcCampaignsData.Costof.heading2}
        description={ppcCampaignsData.Costof.description}
        items={ppcCampaignsData.Costof.items}
      />
      <ProfessionalBranding {...ppcCampaignsData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...ppcCampaignsData.BrandStrategy} />
      <Testimonials />
      <FAQ items={ppcCampaignsData.FAQ.items} heading={ppcCampaignsData.FAQ.heading} />
      <RelatedBlogs />
    </>
  );
}
