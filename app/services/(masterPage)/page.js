import React from "react";
import HeroSection from "@/components/MasterServicesPage/HeroSection/HeroSection";
import AutoSlider from "@/components/MasterServicesPage/AutoSlider/AutoSlider";
import { CreativeData, Digital, Industry } from "./sliderData";

const MasterServicesPage = () => {
  return (
    <>
      <HeroSection />
      <div className=""></div>

      <div className="bg-[#232326] py-2 md:py-8">
        <div className="w-[90%] mx-auto">
          <section className="py-4 mt:4  md:mt-10">
            <h3 className="text-white mb-8">Creative</h3>
            <AutoSlider slides={CreativeData} />
          </section>

          <section className="py-4 mt:4  md:mt-10">
            <h3 className="text-white mb-8">Digital</h3>
            <AutoSlider slides={Digital} />
          </section>

          <section className="py-4 mt:4  md:mt-10">
            <h3 className="text-white mb-8">Industry</h3>
            <AutoSlider slides={Industry} />
          </section>
        </div>
      </div>
    </>
  );
};

export default MasterServicesPage;
