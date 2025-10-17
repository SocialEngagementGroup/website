import React from "react";
import { ArrowUpRight } from "lucide-react";
import BoxTitle from "./BoxTitle";
import style from "./ContactInfo.module.css";

// ✅ Contact info data (icons, titles, alt text)
const contactData = [
  {
    id: 1,
    icon: "/icons/callicon.png",
    title: "Book A Call",
    alt: "Call Icon",
  },
  {
    id: 2,
    icon: "/icons/mailicon.png",
    title: "Send Email",
    alt: "Mail Icon",
  },
];

const ContactInfo = () => {
  return (
    <div className={`${style.contentbox} container-fluid mx-auto`}>
      <div
        className={`${style.contentboxInner} border-4 border-gray-700 relative p-8 rounded-[20px] shadow-lg mx-auto`}
      >
        {/* Section Title */}
        <BoxTitle />

        {/* Flex container for contact boxes */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {contactData.map((item) => (
            <div
              key={item.id}
              className={`${style.contentboxInnerBox} border-4 border-gray-700 p-10 rounded-[20px] flex 
              items-center justify-between cursor-pointer hover:shadow-lg transition-shadow flex-1 relative`}
            >
              <div className="flex flex-col items-start gap-4">
                <img src={item.icon} alt={item.alt} width={60} height={60} />
                <h4 className="font-semibold text-[32px] text-white">
                  {item.title}
                </h4>
              </div>

              {/* Arrow icon */}
              <div className="absolute top-4 right-4">
                <ArrowUpRight className="text-gray-700 dark:text-gray-300" size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
