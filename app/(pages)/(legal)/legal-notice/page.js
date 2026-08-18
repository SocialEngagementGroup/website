import React from 'react'
import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export const metadata = {
  alternates: {
    canonical: "/legal-notice",
  },
  title: siteMetadata.legal.title,
  description: siteMetadata.legal.description,
  alternates: {
    canonical: "/legal-notice",
  },
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.legal.title,
    description: siteMetadata.legal.description,
    url: "/legal-notice",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.legal.title,
    description: siteMetadata.legal.description,
  },
};

import HeroSection from '@/components/LegalPage/HeroSection/HeroSection'
import { legal } from "./data";
import BodyContent from '@/components/LegalPage/Content/BodyContent'

const page = () => {
  return (
    <div>
      {/* Pass hero data to HeroSection */}
      <HeroSection 
        title={legal.hero.title} 
        date={legal.hero.date} 
      />
      
      {/* Pass content sections to BodyContent */}
      <BodyContent sections={legal.content.sections} />
    </div>
  )
}

export default page
