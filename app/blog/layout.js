import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export const metadata = {
  title: siteMetadata.blog.title,
  description: siteMetadata.blog.description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    ...ogDefaults,
    title: siteMetadata.blog.title,
    description: siteMetadata.blog.description,
    url: "/blog",
  },
  twitter: {
    ...twitterDefaults,
    title: siteMetadata.blog.title,
    description: siteMetadata.blog.description,
  },
};

export default function BlogLayout({ children }) {
  return children;
}
