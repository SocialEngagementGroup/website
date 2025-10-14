import React from "react";
import "./TextSlider.css"; // We'll define animation here

const TextSlider = () => {
  return (
    <div className="overflow-hidden  text-white">
      <div className="slider flex whitespace-nowrap animate-slide">
        <h5 className="mx-8 text-2xl font-semibold tracking-widest">
          FREE CONSULTATION
        </h5>
        <h5 className="mx-8 text-2xl font-semibold tracking-widest">
          FREE CONSULTATION
        </h5>
        <h5 className="mx-8 text-2xl font-semibold tracking-widest">
          FREE CONSULTATION
        </h5>
        <h5 className="mx-8 text-2xl font-semibold tracking-widest">
          FREE CONSULTATION
        </h5>
      </div>
    </div>
  );
};

export default TextSlider;
