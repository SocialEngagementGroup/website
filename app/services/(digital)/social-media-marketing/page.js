import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { socialMediaMarketingData } from "./socialMediaMarketingData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: {
    default: "Website Development Services | Design. Build. Convert.",
    template: "%s | SEG",
  },
  description:
    "Get a fast, SEO-optimized website that drives sales. We design and develop custom sites on WordPress, Shopify, and Next.js to grow your business online.",
};



export default function Page() {
  return (
    <>
      <HeroSection {...socialMediaMarketingData.hero} />
      <IntroSection {...socialMediaMarketingData.intro} />
      <TrustBar {...socialMediaMarketingData.trustBar} />
      <CostofSection
        heading1={socialMediaMarketingData.Costof.heading1}
        heading2={socialMediaMarketingData.Costof.heading2}
        description={socialMediaMarketingData.Costof.description}
        items={socialMediaMarketingData.Costof.items}
      />
      <ProfessionalBranding {...socialMediaMarketingData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...socialMediaMarketingData.BrandStrategy} />
      <Testimonials />
      <FAQ items={socialMediaMarketingData.FAQ.items} heading={socialMediaMarketingData.FAQ.heading} />
    </>
  );
}
