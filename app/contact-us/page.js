import React from 'react'

import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: siteMetadata.contact.title,
    description: siteMetadata.contact.description,
    url: "/contact-us",
  },
  twitter: {
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
