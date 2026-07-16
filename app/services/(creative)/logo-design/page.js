
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { logoDesignData } from "./logoDesignData";
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
    canonical: "/services/logo-design",
  },
  title: siteMetadata.logoDesign.title,
  description: siteMetadata.logoDesign.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.logoDesign.title,
    description: siteMetadata.logoDesign.description,
    url: "/services/logo-design",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.logoDesign.title,
    description: siteMetadata.logoDesign.description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.logoDesign.title}
        description={siteMetadata.logoDesign.description}
        url="/services/logo-design" faqs={logoDesignData.FAQ.items}
      />
      <HeroSection {...logoDesignData.hero} />
      <IntroSection {...logoDesignData.intro} />
      <TrustBar {...logoDesignData.trustBar} />
      <CostofSection
        heading1={logoDesignData.Costof.heading1}
        heading2={logoDesignData.Costof.heading2}
        description={logoDesignData.Costof.description}
        items={logoDesignData.Costof.items}
      />
      <ProfessionalBranding {...logoDesignData.ProfessionalLogoDesign} />
      <CTA />
      <BrandingStrategy {...logoDesignData.BrandStrategy} />
      <Testimonials />
      <FAQ items={logoDesignData.FAQ.items} heading={logoDesignData.FAQ.heading} />
    <RelatedBlogs />
      </>
  );
}



