



"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegHandPointRight, FaPencilAlt, FaCameraRetro, FaGlobeAmericas,
  FaSearch, FaGoogle, FaPencilRuler, FaChartBar, FaBriefcase,
  FaHeartbeat, FaUtensils, FaLaptopCode
} from "react-icons/fa";
import styles from './Navbar.module.css';

// Component for each Service Category
const ServiceColumn = ({ title, icon: WatermarkIcon, children }) => (
  <div className="relative group overflow-hidden p-6 rounded-xl transition-all duration-500 ease-in-out hover:bg-[#e3d3cc] min-h-[350px]">
    {/* Floating Watermark Icon */}
    <div className="absolute -right-6 -bottom-6 text-white/5 pointer-events-none transition-all duration-700 opacity-0 group-hover:opacity-20 group-hover:text-black">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <WatermarkIcon size={160} />
      </motion.div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h4 className="mb-5 font-bold uppercase text-white group-hover:text-black text-xs tracking-[0.2em] border-b border-white/10 group-hover:border-black/10 pb-2 transition-colors duration-300">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-gray-300 group-hover:text-black transition-colors duration-300">
        {children}
      </ul>
    </div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 mx-auto z-[999] transition-all duration-500 global-navbar ${isSticky
        ? "bg-glass shadow-md w-[91%] top-[20px] py-3 rounded-2xl px-2 sm:px-5"
        : "bg-transparent w-full top-0 py-5 px-3 sm:px-22"
        }`}
    >
      <div className="container-fluid mx-auto transition-all duration-500">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-[45px] h-[42px] md:w-[60px] md:h-[42px]">
              <Image src="/SiteLogo/seg.png" alt="Site Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Buttons */}
          <div className="flex md:order-2 items-center">
            <a
              href="https://calendly.com/itseg/segmeet"
              target="_blank"
              rel="noopener noreferrer"
              className={`Contact-btn border capitalize font-bold font-sans text-[18px] rounded-[14px] cursor-pointer md:py-1.5 pb-1.5 pt-1.5 px-3 md:px-8 transition ${isSticky
                ? "border-white text-black bg-white"
                : "border-white text-white md:bg-white md:text-black hover:bg-white hover:text-black"
                }`}
            >
              Book a Call
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center w-10 h-10 justify-center text-sm text-white md:hidden focus:outline-none ml-3"
            >
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4L20 20M20 4L4 20" />
                ) : (
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 6h18M3 14h18" />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}>
            <ul className={`navlink md:ml-26 flex flex-col md:flex-row md:space-x-10 p-4 md:p-0 border md:border-0 rounded-lg mt-5 md:mt-0 ${isOpen ? "bg-black md:bg-transparent" : ""}`}>
              <li>
                <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition">
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition flex items-center"
                >
                  Services
                  <svg
                    className={`w-5 h-5 ml-1 mt-2 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.98 }}
                      className="absolute md:left-1/2 top-[45px] md:-translate-x-1/2 w-full md:w-[1000px] border border-white/10 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] z-50 overflow-hidden"
                    >
                      <div className={styles.servicesGrid + " grid grid-cols-1 md:grid-cols-3 gap-2 p-4"}>
                        
                        {/* 1. CREATIVE SERVICES (All items kept) */}
                        <ServiceColumn className={styles.innerBox} title="Creative Services" icon={FaPencilRuler}>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaPencilAlt  className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/branding">Branding</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaPencilRuler className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/logo-design">Logo Design</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaRegHandPointRight className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/content-creation">Content Creation</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaCameraRetro className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/social-media-content">Social Media Content</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaRegHandPointRight className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/3D-animation-&-rendering">3D Animation & Rendering</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaCameraRetro className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/videography-&-photography">Videography & Photography</Link>
                          </li>
                        </ServiceColumn>

                        {/* 2. DIGITAL SERVICES (All items kept) */}
                        <ServiceColumn className={styles.innerBox}  title="Digital Services" icon={FaGlobeAmericas}>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaSearch className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/seo">SEO</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaChartBar className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/ppc-campaigns">PPC Campaigns</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaRegHandPointRight className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/retargeting-&-remarketing">Retargeting & Remarketing</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaGoogle className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/google-business-profile-management">Google Business Profile</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaPencilAlt className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/review-&-reputation-management">Reputation Management</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaGoogle className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/google-location-services-ads">Google Location Ads</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaCameraRetro className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/social-media-marketing">Social Media Marketing</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaGlobeAmericas className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/website-development">Website Development</Link>
                          </li>
                        </ServiceColumn>

                        {/* 3. INDUSTRY SERVICES (All items kept) */}
                        <ServiceColumn className={styles.innerBox}  title="Industry Solutions" icon={FaBriefcase}>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaBriefcase className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/solution-for-lawyers">Solution for Lawyers</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaHeartbeat className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/solution-for-doctors">Solution for Doctors</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaUtensils className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/solution-for-restaurants">Solution for Restaurants</Link>
                          </li>
                          <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item cursor-pointer">
                            <FaLaptopCode className="mr-2 text-[#e3d3cc] group-hover:text-black" />
                            <Link href="/services/solution-for-techstartups">Solution for Tech Startups</Link>
                          </li>
                        </ServiceColumn>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link href="/contact-us" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}