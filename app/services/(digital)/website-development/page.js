import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";

import { websiteDevelopmentData } from "./websiteDevelopmentData";

import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "Website Development Services",
  description:
    "Get a fast, SEO-optimized website that drives sales. We design and develop custom sites on WordPress, Shopify, and Next.js to grow your business online.",
  openGraph: {
    title: "Website Development Services | SEG - Social Engagement Group",
    description: "Get a fast, SEO-optimized website that drives sales with SEG's custom development.",
    url: "/services/website-development",
  },
  twitter: {
    title: "Website Development Services | SEG - Social Engagement Group",
    description: "Get a fast, SEO-optimized website that drives sales with SEG's custom development.",
  },
};


export default function Page() {
  return (
    <>
      <HeroSection {...websiteDevelopmentData.hero} />
      <IntroSection {...websiteDevelopmentData.intro} />
      <TrustBar {...websiteDevelopmentData.trustBar} />
      <CostofSection
        heading1={websiteDevelopmentData.Costof.heading1}
        heading2={websiteDevelopmentData.Costof.heading2}
        description={websiteDevelopmentData.Costof.description}
        items={websiteDevelopmentData.Costof.items}
      />
      <ProfessionalBranding {...websiteDevelopmentData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...websiteDevelopmentData.BrandStrategy} />
      <Testimonials />
      <FAQ items={websiteDevelopmentData.FAQ.items} heading={websiteDevelopmentData.FAQ.heading} />
    </>
  );
}
