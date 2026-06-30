import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForJewelersData } from "./solutionForJewelersData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

import siteMetadata from "@/data/metadata";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

export const metadata = {
  title: siteMetadata.jewelers.title,
  description: siteMetadata.jewelers.description,
  openGraph: {
    title: siteMetadata.jewelers.title,
    description: siteMetadata.jewelers.description,
    url: "/services/solution-for-jewelers",
  },
  twitter: {
    title: siteMetadata.jewelers.title,
    description: siteMetadata.jewelers.description,
  },
};

export default function Page() {
  return (
    <>
      <HeroSection {...solutionForJewelersData.hero} />
      <IntroSection {...solutionForJewelersData.intro} />
      <TrustBar {...solutionForJewelersData.trustBar} />
      <CostofSection
        heading1={solutionForJewelersData.Costof.heading1}
        heading2={solutionForJewelersData.Costof.heading2}
        description={solutionForJewelersData.Costof.description}
        items={solutionForJewelersData.Costof.items}
      />
      <ProfessionalBranding {...solutionForJewelersData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...solutionForJewelersData.BrandStrategy} customClass="solutionForJewelers"/>
      <Testimonials />
      <FAQ items={solutionForJewelersData.FAQ.items} heading={solutionForJewelersData.FAQ.heading} />
    <RelatedBlogs />
      </>
  );
}
