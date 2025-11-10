import React from "react";
import ContactInfo from "@/components/FooterTop/ContactInfo/ContactInfo"; // ✅ Contact info cards
import ContactForm from "@/components/FooterTop/ContactForm/ContactForm"; // ✅ Contact form component
import styles from "./FooterTop.module.css"; // ✅ CSS module for styling wrapper and container
import Copyright from "../Copyright/Copyright"; // ✅ Footer copyright component

const FooterTop = () => {
  return (
    // ✅ Main footer section wrapper
    <section id="contact" className={styles.wrapper}>
      
      {/* ✅ Inner container for layout */}
      <div className={styles.container}>
        <div className="container-fluid mx-auto w-[90%]">

          {/* ✅ Grid layout for ContactInfo and ContactForm
              Custom breakpoint at 1135px: 65% / 32% width distribution */}
          <div className="grid grid-cols-1 gap-4 [@media(min-width:1135px)]:grid-cols-[65%_32%] [@media(min-width:1135px)]:gap-10 items-stretch">
            
            {/* ✅ Left: Contact Info Cards */}
            <div>
              <ContactInfo />
            </div>

            {/* ✅ Right: Contact Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </div>

      {/* ✅ Footer copyright */}
      <Copyright />
    </section>
  );
};

export default FooterTop;
