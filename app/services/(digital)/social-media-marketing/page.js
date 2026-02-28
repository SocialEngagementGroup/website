import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { socialmediamarketingData } from "./socialmediamarketingData";
import CTA from "@/components/ServicePage/CTA/CTA";
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
      <HeroSection {...socialmediamarketingData.hero} />
      <IntroSection {...socialmediamarketingData.intro} />
      <CTA  {...socialmediamarketingData.cta} />
      <CostofSection
        heading1={socialmediamarketingData.Costof.heading1}
        heading2={socialmediamarketingData.Costof.heading2}
        description={socialmediamarketingData.Costof.description}
        items={socialmediamarketingData.Costof.items}
      />
      <ProfessionalBranding {...socialmediamarketingData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...socialmediamarketingData.BrandStrategy} />
      <Testimonials />
      <FAQ items={socialmediamarketingData.FAQ.items} heading={socialmediamarketingData.FAQ.heading} />
    </>
  );
}
