import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { aiAutomationData } from "./aiAutomationData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

import siteMetadata from "@/data/metadata";

export const metadata = {
    title: siteMetadata.aiAutomation.title,
    description: siteMetadata.aiAutomation.description,
    openGraph: {
        title: siteMetadata.aiAutomation.title,
        description: siteMetadata.aiAutomation.description,
        url: "/services/ai-automation",
    },
    twitter: {
        title: siteMetadata.aiAutomation.title,
        description: siteMetadata.aiAutomation.description,
    },
};

export default function Page() {
    return (
        <>
            <HeroSection {...aiAutomationData.hero} />
            <IntroSection {...aiAutomationData.intro} />
            <TrustBar {...aiAutomationData.trustBar} />
            <CostofSection
                heading1={aiAutomationData.Costof.heading1}
                heading2={aiAutomationData.Costof.heading2}
                description={aiAutomationData.Costof.description}
                items={aiAutomationData.Costof.items}
            />
            <ProfessionalBranding {...aiAutomationData.ProfessionalBranding} />
            <CTA />
            <BrandingStrategy {...aiAutomationData.BrandStrategy} />
            <Testimonials />
            <FAQ items={aiAutomationData.FAQ.items} heading={aiAutomationData.FAQ.heading} />
            <RelatedBlogs />
        </>
    );
}
