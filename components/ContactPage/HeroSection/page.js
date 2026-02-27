import React from "react";
import Link from "next/link";
const ContactUsPage = () => {
  return (
    // ✅ Main wrapper for hero content
    <section className="relative z-[111] overflow-hidden text-white transition-all duration-300 ease-in-out bg-[url('/contactus/contactus.png')] bg-cover bg-center bg-no-repeat after:content-[''] after:block after:w-full after:h-full after:absolute after:top-0 after:bg-[rgba(57,57,57,0.54)] after:z-[-1] flex flex-col justify-center items-center py-0 pt-25 pb-10 md:py-30 px-5">

      {/* ✅ Centered content container with responsive alignment */}
      <div className={`mx-auto text-center `}>

        {/* ✅ Main heading */}
        <h1 className={`max-w-[900px] font-bold leading-snug mx-auto`}>
          Let’s Build Something That Moves Your Brand Forward
        </h1>

        {/* ✅ Subtext paragraph */}
        <p className={`max-w-[670px] p1 text-gray-300  text-center  mx-auto py-5 md:py-15`}>
          Whether you need a full digital strategy, standout creative, or a performance-driven marketing plan — our team is here to help you grow with purpose.
        </p>

        {/* ✅ Hero button */}
        <Link href="#contact" >

          <button
            className={`
            not-italic 
            bg-[#656565] text-gray-100 font-semibold
            px-6 py-3 sm:bg-gray-300 sm:text-gray-900
            sm:px-8 sm:py-3 md:px-10 md:py-4
            hover:bg-gray-400 transition cursor-pointer
            rounded-lg text-base sm:text-lg mt-4
          `}
          >
            Connect With Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactUsPage;
