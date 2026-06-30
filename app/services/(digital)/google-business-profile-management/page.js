import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import { googleBusinessProfileManagementData } from "./googleBusinessProfileManagementData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

import siteMetadata from "@/data/metadata";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

export const metadata = {
  title: siteMetadata.googleBusiness.title,
  description: siteMetadata.googleBusiness.description,
  openGraph: {
    title: siteMetadata.googleBusiness.title,
    description: siteMetadata.googleBusiness.description,
    url: "/services/google-business-profile-management",
  },
  twitter: {
    title: siteMetadata.googleBusiness.title,
    description: siteMetadata.googleBusiness.description,
  },
};
export default function Page() {
  return (
    <>
      <HeroSection {...googleBusinessProfileManagementData.hero} />
      <IntroSection {...googleBusinessProfileManagementData.intro} />
      <TrustBar {...googleBusinessProfileManagementData.trustBar} />
      <CostofSection
        heading1={googleBusinessProfileManagementData.Costof.heading1}
        heading2={googleBusinessProfileManagementData.Costof.heading2}
        description={googleBusinessProfileManagementData.Costof.description}
        items={googleBusinessProfileManagementData.Costof.items}
      />
      <ProfessionalBranding {...googleBusinessProfileManagementData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...googleBusinessProfileManagementData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={googleBusinessProfileManagementData.FAQ.items}
        heading={googleBusinessProfileManagementData.FAQ.heading}
      />
    <RelatedBlogs />
      </>
  );
}
