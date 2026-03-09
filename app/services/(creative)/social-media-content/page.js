
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


import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.socialMediaContent.title,
  description: siteMetadata.socialMediaContent.description,
  openGraph: {
    title: siteMetadata.socialMediaContent.title,
    description: siteMetadata.socialMediaContent.description,
    url: "/services/social-media-content",
  },
  twitter: {
    title: siteMetadata.socialMediaContent.title,
    description: siteMetadata.socialMediaContent.description,
  },
};


export default function Page() {
  return (
    <>
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
    </>
  );
}
