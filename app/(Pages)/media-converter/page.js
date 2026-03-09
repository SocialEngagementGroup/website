import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.converter.title,
  description: siteMetadata.converter.description,
  openGraph: {
    title: siteMetadata.converter.title,
    description: siteMetadata.converter.description,
    url: "/media-converter",
  },
  twitter: {
    title: siteMetadata.converter.title,
    description: siteMetadata.converter.description,
  },
};

import React from "react";
import ConverterPlatform from "@/components/Tools/ConverterPlatform";

export default function ConverterPage() {
  return (
    // Updated background to match --background (#232326) and font to Outfit
    <main className="bg-black min-h-screen pt-24 md:pt-40 pb-16 md:pb-24 font-sans text-white relative overflow-hidden">
      {/* Dynamic Background Glows matching brand tones - Adjusted for pure black mobile */}
      <div className="absolute top-0 left-[-20%] w-[60%] h-[80%] bg-[#975554]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen hidden md:block"></div>
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[70%] bg-[#975554]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen hidden md:block"></div>
      
      {/* Huge Decorative Background Ring - Hidden on mobile */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] border-[100px] border-white/5 rounded-full rounded-tr-none rounded-br-none border-r-0 pointer-events-none hidden md:block"></div>

      <div className="container-fluid w-[92%] md:w-[85%] mx-auto relative">
         <ConverterPlatform />
      </div>
    </main>
  );
}
