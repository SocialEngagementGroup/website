import React from "react";
import ContactInfo from "@/components/Footer/ContactInfo/ContactInfo"; // ✅ Contact info cards
import ContactForm from "@/components/Footer/ContactForm/ContactForm"; // ✅ Contact form component
import Copyright from "../HomePage/Copyright/Copyright"; // ✅ Footer copyright component

const Footer = () => {
  return (
    // ✅ Main footer section wrapper - Updated to Marketing Layout!
    <>
      <section id="contact" className="min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden relative bg-[#171717] perspective-1000 py-20 md:py-0 font-sans">
        
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-[url('/assets/images/backgrounds/contact-form-bd.png')] bg-cover bg-center bg-no-repeat blur-xl transform scale-105"
          style={{ zIndex: 0 }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />

        {/* ✅ Inner container for layout */}
        <div className="container mx-auto px-6 relative z-10 max-w-7xl h-full flex items-center justify-center">
          <div className="bg-black/60 md:bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl w-full z-50 pointer-events-auto relative">
  
            {/* ✅ Grid layout for ContactInfo and ContactForm */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* ✅ Left: Contact Info Cards */}
              <div className="space-y-6 md:space-y-8 py-2 md:py-4">
                <ContactInfo />
              </div>
  
              {/* ✅ Right: Contact Form */}
              <div className="">
                <ContactForm layout="stacked" />
              </div>
  
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer links and bottom bar */}
      <footer className="bg-[#0A0A0A] border-t border-white/5">
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
