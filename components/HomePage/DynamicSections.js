"use client";

import dynamic from "next/dynamic";

// All below-fold sections are dynamically imported in this Client Component
// so their JS is only downloaded when needed, without affecting SSR of the page.

const VideoSection = dynamic(
  () => import("@/components/HomePage/VideoSection/VideoSection"),
  { loading: () => <div className="min-h-[40vh] md:min-h-screen w-full bg-white" /> }
);

const ParallaxSliderSection = dynamic(
  () => import("@/components/HomePage/ParallaxSlider/ParallaxSliderSection"),
  { loading: () => <div className="min-h-[50vh] w-full bg-black" /> }
);

const ClientsLogo = dynamic(
  () => import("@/components/HomePage/ClientLogos/ClientLogos"),
  { loading: () => <div className="w-full h-24 bg-white" /> }
);

const Testimonials = dynamic(
  () => import("@/components/ServicePage/Testimonials/Testimonials"),
  { loading: () => <div className="w-full h-48 bg-white" /> }
);

const BrandingSection = dynamic(
  () => import("@/components/HomePage/BrandSucceed/BrandingSection"),
  { loading: () => <div className="w-full h-48 bg-white" /> }
);

export default function DynamicSections() {
  return (
    <>
      <VideoSection />
      <ParallaxSliderSection />
      <ClientsLogo />
      <Testimonials />
      <div className="bg-white">
        <BrandingSection />
      </div>
    </>
  );
}
