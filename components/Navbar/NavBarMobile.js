"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projectsData";
import { Phone } from "lucide-react";

export default function NavBarMobile() {
  const pathname = usePathname();
  const isCareersPage = pathname.startsWith("/careers");
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  // On careers pages (light bg), use dark text when not scrolled and menu closed
  const useDarkText = isCareersPage && !isSticky && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="md:hidden fixed top-0 left-0 w-full z-[999]">
      {/* Top Bar */}
      <div
        className={`h-[70px] w-full flex items-center justify-between px-4 transition-all duration-300 ${
          isSticky || isMobileMenuOpen ? "bg-[#0f0f0f] border-b border-white/10" : "bg-transparent border-b border-transparent"
        }`}
      >
        <Link href="/" className="relative w-[50px] h-[35px]">
          <Image
            src="/assets/images/site-logo/logo.svg"
            alt="Site Logo"
            fill
            className={`object-contain brightness-0 ${useDarkText ? '' : 'invert'}`}
          />
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/itseg/segmeet"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#975554] text-white px-5 py-2 rounded-full font-sans font-bold text-[15px] transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            Book a Call
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-1 focus:outline-none ${useDarkText ? 'text-gray-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 top-[70px] bg-[#0f0f0f] z-[998] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col pt-8 pb-10 px-6 overflow-y-auto overscroll-contain">
          <div className="flex flex-col space-y-2">
            {/* Regular Links */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 text-white font-sans font-bold text-[22px] border-l-4 border-transparent pl-2 hover:border-white transition-all"
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between py-4 border-l-4 border-transparent pl-2">
                <Link
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white font-sans font-bold text-[22px]"
                >
                  Services
                </Link>
              </div>

              {/* Category Accordion */}
              <div className="mt-2 space-y-1">
                {projects.map((item) => (
                  <div key={item.title} className="flex flex-col">
                    <button
                      onClick={() =>
                        setMobileActiveCategory(
                          mobileActiveCategory === item.title ? null : item.title
                        )
                      }
                      className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all ${
                        mobileActiveCategory === item.title ? "bg-white/5 border-l-[3px] border-white" : "border-l-[3px] border-transparent"
                      }`}
                    >
                      <span className={`text-[16px] font-sans capitalize tracking-[0.1em] font-bold ${
                        mobileActiveCategory === item.title ? "text-white" : "text-white/60"
                      }`}>
                        {item.title}
                      </span>
                      <svg
                        className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                          mobileActiveCategory === item.title ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileActiveCategory === item.title ? "max-h-[800px] opacity-100 mt-2 pb-4" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col space-y-5 pl-8 pr-4">
                        {item.sliderData.map((service) => (
                          <Link
                            key={service.name}
                            href={service.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-[17px] font-sans font-medium text-white/60 hover:text-white transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center justify-between py-4 border-l-4 border-transparent pl-2"
              >
                <span className="text-white font-sans font-bold text-[22px]">Resources</span>
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 ${
                    mobileResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileResourcesOpen ? "max-h-[200px] opacity-100 pb-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col space-y-1 mt-2">
                  <Link
                    href="/media-converter"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center px-4 py-4 rounded-xl transition-all border-l-[3px] border-transparent hover:bg-white/5 text-[16px] font-sans tracking-[0.1em] font-bold text-white/60 hover:text-white"
                  >
                    Media Converter
                  </Link>
                  <Link
                    href="/careers"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center px-4 py-4 rounded-xl transition-all border-l-[3px] border-transparent hover:bg-white/5 text-[16px] font-sans tracking-[0.1em] font-bold text-white/60 hover:text-white"
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 text-white font-sans font-bold text-[22px] border-l-4 border-transparent pl-2 hover:border-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}