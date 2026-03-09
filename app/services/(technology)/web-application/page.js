import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { webApplicationData } from "./webApplicationData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

import siteMetadata from "@/data/metadata";

export const metadata = {
    title: siteMetadata.webApplication.title,
    description: siteMetadata.webApplication.description,
    openGraph: {
        title: siteMetadata.webApplication.title,
        description: siteMetadata.webApplication.description,
        url: "/services/web-application",
    },
    twitter: {
        title: siteMetadata.webApplication.title,
        description: siteMetadata.webApplication.description,
    },
};

export default function Page() {
    return (
        <>
            <HeroSection {...webApplicationData.hero} />
            <IntroSection {...webApplicationData.intro} />
            <TrustBar {...webApplicationData.trustBar} />
            <CostofSection
                heading1={webApplicationData.Costof.heading1}
                heading2={webApplicationData.Costof.heading2}
                description={webApplicationData.Costof.description}
                items={webApplicationData.Costof.items}
            />
            <ProfessionalBranding {...webApplicationData.ProfessionalBranding} />
            <CTA />
            <BrandingStrategy {...webApplicationData.BrandStrategy} />
            <Testimonials />
            <FAQ items={webApplicationData.FAQ.items} heading={webApplicationData.FAQ.heading} />
        </>
    );
}
