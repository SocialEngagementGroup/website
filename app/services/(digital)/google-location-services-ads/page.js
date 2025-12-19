import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { googleservicesads } from "@/app/services/(digital)/google-location-services-ads/googleservicesads";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: {
    default: "Social Media Marketing Services | Grow & Engage Audiences",
    template: "%s | SEG",
  },
  description:
    "Boost engagement and sales with data-driven social media marketing. We create high-performing campaigns across Meta, TikTok, LinkedIn, and more.",
};


export default function Page() {
  return (
    <>
      <HeroSection {...googleservicesads.hero} />
      <IntroSection {...googleservicesads.intro} />
      <CTA  {...googleservicesads.cta} />
      <CostofSection
        heading1={googleservicesads.Costof.heading1}
        heading2={googleservicesads.Costof.heading2}
        description={googleservicesads.Costof.description}
        items={googleservicesads.Costof.items}
      />
      <ProfessionalBranding {...googleservicesads.ProfessionalSEO} />
      <BrandingStrategy {...googleservicesads.BrandStrategy} />
      <FAQ items={googleservicesads.FAQ.items} heading={googleservicesads.FAQ.heading} />
    </>
  );
}
