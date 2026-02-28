import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import NavBarMobile from "@/components/Navbar/NavBarMobile";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

// (optional) if you also want Vercel Analytics:
// import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://socialengagementgroup.com"),
  title: {
    default: "SEG | Where Human Creativity Meets AI-Powered Digital Growth",
    template: "%s | SEG - Social Engagement Group",
  },
  description:
    "Social Engagement Group (SEG) blends human creativity with AI-powered automation to tell your story and drive business growth across every digital touchpoint.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Social Engagement Group (SEG)",
    description: "Where Human Creativity Meets AI-Powered Digital Growth.",
    url: "https://socialengagementgroup.com",
    siteName: "Social Engagement Group",
    images: [
      {
        url: "/assets/site-logo/logo.svg",
        width: 800,
        height: 600,
        alt: "SEG Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Engagement Group (SEG)",
    description: "Where Human Creativity Meets AI-Powered Digital Growth.",
    images: ["/assets/site-logo/logo.svg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function SiteLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${outfit.className} ${playfair.variable} antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KF3BPC8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KF3BPC8C');
          `}
        </Script>

        <ScrollProgress />
        <Navbar />
        <NavBarMobile />
        {children}
        <Footer />

        {/* optional */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
