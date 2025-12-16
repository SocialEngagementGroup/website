import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
const ContactUsPage = () => {
  return (
    // ✅ Main wrapper for hero content
    <section className={styles.contactSection + " flex flex-col justify-center items-center py-0 pt-25 pb-10 md:py-30 px-5"}>

      {/* ✅ Centered content container with responsive alignment */}
      <div className={` mx-auto text-center  ${styles.heroContent}`}>

        {/* ✅ Main heading */}
        <h1 className={`${styles.heroHeading} font-bold leading-snug mx-auto`}>
          Let’s Build Something That Moves Your Brand Forward
        </h1>

        {/* ✅ Subtext paragraph */}
        <p className={`${styles.description + " p1"} text-gray-300  text-center  mx-auto py-5 md:py-15`}>
          Whether you need a full digital strategy, standout creative, or a performance-driven marketing plan — our team is here to help you grow with purpose.
        </p>

        {/* ✅ Hero button */}
        <Link href="#contact" >

          <button
            className={`
            ${styles.heroBtn} 
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
