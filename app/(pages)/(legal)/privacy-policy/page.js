import React from 'react'
import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export const metadata = {
  alternates: {
    canonical: "/privacy-policy",
  },
  title: siteMetadata.privacy.title,
  description: siteMetadata.privacy.description,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.privacy.title,
    description: siteMetadata.privacy.description,
    url: "/privacy-policy",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.privacy.title,
    description: siteMetadata.privacy.description,
  },
};

import HeroSection from '@/components/LegalPage/HeroSection/HeroSection'
import { PrivacyPolicy } from "./data";
import BodyContent from '@/components/LegalPage/Content/BodyContent'

const PrivacyPolicyPage = () => {
  return (
    <div>
      {/* Pass hero data to HeroSection */}
      <HeroSection 
        title={PrivacyPolicy.hero.title} 
        date={PrivacyPolicy.hero.date} 
      />
      
      {/* Pass content sections to BodyContent */}
      <BodyContent sections={PrivacyPolicy.content.sections} />
    </div>
  )
}

export default PrivacyPolicyPage
