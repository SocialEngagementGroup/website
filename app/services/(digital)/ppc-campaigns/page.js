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

import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.ppc.title,
  description: siteMetadata.ppc.description,
  openGraph: {
    title: siteMetadata.ppc.title,
    description: siteMetadata.ppc.description,
    url: "/services/ppc-campaigns",
  },
  twitter: {
    title: siteMetadata.ppc.title,
    description: siteMetadata.ppc.description,
  },
};
export default function Page() {
  return (
    <>
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
