import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { SeoServiceData } from "./SeoServiceData";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import SecondaryCTA from "@/components/ServicePage/SecondaryCTA/SecondaryCTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: {
    default: "SEO Services | Rank Higher & Drive Organic Growth",
    template: "%s | SEG",
  },
  description:
    "Boost visibility and traffic with expert SEO. We optimize keywords, content, and links to help your business rank higher and convert more customers.",
  openGraph: {
    title: "SEO Services | Social Engagement Group",
    description: "Boost your organic growth and search rankings with SEG's expert SEO services.",
    url: "/services/seo",
  },
  twitter: {
    title: "SEO Services | Social Engagement Group",
    description: "Boost your organic growth and search rankings with SEG's expert SEO services.",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection {...SeoServiceData.hero} />
      <IntroSection {...SeoServiceData.intro} />
      <CTA {...SeoServiceData.cta} />
      <CostofSection
        heading1={SeoServiceData.Costof.heading1}
        heading2={SeoServiceData.Costof.heading2}
        description={SeoServiceData.Costof.description}
        items={SeoServiceData.Costof.items}
      />
      <ProfessionalBranding {...SeoServiceData.ProfessionalSEO} />
      <SecondaryCTA {...SeoServiceData.SecondaryCTA} />
      <BrandingStrategy {...SeoServiceData.BrandStrategy} />
      <Testimonials />
      <FAQ items={SeoServiceData.FAQ.items} heading={SeoServiceData.FAQ.heading} />
    </>
  );
}
