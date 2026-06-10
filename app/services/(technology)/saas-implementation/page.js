import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { saasImplementationData } from "./saasImplementationData";
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
    title: siteMetadata.saasImplementation.title,
    description: siteMetadata.saasImplementation.description,
  alternates: {
    canonical: "/services/saas-implementation",
  },
    openGraph: {
        title: siteMetadata.saasImplementation.title,
        description: siteMetadata.saasImplementation.description,
        url: "/services/saas-implementation",
    },
    twitter: {
        title: siteMetadata.saasImplementation.title,
        description: siteMetadata.saasImplementation.description,
    },
};

export default function Page() {
    return (
        <>
      <ServiceSeoJsonLd
        title={siteMetadata.saasImplementation.title}
        description={siteMetadata.saasImplementation.description}
        path="/services/saas-implementation"
        faqItems={saasImplementationData.FAQ.items}
      />
            <HeroSection {...saasImplementationData.hero} />
            <IntroSection {...saasImplementationData.intro} />
            <TrustBar {...saasImplementationData.trustBar} />
            <CostofSection
                heading1={saasImplementationData.Costof.heading1}
                heading2={saasImplementationData.Costof.heading2}
                description={saasImplementationData.Costof.description}
                items={saasImplementationData.Costof.items}
            />
            <ProfessionalBranding {...saasImplementationData.ProfessionalBranding} />
            <CTA />
            <BrandingStrategy {...saasImplementationData.BrandStrategy} />
            <Testimonials />
            <FAQ items={saasImplementationData.FAQ.items} heading={saasImplementationData.FAQ.heading} />
        </>
    );
}
