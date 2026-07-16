import React from 'react'
import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export const metadata = {
  alternates: {
    canonical: "/terms-and-conditions",
  },
  title: siteMetadata.terms.title,
  description: siteMetadata.terms.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.terms.title,
    description: siteMetadata.terms.description,
    url: "/terms-and-conditions",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.terms.title,
    description: siteMetadata.terms.description,
  },
};

import HeroSection from '@/components/LegalPage/HeroSection/HeroSection'
import { termsandconditions } from "./data";
import BodyContent from '@/components/LegalPage/Content/BodyContent'

const page = () => {
  return (
    <div>
      {/* Pass hero data to HeroSection */}
      <HeroSection 
        title={termsandconditions.hero.title} 
        date={termsandconditions.hero.date} 
      />
      
      {/* Pass content sections to BodyContent */}
      <BodyContent sections={termsandconditions.content.sections} />
    </div>
  )
}

export default page
