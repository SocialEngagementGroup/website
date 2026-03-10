import siteMetadata from "@/data/metadata";

export const metadata = {
  title: siteMetadata.websiteAudit.title,
  description: siteMetadata.websiteAudit.description,
  openGraph: {
    title: siteMetadata.websiteAudit.title,
    description: siteMetadata.websiteAudit.description,
    url: "/website-audit",
  },
  twitter: {
    title: siteMetadata.websiteAudit.title,
    description: siteMetadata.websiteAudit.description,
  },
};

import React from "react";
import WebsiteAuditForm from "@/components/Tools/WebsiteAuditForm";

export default function WebsiteAuditPage() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen pt-24 md:pt-40 pb-16 md:pb-24 font-sans text-white relative overflow-hidden">
      {/* Dynamic Tech-Forward Background Glows (Electric Blue & Emerald) */}
      <div className="absolute top-0 left-[-20%] lg:left-[-10%] w-[80%] md:w-[60%] h-[60%] md:h-[80%] bg-[#00f0ff]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-[-10%] w-[70%] md:w-[50%] h-[50%] md:h-[70%] bg-[#10b981]/10 rounded-full blur-[120px] md:blur-[150px] pointer-events-none mix-blend-screen"></div>
      
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="container-fluid w-[92%] md:w-[85%] mx-auto relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-12 md:mb-16 max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight flex flex-col items-center">
            <span>Is Your Website</span>
            <span>Losing You Customers?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light">
            Get a professional Performance & SEO audit in seconds. We identify the bottlenecks stopping your growth.
          </p>
        </div>

        {/* Form Component */}
        <WebsiteAuditForm />
      </div>
    </main>
  );
}
