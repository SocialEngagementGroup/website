
import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { brandingData } from "@/app/services/creative/branding/brandingData";
import PlaceHolder from "@/components/ServicePage/PlaceHolder/PlaceHolder";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
export default function Page() {
  return (
    <>
      <HeroSection {...brandingData.hero} />
      <IntroSection {...brandingData.intro} />
      <PlaceHolder/>
      <CostofSection
        heading1={brandingData.Costof.heading1}
        heading2={brandingData.Costof.heading2}
        description={brandingData.Costof.description}
        items={brandingData.Costof.items}
      />
      <ProfessionalBranding {...brandingData.ProfessionalBranding}/>
      <BrandingStrategy {...brandingData.BrandStrategy}/>
            <FAQ items={brandingData.FAQ.items} heading={brandingData.FAQ.heading} />
    </>
  );
}
