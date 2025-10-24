import React from "react";
import ContactInfo from "@/components/FooterTop/ContactInfo/ContactInfo";
import ContactForm from "@/components/FooterTop/ContactForm/ContactForm";
import styles from "./FooterTop.module.css";
import Copyright from "../Copyright/Copyright";

const FooterTop = () => {
  return (
    <section id="contact" className={styles.wrapper}>
      <div className={styles.container}>
        <div className="container-fluid mx-auto w-[90%]">
          {/* Custom breakpoint at 1135px */}

          <div className="grid grid-cols-1 gap-4 [@media(min-width:1135px)]:grid-cols-[65%_35%] [@media(min-width:1135px)]:gap-10 items-stretch">
            <div >
              <ContactInfo />
            </div>

            <div >
              <ContactForm />
            </div>
          </div>
      
        </div>
      </div>
      <Copyright/>
    </section>
  );
};

export default FooterTop;
