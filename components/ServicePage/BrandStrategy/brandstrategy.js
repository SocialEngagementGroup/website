import React from "react";
import Image from "next/image";

const BrandStrategy = ({ heading, items, img }) => {
  return (
    <section className="bg-white pb-0 max-[990px]:pb-[3rem] max-md:mt-0 max-md:pb-0">
      <div
        className={
          "max-[990px]:pt-[20px] max-md:pt-[30px] max-md:py-[20px] container-fluid mx-auto py-20"
        }
      >
        <div
          className="
            grid grid-cols-1
            md:grid-cols-[50%_50%]
            [@media(min-width:1300px)]:grid-cols-[50%_50%]
            gap-4 md:gap-10
            items-center justify-center text-start
          "
        >
          {/* ---------- Left: Image ---------- */}
          <div className="flex justify-center">
            <div className="">
              <Image
                src={img}
                alt="Brand Strategy Image"
                width={700}
                height={400}
                className=""
              />
            </div>
          </div>

          {/* ---------- Right: Heading + List ---------- */}
          <div
            className={
              "flex justify-center md:justify-center mr:0 md:mr-10 mt-6  md:mt-0"
            }
          >
            <div className="max-w-[800px] max-md:!mt-0 max-md:!w-full text-black px-5 md:px-0">
              {/* Heading */}
              <h2 className="max-w-[600px]">{heading}</h2>

              {/* List Items */}
              <ul className="mt-[16px] mb-[10px] max-w-[630px] max-[1300px]:w-full px-5 md:px-0">
                {items?.map((item, index) => (
                  <li
                    key={index}
                    className="list-disc mt-[1rem] ml-[30px] max-md:list-outside max-md:ml-0 p1 opacity-90"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStrategy;
