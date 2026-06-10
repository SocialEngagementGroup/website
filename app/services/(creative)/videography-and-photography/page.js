import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { videographyPhotographyData } from "./videographyPhotographyData";
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
  title: siteMetadata.videographyPhotography.title,
  description: siteMetadata.videographyPhotography.description,
  alternates: {
    canonical: "/services/videography-and-photography",
  },
  openGraph: {
    title: siteMetadata.videographyPhotography.title,
    description: siteMetadata.videographyPhotography.description,
    url: "/services/videography-and-photography",
  },
  twitter: {
    title: siteMetadata.videographyPhotography.title,
    description: siteMetadata.videographyPhotography.description,
  },
};


export default function Page() {
  return (
    <>
      <ServiceSeoJsonLd
        title={siteMetadata.videographyPhotography.title}
        description={siteMetadata.videographyPhotography.description}
        path="/services/videography-and-photography"
        faqItems={videographyPhotographyData.FAQ.items}
      />
      <HeroSection {...videographyPhotographyData.hero} />
      <IntroSection {...videographyPhotographyData.intro} />
      <TrustBar {...videographyPhotographyData.trustBar} />
      <CostofSection
        heading1={videographyPhotographyData.Costof.heading1}
        heading2={videographyPhotographyData.Costof.heading2}
        description={videographyPhotographyData.Costof.description}
        items={videographyPhotographyData.Costof.items}
      />
      <ProfessionalBranding {...videographyPhotographyData.ProfessionalLogoDesign} />
      <CTA />
      <BrandingStrategy {...videographyPhotographyData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={videographyPhotographyData.FAQ.items}
        heading={videographyPhotographyData.FAQ.heading}
      />
    </>
  );
}
