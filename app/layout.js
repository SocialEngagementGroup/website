import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import NavBarMobile from "@/components/Navbar/NavBarMobile";
import Footer from "@/components/Footer/Footer";

// ✅ add these
import { SpeedInsights } from "@vercel/speed-insights/next";
// (optional) if you also want Vercel Analytics:
// import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Where human creativity meets AI | SEG",
    template: "%s | SEG",
  },
  description: "Where human creativity meets AI | SEG",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ["400"],
});

export default function SiteLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
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

        <Navbar />
        <NavBarMobile />
        {children}
        <Footer />

        {/* ✅ put it near the end of body */}
        <SpeedInsights />
        {/* optional */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}