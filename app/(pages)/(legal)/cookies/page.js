import React from 'react'
import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export const metadata = {
  alternates: {
    canonical: "/cookies",
  },
  title: siteMetadata.cookies.title,
  description: siteMetadata.cookies.description,
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.cookies.title,
    description: siteMetadata.cookies.description,
    url: "/cookies",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.cookies.title,
    description: siteMetadata.cookies.description,
  },
};

import HeroSection from '@/components/LegalPage/HeroSection/HeroSection'
import { termsandconditions } from "./data";
import CookiesBodyContent from '@/components/LegalPage/Content/CookiesBodyContent'

const page = () => {
  return (
    <div>
      {/* Provide hero data as props to HeroSection. */}
      <HeroSection 
        title={termsandconditions.hero.title} 
        date={termsandconditions.hero.date} 
      />
      
      {/* Pass content sections to BodyContent */}
      <CookiesBodyContent sections={termsandconditions.content.sections} />
    </div>
  )
}

export default page
