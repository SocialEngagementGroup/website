"use client";
import React, { useState, useRef } from "react";
import styles from "./Faq.module.css";
const FAQ = ({ items, heading }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section + " bg-[#8d5454] text-white py-10 md:py-40"}>
      <div className="px-6 md:px-35">

        {/* Heading */}

          <h3 className={styles.heading}>
            {heading}
          </h3>


        {/* FAQ Items */}
        <div className="space-y-5 mt-10">
          {items.map((faq, index) => (
            <div
              key={index}
              className=" pb-4 cursor-pointer"
            >
              {/* Question */}
              <h5
                className={styles.question + " flex justify-between items-center text-xl font-semibold hover:text-gray-300 transition-colors"}
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
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
              >
                <p
                  className="text-lg mt-3 leading-relaxed text-gray-100"
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
