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
      {/* Dynamic Brand Background Glows (#975554) */}
      <div className="absolute top-0 left-[-20%] lg:left-[-10%] w-[80%] md:w-[60%] h-[60%] md:h-[80%] bg-[#975554]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-[-10%] w-[70%] md:w-[50%] h-[50%] md:h-[70%] bg-[#975554]/5 rounded-full blur-[120px] md:blur-[150px] pointer-events-none mix-blend-screen"></div>
      
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="container-fluid w-[92%] md:w-[85%] mx-auto relative">
         <ConverterPlatform />
      </div>
    </main>
  );
}
