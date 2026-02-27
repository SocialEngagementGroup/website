import React from "react";

// ✅ Section component for "Explore Our Insights"
const ExploreOurInsights = () => {
  return (
    // ✅ Main section wrapper with vertical padding
    <section className="py-14 ExploreOurInsights">
      
      {/* ✅ Container for text, centered on all screens */}
      <div className="text-center md:text-center px-4">

        {/* ✅ Subtitle above main heading */}
        <h3 className="block mb-2 text-[#0A0A0A] sub-title">
          Our Resources
        </h3>

        {/* ✅ Main heading for the section */}
        <h2 className="font-semibold text-gray-900 section-title mt-6 leading-tight tracking-tight">
          Explore Our Insights
        </h2>
      </div>

    </section>
  );
};

export default ExploreOurInsights;
