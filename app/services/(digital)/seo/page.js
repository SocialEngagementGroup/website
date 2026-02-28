import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { seoData } from "./seoData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "SEO Services",
  description:
    "Boost visibility and traffic with expert SEO. We optimize keywords, content, and links to help your business rank higher and convert more customers.",
  openGraph: {
    title: "SEO Services | SEG - Social Engagement Group",
    description: "Boost your organic growth and search rankings with SEG's expert SEO services.",
    url: "/services/seo",
  },
  twitter: {
    title: "SEO Services | SEG - Social Engagement Group",
    description: "Boost your organic growth and search rankings with SEG's expert SEO services.",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection {...seoData.hero} />
      <IntroSection {...seoData.intro} />
      <TrustBar {...seoData.trustBar} />
      <CostofSection
        heading1={seoData.Costof.heading1}
        heading2={seoData.Costof.heading2}
        description={seoData.Costof.description}
        items={seoData.Costof.items}
      />
      <ProfessionalBranding {...seoData.ProfessionalSEO} />
      <SecondaryCTA {...seoData.SecondaryCTA} />
      <BrandingStrategy {...seoData.BrandStrategy} />
      <Testimonials />
      <FAQ items={seoData.FAQ.items} heading={seoData.FAQ.heading} />
    </>
  );
}
