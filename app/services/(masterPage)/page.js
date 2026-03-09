import React from "react";
import HeroSection from "@/components/MasterServicesPage/HeroSection/HeroSection";
import AutoSlider from "@/components/MasterServicesPage/AutoSlider/AutoSlider";
import { CreativeData, Digital, Industry, Marketing, Technology } from "./sliderData";
import Testimonials from "@/components/ServicePage/Testimonials/Testimonials";
export const metadata = {
  title: "Services",
  description: "Explore our comprehensive range of digital marketing services, from creative branding to AI-powered growth strategies.",
  openGraph: {
    title: "Services | SEG - Social Engagement Group",
    description: "Explore our comprehensive range of digital marketing services at SEG.",
    url: "/services",
  },
  twitter: {
    title: "Services | SEG - Social Engagement Group",
    description: "Explore our comprehensive range of digital marketing services at SEG.",
  },
};

const MasterServicesPage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <div className=""></div>

      <div className="bg-black py-2 md:py-8">
        <div className="w-[90%] mx-auto">
          <section className="py-6 mt-0 mb-8">
            <div className="mb-4 md:mb-6">
              <span className="text-[#975554] text-[12px] md:text-[14px] tracking-[0.2em] font-semibold uppercase block mb-1 md:mb-2">Creative</span>
              <h3 className="text-white !text-[28px] md:!text-[36px] lg:!text-[44px] font-serif capitalize leading-tight">Visual Storytelling & Brand Identity</h3>
            </div>
            <AutoSlider slides={CreativeData} />
          </section>

          <section className="py-6 mt-4 md:mt-12 mb-8">
            <div className="mb-4 md:mb-6">
              <span className="text-[#975554] text-[12px] md:text-[14px] tracking-[0.2em] font-semibold uppercase block mb-1 md:mb-2">Digital</span>
              <h3 className="text-white !text-[28px] md:!text-[36px] lg:!text-[44px] font-serif capitalize leading-tight">Next-Gen Digital Marketing</h3>
            </div>
            <AutoSlider slides={Digital} />
          </section>

          <section className="py-6 mt-4 md:mt-12 mb-8">
            <div className="mb-4 md:mb-6">
              <span className="text-[#975554] text-[12px] md:text-[14px] tracking-[0.2em] font-semibold uppercase block mb-1 md:mb-2">Technology</span>
              <h3 className="text-white !text-[28px] md:!text-[36px] lg:!text-[44px] font-serif capitalize leading-tight">AI & Scalable Architecture</h3>
            </div>
            <AutoSlider slides={Technology} />
          </section>

          <section className="py-6 mt-4 md:mt-12 mb-8">
            <div className="mb-4 md:mb-6">
              <span className="text-[#975554] text-[12px] md:text-[14px] tracking-[0.2em] font-semibold uppercase block mb-1 md:mb-2">Industry</span>
              <h3 className="text-white !text-[28px] md:!text-[36px] lg:!text-[44px] font-serif capitalize leading-tight">Tailored Industry Solutions</h3>
            </div>
            <AutoSlider slides={Industry} />
          </section>

          <section className="py-6 mt-4 md:mt-12 mb-12">
            <div className="mb-4 md:mb-6">
              <span className="text-[#975554] text-[12px] md:text-[14px] tracking-[0.2em] font-semibold uppercase block mb-1 md:mb-2">Marketing</span>
              <h3 className="text-white !text-[28px] md:!text-[36px] lg:!text-[44px] font-serif capitalize leading-tight">Data-Driven Growth Strategies</h3>
            </div>
            <AutoSlider slides={Marketing} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MasterServicesPage;
