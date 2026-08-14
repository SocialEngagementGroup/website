
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { socialMediaContentData } from "./socialMediaContentData";

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
    canonical: "/services/social-media-content",
  },
  title: siteMetadata.socialMediaContent.title,
  description: siteMetadata.socialMediaContent.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.socialMediaContent.title,
    description: siteMetadata.socialMediaContent.description,
    url: "/services/social-media-content",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.socialMediaContent.title,
    description: siteMetadata.socialMediaContent.description,
  },
};


export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.socialMediaContent.title}
        description={siteMetadata.socialMediaContent.description}
        url="/services/social-media-content" faqs={socialMediaContentData.FAQ.items}
      />
  <HeroSection {...socialMediaContentData.hero} />
      <IntroSection {...socialMediaContentData.intro} />
      <TrustBar {...socialMediaContentData.trustBar} />
      <CostofSection
        heading1={socialMediaContentData.Costof.heading1}
        heading2={socialMediaContentData.Costof.heading2}
        description={socialMediaContentData.Costof.description}
        items={socialMediaContentData.Costof.items}
      />
      <ProfessionalBranding {...socialMediaContentData.ProfessionalBranding}/>
      <CTA />
      <BrandingStrategy {...socialMediaContentData.BrandStrategy}/>
      <Testimonials />
      <FAQ items={socialMediaContentData.FAQ.items} heading={socialMediaContentData.FAQ.heading} />
    <RelatedBlogs />
      </>
  );
}
