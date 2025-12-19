import React from "react";
import styles from "./herosection.module.css";
import PageSearch from "@/components/MasterServicesPage/SearchCompo/PageSearch";
import { getServicePages } from "@/lib/getServicePages";

const HeroSection = ({}) => {
  const pages = getServicePages() || []; // make sure it’s never undefined
  return (
    <section
      className={styles.herosection}
   
    >
      <div
        className={`${styles.containerCustom} container-fluid w-[75%] mx-auto py-6 md:py-25`}
      >
        <div className="text-center">

          {/* ---------- Left Text (Second on mobile) ---------- */}
          <div className="text-white content ">
            <h1 className={`${styles.title} pb-6`}>Where Human Creativity Meets AI-Powered Growth</h1>
            <PageSearch pages={pages} />
            <p className={`${styles.description} mt-4 md:mt-12 p1 pt-6`}>
              We tell your story across every digital touchpoint — blending creativity and automation so your business grows & converts
            </p>

          </div>

          {/* ---------- Right Image (First on mobile) ---------- */}
      
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

