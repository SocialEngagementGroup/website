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
  title: "Social Media Marketing Services",
  description:
    "Boost engagement and sales with data-driven social media marketing. We create high-performing campaigns across Meta, TikTok, LinkedIn, and more.",
  openGraph: {
    title: "Social Media Marketing Services | SEG - Social Engagement Group",
    description: "Boost engagement and sales with SEG's data-driven social media marketing.",
    url: "/services/social-media-marketing",
  },
  twitter: {
    title: "Social Media Marketing Services | SEG - Social Engagement Group",
    description: "Boost engagement and sales with SEG's data-driven social media marketing.",
  },
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
