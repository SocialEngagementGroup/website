import React from 'react'

import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export const metadata = {
  alternates: {
    canonical: "/contact-us",
  },
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.contact.title,
    description: siteMetadata.contact.description,
    url: "/contact-us",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.contact.title,
    description: siteMetadata.contact.description,
  },
};
import ContactPage from "@/components/ContactPage/HeroSection/page";
import GetInTouch from '@/components/ContactPage/GetInTouch/page'
const page = () => {
  return (
    <div>
      <ContactPage />
      <GetInTouch />
    </div>
  )
}

export default page
