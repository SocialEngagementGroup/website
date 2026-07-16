import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { googleLocationServicesAdsData } from "./googleLocationServicesAdsData";
import TrustBar from "@/components/ServicePage/TrustBar/TrustBar";
import CostofSection from "@/components/ServicePage/CostofSection/CostofSection";
import ProfessionalBranding from "@/components/ServicePage/ProfessionalBranding/ProfessionalBranding";
import BrandingStrategy from "@/components/ServicePage/BrandStrategy/brandstrategy";
import CTA from "@/components/ServicePage/CTA/CTA";
import FAQ from "@/components/ServicePage/FAQ/FAQ.js";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";

import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";
import ServiceSchema from "@/components/ServicePage/ServiceSchema";
import RelatedBlogs from "@/components/BlogPage/RelatedBlogs";

export const metadata = {
  alternates: {
    canonical: "/services/google-location-services-ads",
  },
  title: siteMetadata.googleLocalAds.title,
  description: siteMetadata.googleLocalAds.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.googleLocalAds.title,
    description: siteMetadata.googleLocalAds.description,
    url: "/services/google-location-services-ads",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.googleLocalAds.title,
    description: siteMetadata.googleLocalAds.description,
  },
};


export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.googleLocalAds.title}
        description={siteMetadata.googleLocalAds.description}
        url="/services/google-location-services-ads" faqs={googleLocationServicesAdsData.FAQ.items}
      />
      <HeroSection {...googleLocationServicesAdsData.hero} />
      <IntroSection {...googleLocationServicesAdsData.intro} />
      <TrustBar {...googleLocationServicesAdsData.trustBar} />
      <CostofSection
        heading1={googleLocationServicesAdsData.Costof.heading1}
        heading2={googleLocationServicesAdsData.Costof.heading2}
        description={googleLocationServicesAdsData.Costof.description}
        items={googleLocationServicesAdsData.Costof.items}
      />
      <ProfessionalBranding {...googleLocationServicesAdsData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...googleLocationServicesAdsData.BrandStrategy} />
      <Testimonials />
      <FAQ items={googleLocationServicesAdsData.FAQ.items} heading={googleLocationServicesAdsData.FAQ.heading} />
    <RelatedBlogs />
      </>
  );
}
