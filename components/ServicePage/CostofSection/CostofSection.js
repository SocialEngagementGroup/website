import React from "react";
import Image from "next/image";

const CostofSection = ({ heading1, heading2, description, items }) => {

  return (
    <section className="bg-white">
      <div className="w-[78%] mx-auto text-center py-10 md:py-20 max-md:w-[90%]">

        {/* Heading + Description */}
        <div>
          <h2 className="!font-serif !font-bold !text-black !leading-tight !tracking-tight max-w-[1130px] mx-auto max-md:w-full mb-5">
            {heading1}
          </h2>

          <p
            className="!p1 !font-light !text-black max-w-[1040px] my-[30px] mx-auto max-[960px]:w-full max-md:w-full max-md:my-[10px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Second Heading */}
        <h3 className="!font-serif !font-bold !text-black mt-15 md:mt-30 mb-15">
          {heading2}
        </h3>

        {/* Items */}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.img}
                alt="icon"
                width={120}
                height={120}
                className={`max-w-[80px] max-md:max-w-[60px] rounded-[20px] mb-4`}
              />
              <p
                className="text-black max-w-[275px]"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostofSection;
