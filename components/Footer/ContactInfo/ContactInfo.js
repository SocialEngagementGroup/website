import React from "react";
import { ArrowUpRight } from "lucide-react"; // ✅ Lucide icon for arrow (currently not used in JSX)
import BoxTitle from "./BoxTitle";            // ✅ Section title component
import style from "./ContactInfo.module.css"; // ✅ CSS module for custom styles
import Image from "next/image";               // ✅ Next.js Image component for optimized images
const ContactInfo = () => {
  return (
    // ✅ Outer container with backdrop blur, rounded corners, and full-width fluid container
    <div className={`${style.contentbox} container-fluid mx-auto backdrop-blur-md bg-black/40 rounded-[20px]`}>
      
      {/* ✅ Inner content box with border, padding, shadow, and rounded corners */}
      <div
        className={`${style.contentboxInner} border-4 border-gray-700 relative p-13 rounded-[20px] shadow-lg mx-auto`}
      >
        {/* ✅ Section Title */}
        <BoxTitle />

        {/* ✅ Grid container for Call and Email boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 w-[90%]">

          {/* ✅ Call Box */}
          <a
            href="tel:+13479356442"
            className={`${style.contentboxInnerBox} border-4 border-gray-700 p-10 rounded-[20px] flex 
              items-center justify-between cursor-pointer hover:shadow-lg transition-shadow flex-1 relative`}
          >
            {/* ✅ Icon and text */}
            <div className="flex flex-col items-start gap-4">
              <Image src="/Icons/callicon.png" alt="Call Icon" width={60} height={60} />
              <h4 className="font-semibold text-[32px] text-white">
                Book A Call
              </h4>
            </div>

            {/* ✅ Arrow icon at top-right */}
            <div className="absolute top-4 right-4">
              <Image
                src="/Icons/arrow-up-right-1.png"
                alt="Arrow Icon"
                width={60}
                height={60}
              />
            </div>
          </a>

          {/* ✅ Email Box */}
          <a
            href="mailto:rahee@socialengagementgroup.com"
            className={`${style.contentboxInnerBox} border-4 border-gray-700 p-10 rounded-[20px] flex 
              items-center justify-between cursor-pointer hover:shadow-lg transition-shadow flex-1 relative`}
          >
            {/* ✅ Icon and text */}
            <div className="flex flex-col items-start gap-4">
              <Image src="/Icons/mailicon.png" alt="Mail Icon" width={60} height={60} />
              <h4 className="font-semibold text-[32px] text-white">
                Send Email
              </h4>
            </div>

            {/* ✅ Arrow icon at top-right */}
            <div className="absolute top-4 right-4">
              <Image
                src="/Icons/arrow-up-right-1.png"
                alt="Arrow Icon"
                width={60}
                height={60}
              />
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
