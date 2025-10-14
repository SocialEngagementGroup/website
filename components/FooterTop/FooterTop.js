import React from "react";
import ContactInfo from "@/components/FooterTop/ContactInfo/ContactInfo";
import ContactForm from "@/components/FooterTop/ContactForm/ContactForm";
import styles from "./FooterTop.module.css";

const FooterTop = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
    <div className="container-fluid mx-auto w-[100%]">

    <div className="grid grid-cols-1 md:grid-cols-[65%_35%] justify-center items-center gap-10">
  <div className="">
    <ContactInfo />
  </div>

  <div className="">
    <ContactForm />
  </div>
</div>


      </div>
      </div>
   
    </section>
  );
};

export default FooterTop;

