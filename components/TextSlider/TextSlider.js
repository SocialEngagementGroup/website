import React from "react";
import "./TextSlider.css"; // Animation and styling

const TextSlider = () => {
  return (
    <div className="overflow-hidden text-white textslide relative">
      {/* Sliding text container */}
      <div className="slider flex whitespace-nowrap animate-slide py-4">
        {/* Repeated items for seamless sliding */}
        {Array(8)
          .fill(0)
          .map((_, idx) => (
            <h5
              key={idx}
              className="mx-8 text-2xl md:text-5xl font-semibold tracking-widest"
            >
              FREE CONSULTATION
            </h5>
          ))}
      </div>

      {/* Centered button overlay */}
      <button className="consultant-btn">FREE CONSULTATION</button>
    </div>
  );
};

export default TextSlider;
