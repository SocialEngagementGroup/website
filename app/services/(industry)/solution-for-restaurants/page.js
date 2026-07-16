import HeroSection from "@/components/ServicePage/HeroSection/HeroSection";
import IntroSection from "@/components/ServicePage/IntroSection/IntroSection";
import { solutionForRestaurantsData } from "./solutionForRestaurantsData";
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
    canonical: "/services/solution-for-restaurants",
  },
  title: siteMetadata.restaurants.title,
  description: siteMetadata.restaurants.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.restaurants.title,
    description: siteMetadata.restaurants.description,
    url: "/services/solution-for-restaurants",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.restaurants.title,
    description: siteMetadata.restaurants.description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        title={siteMetadata.restaurants.title}
        description={siteMetadata.restaurants.description}
        url="/services/solution-for-restaurants" faqs={solutionForRestaurantsData.FAQ.items}
      />
      <HeroSection {...solutionForRestaurantsData.hero} />
      <IntroSection {...solutionForRestaurantsData.intro} />
      <TrustBar {...solutionForRestaurantsData.trustBar} />
      <CostofSection
        heading1={solutionForRestaurantsData.Costof.heading1}
        heading2={solutionForRestaurantsData.Costof.heading2}
        description={solutionForRestaurantsData.Costof.description}
        items={solutionForRestaurantsData.Costof.items}
      />
      <ProfessionalBranding {...solutionForRestaurantsData.ProfessionalSEO} />
      <CTA />
      <BrandingStrategy {...solutionForRestaurantsData.BrandStrategy} />
      <Testimonials />
      <FAQ
        items={solutionForRestaurantsData.FAQ.items}
        heading={solutionForRestaurantsData.FAQ.heading}
      />
    <RelatedBlogs />
      </>
  );
}
