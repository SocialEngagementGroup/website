"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegHandPointRight, FaPencilAlt, FaCameraRetro, FaGlobeAmericas, FaSearch, FaGoogle, FaPencilRuler, FaChartBar, FaBriefcase, FaHeartbeat, FaUtensils, FaLaptopCode } from "react-icons/fa"; // Importing icons
import styles from './Navbar.module.css';

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
              <Image
                src="/SiteLogo/seg.png"
                alt="Site Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Book a Call + Hamburger */}
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
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 4L20 20M20 4L4 20"
                  />
                ) : (
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M3 6h18M3 14h18"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div
            className={`${isOpen ? "block" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
          >
            <ul
              className={`navlink md:ml-26 flex flex-col md:flex-row md:space-x-10 p-4 md:p-0 border md:border-0 rounded-lg mt-5 md:mt-0 ${isOpen ? "bg-black md:bg-transparent" : ""
                }`}
            >
              {/* Home */}
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition"
                >
                  Home
                </Link>
              </li>

              {/* Services */}

              <li
                className={styles.dropdownScroll + " relative group"}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href="/services"
                  className="py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition flex items-center"
                >
                  Services
                  <svg
                    className={`w-5 h-5 ml-1 mt-2 transition-transform ${servicesOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3" // Increased strokeWidth for bolder icon
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>

                {/* Dropdown */}
                <div
                  className={`absolute md:left-1/2 top-[33px] md:-translate-x-1/2 mt-3 w-full md:w-[900px] bg-black rounded-xl shadow-2xl z-50 ${servicesOpen ? "block" : "hidden"
                    }`}
                >
                  <div className={styles.dropdownContent + " grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-white"}>
                    {/* Creative */}
                    <div className={styles.creative}>
                      <h4
                        className="mb-3 font-semibold uppercase text-black text-sm group-hover:bg-[#e3d3cc] transition-colors p-2 rounded-md"
                      >
                        Creative Services
                      </h4>
                      <ul className={styles.transitionCustom + " space-y-2 text-sm"}>
                        <li className="flex items-center">
                          <FaPencilAlt className="mr-2" />
                          <Link href="/services/branding">Branding</Link>
                        </li>
                        <li className="flex items-center">
                          <FaPencilRuler className="mr-2" />
                          <Link href="/services/logo-design">Logo Design</Link>
                        </li>
                        <li className="flex items-center">
                          <FaRegHandPointRight className="mr-2" />
                          <Link href="/services/content-creation">Content Creation</Link>
                        </li>
                        <li className="flex items-center">
                          <FaCameraRetro className="mr-2" />
                          <Link href="/services/social-media-content">Social Media Content</Link>
                        </li>
                        <li className="flex items-center">
                          <FaRegHandPointRight className="mr-2" />
                          <Link href="/services/3D-animation-&-rendering">3D Animation & Rendering</Link>
                        </li>
                        <li className="flex items-center">
                          <FaCameraRetro className="mr-2" />
                          <Link href="/services/videography-&-photography">Videography & Photography</Link>
                        </li>
                      </ul>
                    </div>

                    {/* Digital */}
                    <div className={styles.digital}>
                      <h4
                        className="mb-3 font-semibold uppercase text-black text-sm group-hover:bg-[#e3d3cc] transition-colors p-2 rounded-md"
                      >
                        Digital Services
                      </h4>
                      <ul className={styles.transitionCustom + " space-y-2 text-sm"}>
                        <li className="flex items-center">
                          <FaSearch className="mr-2" />
                          <Link href="/services/seo">SEO</Link>
                        </li>
                        <li className="flex items-center">
                          <FaChartBar className="mr-2" />
                          <Link href="/services/ppc-campaigns">PPC Campaigns</Link>
                        </li>
                        <li className="flex items-center">
                          <FaRegHandPointRight className="mr-2" />
                          <Link href="/services/retargeting-&-remarketing">Retargeting & Remarketing</Link>
                        </li>
                        <li className="flex items-center">
                          <FaGoogle className="mr-2" />
                          <Link href="/services/google-business-profile-management">Google Business Profile Management</Link>
                        </li>
                        <li className="flex items-center">
                          <FaPencilAlt className="mr-2" />
                          <Link href="/services/review-&-reputation-management">Review and Reputation Management</Link>
                        </li>
                        <li className="flex items-center">
                          <FaGoogle className="mr-2" />
                          <Link href="/services/google-location-services-ads">Google Location Services Ads</Link>
                        </li>
                        <li className="flex items-center">
                          <FaCameraRetro className="mr-2" />
                          <Link href="/services/social-media-marketing">Social Media Marketing</Link>
                        </li>
                        <li className="flex items-center">
                          <FaGlobeAmericas className="mr-2" />
                          <Link href="/services/website-development">Website Development</Link>
                        </li>
                      </ul>
                    </div>

                    {/* Industry */}
                    <div className={styles.industry}>
                      <h4 className="mb-3 font-semibold uppercase text-black text-sm group-hover:bg-[#e3d3cc] transition-colors p-2 rounded-md">
                        Industry Services
                      </h4>
                      <ul className={styles.transitionCustom + " space-y-2 text-sm"}>
                        <li className="flex items-center">
                          <FaBriefcase className="mr-2" /> {/* Icon for lawyers */}
                          <Link href="/services/solution-for-lawyers">Solution for Lawyers</Link>
                        </li>
                        <li className="flex items-center">
                          <FaHeartbeat className="mr-2" /> {/* Icon for doctors */}
                          <Link href="/services/solution-for-doctors">Solution for Doctors</Link>
                        </li>
                        <li className="flex items-center">
                          <FaUtensils className="mr-2" /> {/* Icon for restaurants */}
                          <Link href="/services/solution-for-restaurants">Solution for Restaurants</Link>
                        </li>
                        <li className="flex items-center">
                          <FaLaptopCode className="mr-2" /> {/* Icon for tech startups */}
                          <Link href="/services/solution-for-techstartups">Solution for Tech Startups</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* Contact */}
              <li>
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition"
                >
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

