
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { brandingData } from "./brandingData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "Professional Branding Services",
  description: "Craft a brand that stands out. We develop strategy, voice, and visuals that build recognition, trust, and loyalty. Start your branding journey today.",
  openGraph: {
    title: "Branding Services | SEG - Social Engagement Group",
    description: "Craft a brand that stands out with SEG's professional branding strategy and visuals.",
    url: "/services/branding",
  },
  twitter: {
    title: "Branding Services | SEG - Social Engagement Group",
    description: "Craft a brand that stands out with SEG's professional branding strategy and visuals.",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection {...brandingData.hero} />
      <IntroSection {...brandingData.intro} />
      <TrustBar {...brandingData.trustBar} />
      <CostofSection
        heading1={brandingData.Costof.heading1}
        heading2={brandingData.Costof.heading2}
        description={brandingData.Costof.description}
        items={brandingData.Costof.items}
      />
      <ProfessionalBranding {...brandingData.ProfessionalBranding} />
      <CTA />
      <BrandingStrategy {...brandingData.BrandStrategy} />
      <Testimonials />
      <FAQ items={brandingData.FAQ.items} heading={brandingData.FAQ.heading} />
    </>
  );
}
