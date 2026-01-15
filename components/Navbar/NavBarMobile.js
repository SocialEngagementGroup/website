"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaPencilAlt,
  FaPencilRuler,
  FaRegHandPointRight,
  FaCameraRetro,
  FaSearch,
  FaGlobeAmericas,
  FaChartBar,
  FaGoogle,
  FaBriefcase,
  FaHeartbeat,
  FaUtensils,
  FaLaptopCode,
} from "react-icons/fa";
import styles from "./NavBarMobile.module.css";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState({
    creative: true,
    digital: false,
    industry: false,
  });

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;

    html.style.height = "100%";
    html.style.overflow = "hidden";

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      const y = Math.abs(parseInt(body.style.top || "0", 10));

      html.style.height = "";
      html.style.overflow = "";

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      body.style.touchAction = "";

      window.scrollTo(0, y);
    };
  }, [isMobileMenuOpen]);

  const handleDropdownToggle = (key) => {
    setOpenDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // avoid sticky animation while menu open (prevents odd movement)
  const effectiveSticky = isSticky && !isMobileMenuOpen;

  return (
    <>
      <nav className={`md:hidden ${styles.navbarShell}`}>
        {/* Inner bar (animates to 95% on sticky via CSS) */}
        <div
          className={`${styles.navbarInner} ${
            effectiveSticky ? styles.stickyInner : ""
          }`}
        >
          <div className="container mx-auto flex justify-between items-center py-2 px-2 md:px-0">
            <Link href="/" className="flex items-center space-x-3 mt-1">
              <div className="relative w-[45px] h-[42px]">
                <Image
                  src="/SiteLogo/seg.png"
                  alt="Site Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="flex space-x-5">
              <a
                href="https://calendly.com/itseg/segmeet"
                target="_blank"
                rel="noopener noreferrer"
                className="Contact-btn border capitalize font-bold font-sans text-[18px] rounded-[14px] cursor-pointer md:py-1.5 pb-1.5 pt-1.5 px-3 md:px-8 transition-all duration-200 ease-out border-white text-black bg-white hover:bg-white/90 active:scale-[0.98]"
              >
                Book a Call
              </a>

              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="text-white z-[1000] transition-transform duration-200 ease-out active:scale-[0.95]"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 4L20 20M20 4L4 20"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M3 6h18M3 12h18M3 18h18"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu panel: fully hidden when closed, slides from right when open */}
        <div
          className={`${styles.menuPanel} ${
            isMobileMenuOpen ? styles.menuPanelOpen : ""
          }`}
        >
          <ul className="space-y-4 p-5 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y">
            <li>
              <Link
                href="/"
                className="text-black text-lg transition-colors duration-200 hover:text-black/70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className={
                  styles.customBorder +
                  " text-black text-lg transition-colors duration-200 hover:text-black/70"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>

            {/* Creative Services Dropdown */}
            <li>
              <button
                className={
                  styles.dropdownButton +
                  " text-black w-full text-left flex justify-between items-center transition-colors duration-200 hover:bg-black/5 rounded-lg px-2 py-2"
                }
                onClick={() => handleDropdownToggle("creative")}
              >
                Creative Services
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    openDropdown.creative ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`grid transition-all bg-[#f4f4f4] rounded-lg duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openDropdown.creative
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className={styles.svgicon + " mt-3 space-y-4"}>
                    <li className="flex items-center">
                      <FaPencilAlt className="mr-2" />
                      <Link
                        href="/services/branding"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Branding
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaPencilRuler className="mr-2" />
                      <Link
                        href="/services/logo-design"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Logo Design
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaRegHandPointRight className="mr-2" />
                      <Link
                        href="/services/content-creation"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Content Creation
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaCameraRetro className="mr-2" />
                      <Link
                        href="/services/social-media-content"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Social Media Content
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaRegHandPointRight className="mr-2" />
                      <Link
                        href="/services/3D-animation-and-rendering"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        3D Animation &amp; Rendering
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaCameraRetro className="mr-2" />
                      <Link
                        href="/services/videography-and-photography"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Videography &amp; Photography
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Digital Services Dropdown */}
            <li>
              <button
                className={
                  styles.dropdownButton +
                  " text-black w-full text-left flex justify-between items-center transition-colors duration-200 hover:bg-black/5 rounded-lg px-2 py-2"
                }
                onClick={() => handleDropdownToggle("digital")}
              >
                Digital Services
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    openDropdown.digital ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`grid bg-[#f4f4f4] rounded-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openDropdown.digital
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className={styles.svgicon + " mt-3 space-y-4"}>
                    <li className="flex items-center">
                      <FaSearch className="mr-2" />
                      <Link
                        href="/services/seo"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        SEO
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaChartBar className="mr-2" />
                      <Link
                        href="/services/ppc-campaigns"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        PPC Campaigns
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaRegHandPointRight className="mr-2" />
                      <Link
                        href="/services/retargeting-and-remarketing"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Retargeting &amp; Remarketing
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaGoogle className="mr-2" />
                      <Link
                        href="/services/google-business-profile-management"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Google Business Profile Management
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaPencilAlt className="mr-2" />
                      <Link
                        href="/services/review-and-reputation-management"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Review &amp; Reputation Management
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaGoogle className="mr-2" />
                      <Link
                        href="/services/google-location-services-ads"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Google Location Services Ads
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaCameraRetro className="mr-2" />
                      <Link
                        href="/services/social-media-marketing"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Social Media Marketing
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaGlobeAmericas className="mr-2" />
                      <Link
                        href="/services/website-development"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Website Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Industry Services Dropdown */}
            <li>
              <button
                className={
                  styles.dropdownButton +
                  " text-black w-full text-left flex justify-between items-center transition-colors duration-200 hover:bg-black/5 rounded-lg px-2 py-2"
                }
                onClick={() => handleDropdownToggle("industry")}
              >
                Industry Services
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    openDropdown.industry ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`grid bg-[#f4f4f4] rounded-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openDropdown.industry
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className={styles.svgicon + " mt-3 space-y-4"}>
                    <li className="flex items-center">
                      <FaBriefcase className="mr-2" />
                      <Link
                        href="/services/solution-for-lawyers"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Solution for Lawyers
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaHeartbeat className="mr-2" />
                      <Link
                        href="/services/solution-for-doctors"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Solution for Doctors
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaUtensils className="mr-2" />
                      <Link
                        href="/services/solution-for-restaurants"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Solution for Restaurants
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FaLaptopCode className="mr-2" />
                      <Link
                        href="/services/solution-for-techstartups"
                        className="text-black transition-colors duration-200 hover:text-black/70"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Solution for Tech Startups
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="text-black text-lg transition-colors duration-200 hover:text-black/70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
//use bg color and fix desing