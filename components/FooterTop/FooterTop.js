import React from "react";
import ContactInfo from "@/components/FooterTop/ContactInfo/ContactInfo";
import ContactForm from "@/components/FooterTop/ContactForm/ContactForm";
import styles from "./FooterTop.module.css";

const FooterTop = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
    <div className="container-fluid mx-auto w-[97%]">

        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] ">

          <div className="bg-red-400">
          <ContactInfo />
          </div>

             <div className="bg-orange-400">
              <ContactInfo />
          </div>

        </div>

      </div>
      </div>
   
    </section>
  );
};

export default FooterTop;

