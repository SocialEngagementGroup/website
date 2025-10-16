import React from "react";
import "./TextSlider.css"; // We'll define animation here


const TextSlider = () => {
  return (
  <>
    <div className="overflow-hidden  text-white textslide">
      <div className="slider flex whitespace-nowrap animate-slide py-4">
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
          <button className="consultant-btn">FREE CONSULTATION</button>
    </div>

   
  
  </>
  );
};

export default TextSlider;
