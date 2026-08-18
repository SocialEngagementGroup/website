import React from 'react'
import HeroSection from "@/components/HomePage/HeroSection/HeroSection"
import DynamicSections from "@/components/HomePage/DynamicSections"
import LatestBlogs from "@/components/HomePage/LatestBlogs/LatestBlogs"

// HeroSection is above the fold — static import for instant SSR render.
// All below-fold sections are lazy-loaded via DynamicSections (Client Component).

import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
    url: "/",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <DynamicSections />
      <LatestBlogs />
    </>
  )
}

export default page
