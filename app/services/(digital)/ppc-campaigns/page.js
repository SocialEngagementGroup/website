import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";


import { PpcServiceData } from "./ppccampaigns";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: {
    default: "PPC Campaign Management | Maximize ROI & Conversions",
    template: "%s | SEG",
  },
  description:
    "Drive instant traffic and sales with expert PPC management. Data-driven ads on Google, Bing, and Meta designed to maximize ROI and reduce wasted spend.",
};
export default function Page() {
  return (
    <>
      <HeroSection {...PpcServiceData.hero} />
      <IntroSection {...PpcServiceData.intro} />
      <TrustBar {...PpcServiceData.trustBar} />
      <CostofSection
        heading1={PpcServiceData.Costof.heading1}
        heading2={PpcServiceData.Costof.heading2}
        description={PpcServiceData.Costof.description}
        items={PpcServiceData.Costof.items}
      />
      <ProfessionalBranding {...PpcServiceData.ProfessionalSEO} />
      <SecondaryCTA />
      <BrandingStrategy {...PpcServiceData.BrandStrategy} />
      <Testimonials />
      <FAQ items={PpcServiceData.FAQ.items} heading={PpcServiceData.FAQ.heading} />
    </>
  );
}
