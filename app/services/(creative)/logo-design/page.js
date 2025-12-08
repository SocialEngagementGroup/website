
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { logoDesignData } from "@/app/services/(creative)/logo-design/logoDesignData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";

export const metadata = {
  title: {
    default: "Custom Logo Design Services | Build a Brand That Lasts", // default for pages without page metadata
    template: "%s | SEG", // will replace %s with page-level title
  },
  description: "Get a memorable, professional logo that builds trust and recognition. 3–5 original concepts, unlimited revisions, and full ownership included.", // default description
};
export default function Page() {
  return (
    <>
  <HeroSection {...logoDesignData.hero} />
      <IntroSection {...logoDesignData.intro} />
      <PlaceHolder/>
      <CostofSection
        heading1={logoDesignData.Costof.heading1}
        heading2={logoDesignData.Costof.heading2}
        description={logoDesignData.Costof.description}
        items={logoDesignData.Costof.items}
      />
      <ProfessionalBranding {...logoDesignData.ProfessionalLogoDesign}/>
      <BrandingStrategy {...logoDesignData.BrandStrategy}/>
      <FAQ items={logoDesignData.FAQ.items} heading={logoDesignData.FAQ.heading} />


    </>
  );
}



