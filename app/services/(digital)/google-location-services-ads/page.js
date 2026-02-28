import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { googleLocationServicesAdsData } from "./googleLocationServicesAdsData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

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
      <HeroSection {...googleLocationServicesAdsData.hero} />
      <IntroSection {...googleLocationServicesAdsData.intro} />
      <TrustBar {...googleLocationServicesAdsData.trustBar} />
      <CostofSection
        heading1={googleLocationServicesAdsData.Costof.heading1}
        heading2={googleLocationServicesAdsData.Costof.heading2}
        description={googleLocationServicesAdsData.Costof.description}
        items={googleLocationServicesAdsData.Costof.items}
      />
      <ProfessionalBranding {...googleLocationServicesAdsData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...googleLocationServicesAdsData.BrandStrategy} />
      <Testimonials />
      <FAQ items={googleLocationServicesAdsData.FAQ.items} heading={googleLocationServicesAdsData.FAQ.heading} />
    </>
  );
}
