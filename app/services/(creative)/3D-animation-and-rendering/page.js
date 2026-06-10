import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { threeDAnimationRenderingData } from "./threeDAnimationRenderingData";
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
  title: siteMetadata.animation3d.title,
  description: siteMetadata.animation3d.description,
  alternates: {
    canonical: "/services/3D-animation-and-rendering",
  },
  openGraph: {
    title: siteMetadata.animation3d.title,
    description: siteMetadata.animation3d.description,
    url: "/services/3D-animation-and-rendering",
  },
  twitter: {
    title: siteMetadata.animation3d.title,
    description: siteMetadata.animation3d.description,
  },
};


export default function Page() {
  return (
    <>
      <ServiceSeoJsonLd
        title={siteMetadata.animation3d.title}
        description={siteMetadata.animation3d.description}
        path="/services/3D-animation-and-rendering"
        faqItems={threeDAnimationRenderingData.FAQ.items}
      />
      <HeroSection {...threeDAnimationRenderingData.hero} />
      <IntroSection {...threeDAnimationRenderingData.intro} />
      <TrustBar {...threeDAnimationRenderingData.trustBar} />
      <CostofSection
        heading1={threeDAnimationRenderingData.Costof.heading1}
        heading2={threeDAnimationRenderingData.Costof.heading2}
        description={threeDAnimationRenderingData.Costof.description}
        items={threeDAnimationRenderingData.Costof.items}
      />
      <ProfessionalBranding {...threeDAnimationRenderingData.ProfessionalLogoDesign} />
      <CTA />
      <BrandingStrategy {...threeDAnimationRenderingData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={threeDAnimationRenderingData.FAQ.items}
        heading={threeDAnimationRenderingData.FAQ.heading}
      />
    </>
  );
}
