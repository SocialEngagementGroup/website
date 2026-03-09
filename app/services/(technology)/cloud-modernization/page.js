import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { cloudModernizationData } from "./cloudModernizationData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

import siteMetadata from "@/data/metadata";

export const metadata = {
    title: siteMetadata.cloudModernization.title,
    description: siteMetadata.cloudModernization.description,
    openGraph: {
        title: siteMetadata.cloudModernization.title,
        description: siteMetadata.cloudModernization.description,
        url: "/services/cloud-modernization",
    },
    twitter: {
        title: siteMetadata.cloudModernization.title,
        description: siteMetadata.cloudModernization.description,
    },
};

export default function Page() {
    return (
        <>
            <HeroSection {...cloudModernizationData.hero} />
            <IntroSection {...cloudModernizationData.intro} />
            <TrustBar {...cloudModernizationData.trustBar} />
            <CostofSection
                heading1={cloudModernizationData.Costof.heading1}
                heading2={cloudModernizationData.Costof.heading2}
                description={cloudModernizationData.Costof.description}
                items={cloudModernizationData.Costof.items}
            />
            <ProfessionalBranding {...cloudModernizationData.ProfessionalBranding} />
            <CTA />
            <BrandingStrategy {...cloudModernizationData.BrandStrategy} />
            <Testimonials />
            <FAQ items={cloudModernizationData.FAQ.items} heading={cloudModernizationData.FAQ.heading} />
        </>
    );
}
