import React from "react";
import Image from "next/image";
import style from "./CostofSection.module.css";

const CostofSection = ({ heading1, heading2, description, items }) => {

  return (
    <section className="bg-white">
      <div className="w-[80%] mx-auto text-center py-10 md:py-20">

        {/* Heading + Description */}
        <div>
          <h3 className={`${style.heading} mb-5 text-black`}>
            {heading1}
          </h3>

          <p
            className={`${style.description} text-black`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Second Heading */}
        <h4 className={`${style.boxheading} mt-15 md:mt-30 mb-15`}>
          {heading2}
        </h4>

        {/* Items */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.img}
                alt="icon"
                width={120}
                height={120}
                className={`${style.itemImage} mb-4`}
              />
              <p
                className={style.itemText}
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
