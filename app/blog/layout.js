import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.blog.title,
  description: siteMetadata.blog.description,
  openGraph: {
    title: siteMetadata.blog.title,
    description: siteMetadata.blog.description,
    url: "/blog",
  },
  twitter: {
    title: siteMetadata.blog.title,
    description: siteMetadata.blog.description,
  },
};

export default function BlogLayout({ children }) {
  return children;
}
