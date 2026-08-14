import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { itConsultationData } from "./itConsultationData";
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
    canonical: "/services/it-consultation",
  },
    title: siteMetadata.itConsultation.title,
    description: siteMetadata.itConsultation.description,
    openGraph: {
      ...ogDefaults,
        title: siteMetadata.itConsultation.title,
        description: siteMetadata.itConsultation.description,
        url: "/services/it-consultation",
    },
    twitter: {
      ...twitterDefaults,
        title: siteMetadata.itConsultation.title,
        description: siteMetadata.itConsultation.description,
    },
};

export default function Page() {
    return (
        <>
          <ServiceSchema
        title={siteMetadata.itConsultation.title}
        description={siteMetadata.itConsultation.description}
        url="/services/it-consultation" faqs={itConsultationData.FAQ.items}
      />
            <HeroSection {...itConsultationData.hero} />
            <IntroSection {...itConsultationData.intro} />
            <TrustBar {...itConsultationData.trustBar} />
            <CostofSection
                heading1={itConsultationData.Costof.heading1}
                heading2={itConsultationData.Costof.heading2}
                description={itConsultationData.Costof.description}
                items={itConsultationData.Costof.items}
            />
            <ProfessionalBranding {...itConsultationData.ProfessionalBranding} />
            <CTA />
            <BrandingStrategy {...itConsultationData.BrandStrategy} />
            <Testimonials />
            <FAQ items={itConsultationData.FAQ.items} heading={itConsultationData.FAQ.heading} />
        <RelatedBlogs />
      </>
    );
}
