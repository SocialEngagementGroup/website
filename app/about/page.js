import React from 'react'

import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: siteMetadata.about.title,
    description: siteMetadata.about.description,
    url: "/about",
  },
  twitter: {
    title: siteMetadata.about.title,
    description: siteMetadata.about.description,
  },
};

const about = () => {
  return (
    <div>
      <h1>About Page test page</h1>
    </div>
  )
}

export default about
