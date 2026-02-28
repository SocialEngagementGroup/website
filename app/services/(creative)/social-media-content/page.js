
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { SocialMediaContentData } from "./SocialMediaContentData";

import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";


export const metadata = {
  title: "Social Media Content Services | Meta & TikTok Experts",
  description: "Create scroll-stopping social content that engages, converts, and builds community. Expert strategies for Meta, TikTok, and beyond to grow your brand.",
};


export default function Page() {
  return (
    <>
  <HeroSection {...SocialMediaContentData.hero} />
      <IntroSection {...SocialMediaContentData.intro} />
      <CTA {...SocialMediaContentData.cta}/>
      <CostofSection
        heading1={SocialMediaContentData.Costof.heading1}
        heading2={SocialMediaContentData.Costof.heading2}
        description={SocialMediaContentData.Costof.description}
        items={SocialMediaContentData.Costof.items}
      />
      <ProfessionalBranding {...SocialMediaContentData.ProfessionalBranding}/>
      <SecondaryCTA />
      <BrandingStrategy {...SocialMediaContentData.BrandStrategy}/>
      <Testimonials />
      <FAQ items={SocialMediaContentData.FAQ.items} heading={SocialMediaContentData.FAQ.heading} />
    </>
  );
}
