import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";

import { retargetingRemarketingData } from "./retargetingRemarketingData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";
import ServiceSeoJsonLd from "@/components/Seo/ServiceSeoJsonLd";
import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.retargeting.title,
  description: siteMetadata.retargeting.description,
  alternates: {
    canonical: "/services/retargeting-and-remarketing",
  },
  openGraph: {
    title: siteMetadata.retargeting.title,
    description: siteMetadata.retargeting.description,
    url: "/services/retargeting-and-remarketing",
  },
  twitter: {
    title: siteMetadata.retargeting.title,
    description: siteMetadata.retargeting.description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSeoJsonLd
        title={siteMetadata.retargeting.title}
        description={siteMetadata.retargeting.description}
        path="/services/retargeting-and-remarketing"
        faqItems={retargetingRemarketingData.FAQ.items}
      />
      <HeroSection {...retargetingRemarketingData.hero} />
      <IntroSection {...retargetingRemarketingData.intro} />
      <TrustBar {...retargetingRemarketingData.trustBar} />
      <CostofSection
        heading1={retargetingRemarketingData.Costof.heading1}
        heading2={retargetingRemarketingData.Costof.heading2}
        description={retargetingRemarketingData.Costof.description}
        items={retargetingRemarketingData.Costof.items}
      />
      <ProfessionalBranding {...retargetingRemarketingData.ProfessionalSEO} />
      <CTA {...retargetingRemarketingData.CTA} />
      <BrandingStrategy {...retargetingRemarketingData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={retargetingRemarketingData.FAQ.items}
        heading={retargetingRemarketingData.FAQ.heading}
      />
    </>
  );
}
