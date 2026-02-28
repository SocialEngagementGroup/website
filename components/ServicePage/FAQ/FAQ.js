"use client";
import React, { useState, useRef } from "react";
const FAQ = ({ items, heading }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[#975554] !text-4xl md:!text-5xl font-black leading-[1.1] tracking-tight">
              Frequently <br />
              Asked Questions
            </h2>
          </div>

          {/* Right Column: FAQ Items */}
          <div className="space-y-3 md:space-y-4 w-full">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`cursor-pointer rounded-[20px] md:rounded-[24px] px-6 py-4 md:px-8 md:py-5 transition-all duration-300 border border-transparent ${
                    isOpen 
                      ? "bg-[#fcf8f7] border-[#975554]/10 shadow-sm" 
                      : "bg-[#fcf8f7] hover:border-[#975554]/10 hover:shadow-sm"
                  }`}
                >
                  {/* Question */}
                  <div className="flex justify-between items-center gap-4">
                    <h3 className={`!text-lg md:!text-xl font-bold leading-snug transition-colors duration-300 ${isOpen ? "text-[#975554]" : "text-gray-900"}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#975554] border-[#975554] text-white rotate-180" : "bg-white text-gray-300"}`}>
                      {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      )}
                    </div>
                  </div>

                  {/* Answer */}
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{
                      maxHeight: isOpen
                          ? `${contentRefs.current[index]?.scrollHeight}px`
                          : "0px",
                    }}
                    className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                  >
                    <div className="pt-4 mt-4 border-t border-[#975554]/5">
                      <p
                        className="text-gray-600 leading-relaxed text-base md:text-lg"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
