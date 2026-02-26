
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { logoDesignData } from "./logoDesignData";
import CTA from "@/components/ServicePage/CTA/CTA";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";


export const metadata = {
  title: "Custom Logo Design Services | Build a Brand That Lasts",
  description: "Get a memorable, professional logo that builds trust and recognition. 3–5 original concepts, unlimited revisions, and full ownership included.",
  openGraph: {
    title: "Logo Design Services | Social Engagement Group",
    description: "Create a memorable brand with SEG's custom logo design services.",
    url: "/services/logo-design",
  },
  twitter: {
    title: "Logo Design Services | Social Engagement Group",
    description: "Create a memorable brand with SEG's custom logo design services.",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection {...logoDesignData.hero} />
      <IntroSection {...logoDesignData.intro} />
      <CTA {...logoDesignData.cta} />
      <CostofSection
        heading1={logoDesignData.Costof.heading1}
        heading2={logoDesignData.Costof.heading2}
        description={logoDesignData.Costof.description}
        items={logoDesignData.Costof.items}
      />
      <ProfessionalBranding {...logoDesignData.ProfessionalLogoDesign} />
      <BrandingStrategy {...logoDesignData.BrandStrategy} />
      <FAQ items={logoDesignData.FAQ.items} heading={logoDesignData.FAQ.heading} />


    </>
  );
}



