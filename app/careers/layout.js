import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.careers.title,
  description: siteMetadata.careers.description,
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: siteMetadata.careers.title,
    description: siteMetadata.careers.description,
    url: "/careers",
  },
  twitter: {
    title: siteMetadata.careers.title,
    description: siteMetadata.careers.description,
  },
};

export default function CareersLayout({ children }) {
  return children;
}
