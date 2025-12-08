import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { webdevelopmentData } from "@/app/services/(digital)/website-development/webdevelopmentData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
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
      <HeroSection {...webdevelopmentData.hero} />
      <IntroSection {...webdevelopmentData.intro} />
      <PlaceHolder />
      <CostofSection
        heading1={webdevelopmentData.Costof.heading1}
        heading2={webdevelopmentData.Costof.heading2}
        description={webdevelopmentData.Costof.description}
        items={webdevelopmentData.Costof.items}
      />
      <ProfessionalBranding {...webdevelopmentData.ProfessionalSEO} />
      <BrandingStrategy {...webdevelopmentData.BrandStrategy} />
      <FAQ items={webdevelopmentData.FAQ.items} heading={webdevelopmentData.FAQ.heading} />
    </>
  );
}
