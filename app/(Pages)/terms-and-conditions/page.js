import React from 'react'
import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.terms.title,
  description: siteMetadata.terms.description,
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: siteMetadata.terms.title,
    description: siteMetadata.terms.description,
    url: "/terms-and-conditions",
  },
  twitter: {
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
