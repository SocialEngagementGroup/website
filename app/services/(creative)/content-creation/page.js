import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { contentCreationData } from "./contentCreationData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "Content Creation",
  description: "Create content that converts. From videos and graphics to influencer and AI-generated assets—build engagement, trust, and growth for your brand.",
  openGraph: {
    title: "Content Creation | SEG - Social Engagement Group",
    description: "Create content that converts with SEG's expert graphic, video, and AI solutions.",
    url: "/services/content-creation",
  },
  twitter: {
    title: "Content Creation | SEG - Social Engagement Group",
    description: "Create content that converts with SEG's expert graphic, video, and AI solutions.",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection {...contentCreationData.hero} />
      <IntroSection {...contentCreationData.intro} />
      <TrustBar {...contentCreationData.trustBar} />

      <CostofSection
        heading1={contentCreationData.Costof.heading1}
        heading2={contentCreationData.Costof.heading2}
        description={contentCreationData.Costof.description}
        items={contentCreationData.Costof.items}
      />
      <ProfessionalBranding {...contentCreationData.ProfessionalContent} />
      <SecondaryCTA />
      <BrandingStrategy {...contentCreationData.ContentStrategy} />
      <Testimonials />
      <FAQ
        items={contentCreationData.FAQ.items}
        heading={contentCreationData.FAQ.heading} />
    </>
  );
}
