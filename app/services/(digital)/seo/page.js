import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { seoData } from "./seoData";
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
  title: siteMetadata.seo.title,
  description: siteMetadata.seo.description,
  alternates: {
    canonical: "/services/seo",
  },
  openGraph: {
    title: siteMetadata.seo.title,
    description: siteMetadata.seo.description,
    url: "/services/seo",
  },
  twitter: {
    title: siteMetadata.seo.title,
    description: siteMetadata.seo.description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSeoJsonLd
        title={siteMetadata.seo.title}
        description={siteMetadata.seo.description}
        path="/services/seo"
        faqItems={seoData.FAQ.items}
      />
      <HeroSection {...seoData.hero} />
      <IntroSection {...seoData.intro} />
      <TrustBar {...seoData.trustBar} />
      <CostofSection
        heading1={seoData.Costof.heading1}
        heading2={seoData.Costof.heading2}
        description={seoData.Costof.description}
        items={seoData.Costof.items}
      />
      <ProfessionalBranding {...seoData.ProfessionalSEO} />
      <CTA {...seoData.CTA} />
      <BrandingStrategy {...seoData.BrandStrategy} />
      <Testimonials />
      <FAQ items={seoData.FAQ.items} heading={seoData.FAQ.heading} />
    </>
  );
}
