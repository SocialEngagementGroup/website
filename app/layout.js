import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import "@/components/Navbar/Navbar.module.css";
import Navbar from "../components/Navbar/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import Head from "next/head"; // ✅ import Head
import NavBarMobile from "@/components/Navbar/NavBarMobile";
export const metadata = {
  title: {
    default: "Where human creativity meets AI | SEG",
    template: "%s | SEG",
  },
  description: "Where human creativity meets AI | SEG",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png"
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="RfRPbA6t4asaz0vJRRDqNtOxySrx4q3u578JZb6eaXc"
        />
      </Head>

      <body className={`antialiased`}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KF3BPC8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Google Tag Manager Script */}
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
      </body>
    </html>
  );
}
