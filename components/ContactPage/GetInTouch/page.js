import React from "react";
import Image from "next/image";
import styles from "./GetInTouch.module.css";

const contactInfo = [
  { icon: "/contactus/icons/email.png", text: "rahee@socialengagementgroup.com" },
  { icon: "/contactus/icons/phone.png", text: "+1 (347) 935-6442" },
  { icon: "/contactus/icons/work-time.png", text: "Monday – Friday: 10:00 AM – 6:00 PM (EST)" },
  { icon: "/contactus/icons/pin-map.png", text: "New York City, USA (Serving clients globally)" },
];

const GetInTouch = () => {
  return (
    <section className={`${styles.section} py-5 md:py-20`}>
      <div className={`${styles.fullWidth1180} w-[75%] mx-auto`}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-0 items-center px-5 justify-items-center md:justify-items-start">

          {/* RIGHT COLUMN: IMAGE */}
          <div className="w-full justify-center flex mb-10 md:mb-0">
            <Image
              src="/contactus/gitintouch.jpg"
              alt="Contact"
              className={`${styles.image} w-full object-cover`}
              width={569}
              height={343}
            />
          </div>

          {/* LEFT COLUMN: TEXT */}
          <div className="w-full text-black text-start">
            <h3 className="font-semibold">Get In Touch</h3>

            <ul className="space-y-4 mt-6 mx-auto md:mx-0">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="break-all text-[18px] md:text-[24px]">{item.text}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
