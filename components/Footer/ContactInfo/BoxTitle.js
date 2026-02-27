import React from "react";

// ✅ Component for a section title with a subtitle/description
const BoxTitle = () => {
  return (
    // ✅ Wrapper with text formatting to exactly match Marketing screenshot
    <div className="text-center lg:text-left mb-8 lg:mb-12">
      
      {/* Font matching the Marketing screenshot: Serif, tracking-tight */}
      {/* Font matching the Marketing screenshot: Serif, tracking-tight */}
      <h4 className="!font-serif !font-medium !leading-[1.1] !tracking-tight">
        Let’s create the <br />
        next chapter of <br />
        Your <span className="italic">Story</span>
      </h4>

      <div className="flex justify-center lg:justify-start pt-5">
        {/* Border-l styling and grey text matching the screenshot */}
        <p className="p3 leading-[1.6] max-w-md font-light border-l-[2px] border-[#8e4545] pl-5 md:pl-6">
          Every story deserves to be seen, heard, and remembered. Let’s bring yours to life with clarity and purpose.
        </p>
      </div>

    </div>
  );
};

export default BoxTitle;
