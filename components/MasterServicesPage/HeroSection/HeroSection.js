import React from "react";
import PageSearch from "@/components/MasterServicesPage/SearchCompo/PageSearch";
import { getServicePages } from "@/lib/getServicePages";

const HeroSection = ({}) => {
  const pages = getServicePages() || []; // make sure it’s never undefined
  return (
    <section
      className="relative bg-[url('/bg/maskgrou.png')] bg-cover bg-center bg-no-repeat py-[5rem] max-md:py-[1rem] after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-t after:from-[#232326] after:to-transparent after:pointer-events-none after:z-[1] before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-[15%] before:bg-gradient-to-t before:from-[#232326] before:to-transparent before:z-0"
    >
      <div
        className={`relative z-10 max-[1180px]:w-[95%] container-fluid w-[75%] mx-auto py-6 md:pt-25 pt-16 md:py-25`}
      >
        <div className="text-center">

          {/* ---------- Left Text (Second on mobile) ---------- */}
          <div className="text-white content">
            <h1 className={`max-w-[1000px] mx-auto pb-6`}>Where Human Creativity Meets AI-Powered Growth</h1>
            <PageSearch pages={pages} />
            <p className={`max-w-[665px] mx-auto max-md:max-w-full mt-4 md:mt-12 p1 pt-6 px-5`}>
              We tell your story across every digital touchpoint — blending creativity and automation so your business grows & converts
            </p>

          </div>

          {/* ---------- Right Image (First on mobile) ---------- */}
      
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

