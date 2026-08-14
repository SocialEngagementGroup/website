import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export const metadata = {
  title: siteMetadata.careers.title,
  description: siteMetadata.careers.description,
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.careers.title,
    description: siteMetadata.careers.description,
    url: "/careers",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.careers.title,
    description: siteMetadata.careers.description,
  },
};

export default function CareersLayout({ children }) {
  return children;
}
