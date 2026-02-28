import React from "react";
import BoxTitle from "./BoxTitle"; // ✅ Section title component
import Image from "next/image"; // ✅ Next.js Image component for optimized images

const ContactInfo = () => {
  return (
    // ✅ Outer container with raw text alignment structure
    <div className="container-fluid mx-auto">
      
      {/* ✅ Inner content box without the previous borders */}
      <div className="relative mx-auto">
        
        {/* ✅ Section Title formatted correctly */}
        <BoxTitle />

        {/* ✅ Grid container for Call and Email boxes - Refactored for cleaner design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 w-full">

          {/* ✅ Call Box */}
          <a
            href="https://calendly.com/itseg/segmeet"
            className="group bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-2xl flex 
              flex-col items-start gap-6 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all shadow-lg relative"
          >
            {/* ✅ Icon and text */}
            <div className="flex flex-col items-start gap-4">
              <Image src="/assets/images/icons/callicon.png" alt="Call Icon" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-semibold text-white tracking-wide text-base md:text-lg">
                Book A Call
              </h3>
            </div>

            {/* ✅ Arrow icon at top-right */}
            <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <Image
                src="/assets/images/icons/arrow-up-right-1.png"
                alt="Arrow Icon"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
          </a>

          {/* ✅ Email Box */}
          <a
            href="mailto:rahee@socialengagementgroup.com"
             className="group bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-2xl flex 
             flex-col items-start gap-6 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all shadow-lg relative"
          >
            {/* ✅ Icon and text */}
            <div className="flex flex-col items-start gap-4">
              <Image src="/assets/images/icons/mailicon.png" alt="Mail Icon" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-semibold text-white tracking-wide text-base md:text-lg">
                Send Email
              </h3>
            </div>

            {/* ✅ Arrow icon at top-right */}
            <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <Image
                src="/assets/images/icons/arrow-up-right-1.png"
                alt="Arrow Icon"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
