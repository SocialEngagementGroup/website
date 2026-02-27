"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react"; // Import useRef
import Link from "next/link";
import { FaRegHandPointRight, FaPencilAlt, FaCameraRetro, FaGlobeAmericas, FaSearch, FaGoogle, FaPencilRuler, FaChartBar, FaBriefcase, FaHeartbeat, FaUtensils, FaLaptopCode } from "react-icons/fa"; // Importing icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Create refs for the dropdown and button
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    // Close the dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`md:block hidden fixed inset-x-0 mx-auto z-[999] transition-all duration-500 global-navbar ${isSticky
        ? "bg-glass shadow-md w-[91%] top-[20px] py-3 rounded-2xl px-2 sm:px-5"
        : "bg-transparent w-full top-0 py-5 px-3 sm:px-22"
        }`}
    >
      <div className="container-fluid mx-auto transition-all duration-500 max-lg:px-[15px]">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
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
              className={`Contact-btn border capitalize font-bold font-sans text-[18px] rounded-[14px] cursor-pointer md:py-1.5 pb-1.5 pt-1.5 px-3 md:px-8 transition max-md:py-[0.2rem] ${isSticky
                ? "border-white text-black bg-white"
                : "border-white text-white md:bg-white md:text-black hover:bg-white hover:text-black"
                }`}
            >
              Book a Call
            </a>

            <button
              ref={buttonRef} // Assign ref to button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center w-10 h-10 justify-center text-sm text-white md:hidden focus:outline-none ml-3 cursor-pointer"
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
                  className="block py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition cursor-pointer"
                >
                  Home
                </Link>
              </li>

              {/* Services */}
              <li
                className={"relative group md:hover:block block max-md:max-h-[300px] max-md:overflow-y-auto"}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href="/services"
                  className="py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition flex items-center cursor-pointer"
                >
                  Services
                  <svg
                    className={`w-5 h-5 ml-1 mt-2 transition-transform ${servicesOpen ? "rotate-180" : ""
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
                </a>

                {/* Dropdown */}
                <div
                  ref={dropdownRef} // Assign ref to dropdown
                  className={`dropdown absolute md:left-1/2 top-[33px] md:-translate-x-1/2 mt-3 w-full md:w-[900px] bg-black rounded-xl shadow-2xl z-50 group-hover:block transition-all ${servicesOpen ? "block" : "hidden md:hidden"
                    }`}
                >
                  <div className={"grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-white"}>
                    {/* Creative */}
                    <div>
                      <h4
                        className="mb-3 font-semibold uppercase text-black text-sm group-hover:bg-[#e3d3cc]/80 bg-[#e3d3cc] transition-colors p-2 rounded-md"
                      >
                        Creative Services
                      </h4>
                      <ul className={"space-y-2 text-sm m-0 p-0"}>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaPencilAlt className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/branding" className="cursor-pointer">Branding</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaPencilRuler className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/logo-design" className="cursor-pointer">Logo Design</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaRegHandPointRight className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/content-creation" className="cursor-pointer">Content Creation</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaCameraRetro className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/social-media-content" className="cursor-pointer">Social Media Content</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaRegHandPointRight className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/3D-animation-and-rendering" className="cursor-pointer">3D Animation & Rendering</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaCameraRetro className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/videography-and-photography" className="cursor-pointer">Videography & Photography</Link>
                        </li>
                      </ul>
                    </div>

                    {/* Digital */}
                    <div>
                      <h4
                        className="mb-3 font-semibold uppercase text-black text-sm group-hover:bg-[#e3d3cc]/80 bg-[#e3d3cc] transition-colors p-2 rounded-md"
                      >
                        Digital Services
                      </h4>
                      <ul className={"space-y-2 text-sm m-0 p-0"}>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaSearch className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/seo" className="cursor-pointer">SEO</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaChartBar className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/ppc-campaigns" className="cursor-pointer">PPC Campaigns</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaRegHandPointRight className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/retargeting-and-remarketing" className="cursor-pointer">Retargeting & Remarketing</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaGoogle className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/google-business-profile-management" className="cursor-pointer">Google Business Profile Management</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaPencilAlt className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/review-and-reputation-management" className="cursor-pointer">Review & Reputation Management</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaGoogle className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/google-location-services-ads" className="cursor-pointer">Google Location Services Ads</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaCameraRetro className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/social-media-marketing" className="cursor-pointer">Social Media Marketing</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaGlobeAmericas className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/website-development" className="cursor-pointer">Website Development</Link>
                        </li>
                      </ul>
                    </div>

                    {/* Industry */}
                    <div>
                      <h4 className="mb-3 font-semibold uppercase text-black text-sm group-hover:bg-[#e3d3cc]/80 bg-[#e3d3cc] transition-colors p-2 rounded-md">
                        Industry Services
                      </h4>
                      <ul className={"space-y-2 text-sm m-0 p-0"}>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaBriefcase className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/solution-for-lawyers" className="cursor-pointer">Solution for Lawyers</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaHeartbeat className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/solution-for-doctors" className="cursor-pointer">Solution for Doctors</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaUtensils className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/solution-for-restaurants" className="cursor-pointer">Solution for Restaurants</Link>
                        </li>
                        <li className="flex items-center py-2 border-b border-transparent hover:border-[#e3d3cc] hover:text-white hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                          <FaLaptopCode className="mr-2 transition-all duration-300 group-hover/item:text-[#e3d3cc] group-hover/item:rotate-180" />
                          <Link href="/services/solution-for-techstartups" className="cursor-pointer">Solution for Tech Startups</Link>
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
                  className="block py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition cursor-pointer"
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