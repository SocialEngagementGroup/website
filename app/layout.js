import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import NavBarMobile from "@/components/Navbar/NavBarMobile";
import Footer from "@/components/Footer/Footer";
import ClientEnhancements from "@/components/Common/ClientEnhancements";

// (optional) if you also want Vercel Analytics:
// import { Analytics } from "@vercel/analytics/react";

import siteMetadata from "@/data/metadata";

export const metadata = {
  metadataBase: new URL("https://socialengagementgroup.com"),
  title: siteMetadata.home.title,
  description:
    "Social Engagement Group (SEG) blends human creativity with AI-powered automation to tell your story and drive business growth across every digital touchpoint.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Social Engagement Group | SEG - Social Engagement Group",
    description: "Where Human Creativity Meets AI-Powered Digital Growth.",
    url: "https://socialengagementgroup.com",
    siteName: "Social Engagement Group",
    images: [
      {
        url: "/assets/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Engagement Group - Human Creativity & AI-Powered Digital Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Engagement Group | SEG - Social Engagement Group",
    description: "Where Human Creativity Meets AI-Powered Digital Growth.",
    images: ["/assets/images/brand/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  other: {
    preconnect: [
      "https://www.youtube-nocookie.com",
      "https://fonts.gstatic.com",
    ],
  },
};



const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

import HardLoader from "@/components/Common/HardLoader";
import TopLoader from "@/components/Common/TopLoader";
import { Suspense } from "react";

export default function SiteLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${outfit.variable} ${outfit.className} ${playfair.variable} antialiased`} suppressHydrationWarning>
        <HardLoader />
        <Suspense fallback={null}>
          <TopLoader />
        </Suspense>
        {/* Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KF3BPC8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KF3BPC8C');
          `}
        </Script>

        <ClientEnhancements />
        <Navbar />
        <NavBarMobile />
        {children}
        <Footer />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Social Engagement Group",
              url: "https://socialengagementgroup.com",
              logo: "https://socialengagementgroup.com/assets/images/site-logo/logo.svg",
              description: "Social Engagement Group (SEG) blends human creativity with AI-powered automation to drive business growth across every digital touchpoint.",
              sameAs: [
                "https://www.facebook.com/socialengagementgroup",
                "https://twitter.com/seg_agency",
                "https://www.linkedin.com/company/socialengagementgroup",
                "https://www.instagram.com/socialengagementgroup"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-XXX-XXX-XXXX",
                contactType: "customer service",
                email: "info@socialengagementgroup.com"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Social Engagement Group",
              url: "https://socialengagementgroup.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://socialengagementgroup.com/services?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* optional */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
