import React from "react";

// ✅ Component for a section title with a subtitle/description
const BoxTitle = () => {
  return (
    // ✅ Wrapper with text formatting to exactly match Marketing screenshot
    <div className="text-center lg:text-left mb-8 lg:mb-12">
      
      {/* Font matching the Marketing screenshot: Serif, tracking-tight */}
      <h4 className="!font-outfit !font-medium !leading-[1.2] !tracking-tight text-3xl md:text-5xl lg:text-6xl">
        Let’s create the next <br className="hidden md:block" />
        chapter of Your Story
      </h4>

      <div className="flex justify-center lg:justify-start pt-4 md:pt-6">
        {/* Border-l styling and grey text matching the screenshot */}
        <p className="p3 leading-[1.6] max-w-md font-light border-l-[2px] border-[#8e4545] pl-4 md:pl-6 text-sm md:text-base text-gray-400">
          Every story deserves to be seen, heard, and remembered. Let’s bring yours to life with clarity and purpose.
        </p>
      </div>

    </div>
  );
};

export default BoxTitle;
