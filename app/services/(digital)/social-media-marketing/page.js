import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { socialMediaMarketingData } from "./socialMediaMarketingData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";
import ServiceSeoJsonLd from "@/components/Seo/ServiceSeoJsonLd";

import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.socialMediaMarketing.title,
  description: siteMetadata.socialMediaMarketing.description,
  alternates: {
    canonical: "/services/social-media-marketing",
  },
  openGraph: {
    title: siteMetadata.socialMediaMarketing.title,
    description: siteMetadata.socialMediaMarketing.description,
    url: "/services/social-media-marketing",
  },
  twitter: {
    title: siteMetadata.socialMediaMarketing.title,
    description: siteMetadata.socialMediaMarketing.description,
  },
};



export default function Page() {
  return (
    <>
      <ServiceSeoJsonLd
        title={siteMetadata.socialMediaMarketing.title}
        description={siteMetadata.socialMediaMarketing.description}
        path="/services/social-media-marketing"
        faqItems={socialMediaMarketingData.FAQ.items}
      />
      <HeroSection {...socialMediaMarketingData.hero} />
      <IntroSection {...socialMediaMarketingData.intro} />
      <TrustBar {...socialMediaMarketingData.trustBar} />
      <CostofSection
        heading1={socialMediaMarketingData.Costof.heading1}
        heading2={socialMediaMarketingData.Costof.heading2}
        description={socialMediaMarketingData.Costof.description}
        items={socialMediaMarketingData.Costof.items}
      />
      <ProfessionalBranding {...socialMediaMarketingData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...socialMediaMarketingData.BrandStrategy} />
      <Testimonials />
      <FAQ items={socialMediaMarketingData.FAQ.items} heading={socialMediaMarketingData.FAQ.heading} />
    </>
  );
}
