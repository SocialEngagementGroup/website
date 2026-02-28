
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { brandingData } from "./brandingData";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: "Professional Branding Services | Build a Brand That Lasts",
  description: "Craft a brand that stands out. We develop strategy, voice, and visuals that build recognition, trust, and loyalty. Start your branding journey today.",
  openGraph: {
    title: "Branding Services | Social Engagement Group",
    description: "Craft a brand that stands out with SEG's professional branding strategy and visuals.",
    url: "/services/branding",
  },
  twitter: {
    title: "Branding Services | Social Engagement Group",
    description: "Craft a brand that stands out with SEG's professional branding strategy and visuals.",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection {...brandingData.hero} />
      <IntroSection {...brandingData.intro} />
      <CTA {...brandingData.cta} />
      <CostofSection
        heading1={brandingData.Costof.heading1}
        heading2={brandingData.Costof.heading2}
        description={brandingData.Costof.description}
        items={brandingData.Costof.items}
      />
      <ProfessionalBranding {...brandingData.ProfessionalBranding} />
      <BrandingStrategy {...brandingData.BrandStrategy} />
      <SecondaryCTA />
      <FAQ items={brandingData.FAQ.items} heading={brandingData.FAQ.heading} />
    </>
  );
}
