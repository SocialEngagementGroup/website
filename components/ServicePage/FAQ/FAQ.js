"use client";
import React, { useState, useRef } from "react";
const FAQ = ({ items, heading }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#8d5454] text-white py-10 md:py-40 max-[990px]:-mt-[80px] max-md:mt-0">
      <div className="w-[65%] mx-auto px-10 max-md:!w-full">

        {/* Heading */}

          <h2 className="bg-[#232326] rounded-[10px] w-[200px] text-center">
            {heading}
          </h2>


        {/* FAQ Items */}
        <div className="space-y-5 mt-10">
          {items.map((faq, index) => (
            <div
              key={index}
              className=" pb-4 cursor-pointer"
            >
              {/* Question */}
              <h5
                className={"flex justify-between items-center font-semibold hover:text-gray-300 transition-colors"}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="ml-4 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h5>

              {/* Animated Answer */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out "
              >
                <p
                  className={"mt-3 leading-relaxed text-gray-100 pt-[12px] pb-[8px] italic"}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
