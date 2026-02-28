import React from "react";
import Image from "next/image";

const CostofSection = ({ heading1, heading2, description, items }) => {

  return (
    <>
      {/* First Section: Intro Block */}
      <section className="bg-white">
        <div className="w-[78%] mx-auto text-center pt-10 pb-5 md:pt-20 md:pb-10 max-md:w-[90%]">
          <h2 className="max-w-[1130px] mx-auto max-md:w-full mb-5 text-[#975554] text-center">
            {heading1}
          </h2>
          <p
            className="text-black max-w-[1040px] my-[30px] mx-auto max-[960px]:w-full max-md:w-full max-md:my-[10px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </section>

      {/* Second Section: Cards Grid */}
      <section className="bg-[#975554]">
        <div className="w-[78%] mx-auto text-center pt-12 pb-20 md:pt-24 md:pb-32 max-md:w-[90%]">
          <h2 className="mb-10 md:mb-15 text-white text-center">
            {heading2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1080px] mx-auto text-left">
            {items.map((item, index) => (
              <div key={index} className="relative bg-[#F5F5F3] rounded-[20px] p-6 md:p-8 shadow-2xl overflow-hidden flex flex-col justify-center min-h-[160px]">
                <span className="absolute top-4 right-6 text-[80px] md:text-[110px] font-serif text-black/[0.04] leading-none z-0 pointer-events-none select-none">
                  0{index + 1}
                </span>
                <div className="relative z-10 md:pr-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6">
                  <Image
                    src={item.img}
                    alt="icon"
                    width={140}
                    height={140}
                    className="w-[70px] md:w-[80px] flex-shrink-0"
                  />
                  <p
                    className="text-black"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CostofSection;
