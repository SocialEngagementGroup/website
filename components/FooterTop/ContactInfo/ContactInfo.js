import React from "react";
import { ArrowUpRight, Box } from "lucide-react"; // Using lucide icon for arrow
import Button from "../Button/Button"; // your custom Button component
import Image from "next/image";
import BoxTitle from "./BoxTitle";
import style from "./ContactInfo.module.css";
const ContactInfo = () => {
  return (
    <>
  <div className={`${style.contentbox} container-fluid mx-auto px-4 py-12`}>
       <BoxTitle/>
     <div className="relative bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
  {/* Flex container for both boxes */}
  <div className="flex flex-col md:flex-row gap-6">
    {/* Call Box */}
    <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow flex-1">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <Image src="/icons/call.png" alt="Call Icon" width={32} height={32} />
        {/* Text */}
        <span className="font-semibold text-gray-900 dark:text-white">
          Book A Call
        </span>
      </div>

      {/* Arrow icon positioned at top-right */}
      <div className="absolute top-2 right-2">
        <ArrowUpRight className="text-gray-700 dark:text-gray-300" size={20} />
      </div>
    </div>

    {/* Email Box */}
    <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow flex-1">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <Image src="/icons/mail.png" alt="Mail Icon" width={32} height={32} />
        {/* Text */}
        <span className="font-semibold text-gray-900 dark:text-white">
          Send Email
        </span>
      </div>

      {/* Arrow icon positioned at top-right */}
      <div className="absolute top-2 right-2">
        <ArrowUpRight className="text-gray-700 dark:text-gray-300" size={20} />
      </div>
    </div>
  </div>
</div>
  </div>

    </>

  );
};

export default ContactInfo;
