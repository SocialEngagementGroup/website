import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";


import { ppcCampaignsData } from "./ppcCampaignsData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

export const metadata = {
  title: "PPC Campaign Management",
  description:
    "Drive instant traffic and sales with expert PPC management. Data-driven ads on Google, Bing, and Meta designed to maximize ROI and reduce wasted spend.",
  openGraph: {
    title: "PPC Campaign Management | SEG - Social Engagement Group",
    description: "Maximize ROI and conversions with SEG's expert PPC campaign management.",
    url: "/services/ppc-campaigns",
  },
  twitter: {
    title: "PPC Campaign Management | SEG - Social Engagement Group",
    description: "Maximize ROI and conversions with SEG's expert PPC campaign management.",
  },
};
export default function Page() {
  return (
    <>
      <HeroSection {...ppcCampaignsData.hero} />
      <IntroSection {...ppcCampaignsData.intro} />
      <TrustBar {...ppcCampaignsData.trustBar} />
      <CostofSection
        heading1={ppcCampaignsData.Costof.heading1}
        heading2={ppcCampaignsData.Costof.heading2}
        description={ppcCampaignsData.Costof.description}
        items={ppcCampaignsData.Costof.items}
      />
      <ProfessionalBranding {...ppcCampaignsData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...ppcCampaignsData.BrandStrategy} />
      <Testimonials />
      <FAQ items={ppcCampaignsData.FAQ.items} heading={ppcCampaignsData.FAQ.heading} />
    </>
  );
}
