"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const contactInfo = [
  { 
    icon: "/contactus/icons/email.png", 
    label: "Email us at",
    text: "rahee@socialengagementgroup.com",
    link: "mailto:rahee@socialengagementgroup.com"
  },
  { 
    icon: "/contactus/icons/phone.png", 
    label: "Call us",
    text: "+1 (347) 935-6442",
    link: "tel:+13479356442"
  },
  { 
    icon: "/contactus/icons/work-time.png", 
    label: "Working hours",
    text: "Mon – Fri: 10:00 AM – 6:00 PM (EST)" 
  },
  { 
    icon: "/contactus/icons/pin-map.png", 
    label: "Our location",
    text: "New York City, USA" 
  },
];

const GetInTouch = () => {
  return (
    <section id="contact" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: HEADING */}
          <div className="space-y-6">
            <h2 className="text-gray-900 !text-3xl sm:!text-4xl lg:!text-5xl font-bold leading-tight">
              Ways to Reach Us
            </h2>
            <p className="text-gray-600 !text-lg md:!text-xl max-w-lg leading-relaxed">
              Have a question or ready to start your next big project? Reach out to us through any of these channels. Our team is here to help you grow with purpose.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 pt-4">
              <Link
                href="https://www.instagram.com/socialengagementgroup"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#975554] text-white hover:bg-white hover:text-[#975554] border border-[#975554] transition-all duration-300 shadow-lg shadow-[#975554]/20"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/social-engagement-group"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#975554] text-white hover:bg-white hover:text-[#975554] border border-[#975554] transition-all duration-300 shadow-lg shadow-[#975554]/20"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/seg.socialengagementgroup/"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#975554] text-white hover:bg-white hover:text-[#975554] border border-[#975554] transition-all duration-300 shadow-lg shadow-[#975554]/20"
              >
                <FaFacebookF size={20} />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT INFO */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-8 lg:gap-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 md:gap-8 group">
                  {/* Icon Container */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-[#975554]/30 group-hover:bg-white transition-all duration-300">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={24}
                      height={24}
                      className="w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Vertical Divider Line */}
                  <div className="w-[2px] md:w-[3px] h-10 md:h-14 bg-[#975554]/30 flex-shrink-0" />

                  {/* Text Details Column */}
                  <div className="flex flex-col gap-0.5 md:gap-1 min-w-0">
                    <p className="text-[#975554] text-sm md:text-xl font-bold uppercase tracking-widest leading-none">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-900 !text-base md:!text-2xl font-bold hover:text-[#975554] transition-colors break-all leading-tight"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-gray-900 !text-base md:!text-2xl font-bold leading-tight break-words">
                        {item.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
