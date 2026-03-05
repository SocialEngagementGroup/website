import React from 'react'
import HeroSection from "@/components/HomePage/HeroSection/HeroSection"
import DynamicSections from "@/components/HomePage/DynamicSections"

// HeroSection is above the fold — static import for instant SSR render.
// All below-fold sections are lazy-loaded via DynamicSections (Client Component).

import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  openGraph: {
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
    url: "/",
  },
  twitter: {
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <DynamicSections />
    </>
  )
}

export default page
