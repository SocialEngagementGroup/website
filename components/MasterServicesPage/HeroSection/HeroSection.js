import React from "react";

const HeroSection = ({}) => {
  return (
    <section
      className="relative bg-[url('/assets/images/backgrounds/master-service-bg.png')] bg-cover bg-center bg-no-repeat py-[5rem] max-md:py-[1rem] after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:pointer-events-none after:z-[1] before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-[15%] before:bg-gradient-to-t before:from-black before:to-transparent before:z-0"
    >
      <div
        className={`relative z-10 max-[1180px]:w-[95%] container-fluid w-[75%] mx-auto py-6 md:pt-25 pt-16 md:py-25`}
      >
        <div className="text-center">

          {/* ---------- Left Text (Second on mobile) ---------- */}
          <div className="text-white content">
            <h1 className={`max-w-[1000px] mx-auto pb-2 md:pb-4`}>
              Where Human Creativity Meets <br className="hidden md:block"/> AI-Powered Growth
            </h1>
            <p className={`max-w-[665px] mx-auto max-md:max-w-full mt-2 md:mt-4 p1 md:pt-4 px-5`}>
              We tell your story across every digital touchpoint — <br className="hidden md:block"/> blending creativity and automation so your business grows <br className="hidden md:block"/> & converts
            </p>

          </div>

          {/* ---------- Right Image (First on mobile) ---------- */}
      
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

