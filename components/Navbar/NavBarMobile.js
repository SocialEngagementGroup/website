"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { FaPencilAlt, FaPencilRuler, FaRegHandPointRight, FaCameraRetro, FaSearch, FaGlobeAmericas, FaChartBar, FaGoogle, FaBriefcase, FaHeartbeat, FaUtensils, FaLaptopCode } from "react-icons/fa";
import styles from './NavBarMobile.module.css';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(1); // Set to 1 to open the first dropdown (Creative Services) by default

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (dropdownId) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(0); // Close the dropdown if the same one is clicked again
    } else {
      setOpenDropdown(dropdownId); // Open the clicked dropdown
    }
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav
        className={`md:hidden fixed top-0 right-0 w-full z-[999] bg-black ${isMobileMenuOpen ? "h-full" : "h-[65px]"} transition-all duration-500`}
      >
        <div className="container mx-auto flex justify-between items-center py-2 px-2 md:px-0 ">
          {/* Logo */}
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
            {/* Contact Us Button */}
            <a
              href="https://calendly.com/itseg/segmeet"
              target="_blank"
              rel="noopener noreferrer"
              className={`Contact-btn border capitalize font-bold font-sans text-[18px] rounded-[14px] cursor-pointer md:py-1.5 pb-1.5 pt-1.5 px-3 md:px-8 transition border-white text-black bg-white`}
            >
              Book a Call
            </a>

            {/* Burger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white z-[1000]" // Ensuring the button is on top of other elements
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

        {/* Menu Items */}
        <div
          className={`transition-all duration-500 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-full mt-15 h-full bg-white z-[999]`}
        >
          <ul className="space-y-4 p-5">
            <li>
              <Link href="/" className="text-black text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.customBorder + " text-black text-lg"} onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
            </li>

            {/* Creative Services Dropdown */}
            <li>
              <button className={styles.dropdownButton + " text-black w-full text-left flex justify-between items-center"} onClick={() => handleDropdownToggle(1)}>
                Creative Services
                <svg
                  className={`w-5 h-5 ml-2 transition-transform ${openDropdown === 1 ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 1 && (
                <ul className={styles.svgicon + " space-y-4"}>
                  <li className="flex items-center">
                    <FaPencilAlt className="mr-2" />
                    <Link href="/services/branding" onClick={() => setIsMobileMenuOpen(false)}>
                      Branding
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaPencilRuler className="mr-2" />
                    <Link href="/services/logo-design" onClick={() => setIsMobileMenuOpen(false)}>
                      Logo Design
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaRegHandPointRight className="mr-2" />
                    <Link href="/services/content-creation" onClick={() => setIsMobileMenuOpen(false)}>
                      Content Creation
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaCameraRetro className="mr-2" />
                    <Link href="/services/social-media-content" onClick={() => setIsMobileMenuOpen(false)}>
                      Social Media Content
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaRegHandPointRight className="mr-2" />
                    <Link href="/services/3D-animation-and-rendering" onClick={() => setIsMobileMenuOpen(false)}>
                      3D Animation & Rendering
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaCameraRetro className="mr-2" />
                    <Link href="/services/videography-and-photography" onClick={() => setIsMobileMenuOpen(false)}>
                      Videography & Photography
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Digital Services Dropdown */}
            <li>
              <button className={styles.dropdownButton + " text-black w-full text-left flex justify-between items-center"} onClick={() => handleDropdownToggle(2)}>
                Digital Services
                <svg
                  className={`w-5 h-5 ml-2 transition-transform ${openDropdown === 2 ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 2 && (
                <ul className={styles.svgicon + " space-y-4"}>
                  <li className="flex items-center">
                    <FaSearch className="mr-2" />
                    <Link href="/services/seo" onClick={() => setIsMobileMenuOpen(false)}>
                      SEO
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaChartBar className="mr-2" />
                    <Link href="/services/ppc-campaigns" onClick={() => setIsMobileMenuOpen(false)}>
                      PPC Campaigns
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaRegHandPointRight className="mr-2" />
                    <Link href="/services/retargeting-and-remarketing" onClick={() => setIsMobileMenuOpen(false)}>
                      Retargeting & Remarketing
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaGoogle className="mr-2" />
                    <Link href="/services/google-business-profile-management" onClick={() => setIsMobileMenuOpen(false)}>
                      Google Business Profile Management
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaPencilAlt className="mr-2" />
                    <Link href="/services/review-and-reputation-management" onClick={() => setIsMobileMenuOpen(false)}>
                      Review & Reputation Management
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaGoogle className="mr-2" />
                    <Link href="/services/google-location-services-ads" onClick={() => setIsMobileMenuOpen(false)}>
                      Google Location Services Ads
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaCameraRetro className="mr-2" />
                    <Link href="/services/social-media-marketing" onClick={() => setIsMobileMenuOpen(false)}>
                      Social Media Marketing
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaGlobeAmericas className="mr-2" />
                    <Link href="/services/website-development" onClick={() => setIsMobileMenuOpen(false)}>
                      Website Development
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Industry Services Dropdown */}
            <li>
              <button className={styles.dropdownButton + " text-black w-full text-left flex justify-between items-center"} onClick={() => handleDropdownToggle(3)}>
                Industry Services
                <svg
                  className={`w-5 h-5 ml-2 transition-transform ${openDropdown === 3 ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 3 && (
                <ul className={styles.svgicon + " space-y-4"}>
                  <li className="flex items-center">
                    <FaBriefcase className="mr-2" />
                    <Link href="/services/solution-for-lawyers" onClick={() => setIsMobileMenuOpen(false)}>
                      Solution for Lawyers
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaHeartbeat className="mr-2" />
                    <Link href="/services/solution-for-doctors" onClick={() => setIsMobileMenuOpen(false)}>
                      Solution for Doctors
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaUtensils className="mr-2" />
                    <Link href="/services/solution-for-restaurants" onClick={() => setIsMobileMenuOpen(false)}>
                      Solution for Restaurants
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaLaptopCode className="mr-2" />
                    <Link href="/services/solution-for-techstartups" onClick={() => setIsMobileMenuOpen(false)}>
                      Solution for Tech Startups
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
