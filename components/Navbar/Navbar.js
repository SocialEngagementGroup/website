"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projectsData";
import { Phone } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  // Pages with a light background need dark navbar text when not scrolled
  const isCareersPage =
    pathname.startsWith("/careers") || pathname.startsWith("/blog");
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Creative");

  // On careers pages (light bg), use dark text when not scrolled
  const useDarkText = isCareersPage && !isSticky;

  // Create refs for the dropdown and button
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Close the dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`md:block hidden fixed top-0 left-0 w-full z-[999] transition-all duration-500 global-navbar border-b ${
        isSticky
          ? "bg-[#0f0f0f] border-white/10 py-3 px-3 sm:px-22"
          : "bg-transparent border-transparent py-5 px-3 sm:px-22"
      }`}
    >
      <div className="container-fluid mx-auto transition-all duration-500 max-lg:px-[15px]">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="relative w-[45px] h-[42px] md:w-[60px] md:h-[42px]">
              <Image
                src="/assets/images/site-logo/logo.svg"
                alt="Site Logo"
                fill
                className={`object-contain brightness-0 ${useDarkText ? '' : 'invert'}`}
              />
            </div>
          </Link>

          {/* Book a Call + Hamburger */}
          <div className="flex md:order-2 items-center">
            <a
              href="https://calendly.com/itseg/segmeet"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#975554] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-sans font-bold text-[16px] md:text-[18px] transition-all hover:bg-white hover:text-[#975554] border border-[#975554]"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span>Book a Call</span>
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
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul
              className={`navlink md:ml-26 flex flex-col md:flex-row md:space-x-10 p-4 md:p-0 border md:border-0 rounded-lg mt-5 md:mt-0 ${
                isOpen ? "bg-black md:bg-transparent" : ""
              }`}
            >
              {/* Home */}
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 font-sans font-bold text-[16px] md:text-[20px] transition cursor-pointer ${useDarkText ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}
                >
                  Home
                </Link>
              </li>

              {/* Services */}
              <li
                className={"relative group"}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => {
                  setServicesOpen(false);
                  setActiveCategory("Creative");
                }}
              >
                <Link
                  href="/services"
                  className={`py-2 px-3 font-sans font-bold text-[16px] md:text-[20px] transition flex items-center cursor-pointer ${useDarkText ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}
                >
                  Services
                  <svg
                    className={`w-5 h-5 ml-1 mt-1 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
                </Link>

                {/* Two-Panel Dropdown Wrapper (Desktop) */}
                <div
                  className={`hidden md:block absolute left-0 top-full transition-all duration-300 ${
                    isSticky ? "pt-2" : isHomePage ? "pt-4" : "pt-3"
                  } ${
                    servicesOpen
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none translate-y-[-10px]"
                  }`}
                >
                  <div
                    ref={dropdownRef}
                    className={`${
                      activeCategory ? "w-[660px]" : "w-[260px]"
                    } bg-[#0f0f0f] text-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-50 overflow-hidden transition-[width,height] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top`}
                  >
                    <div className="flex items-stretch w-[660px]">
                      {/* Left Panel - Categories */}
                      <div className="w-[260px] py-4 flex-shrink-0 flex flex-col justify-start">
                        {projects.map((item) => (
                          <div
                            key={item.title}
                            className={`px-8 h-[56px] cursor-pointer flex items-center justify-between transition-colors duration-200 ${
                              activeCategory === item.title
                                ? "bg-white/5 border-l-[3px] border-white"
                                : "border-l-[3px] border-transparent hover:bg-white/5"
                            }`}
                            onMouseEnter={() => setActiveCategory(item.title)}
                          >
                            <span
                              className={`text-[16px] font-sans capitalize tracking-[0.1em] font-bold ${
                                activeCategory === item.title
                                  ? "text-white"
                                  : "text-white/60"
                              }`}
                            >
                              {item.title}
                            </span>
                            {/* Only show chevron if active */}
                            {activeCategory === item.title && (
                              <svg
                                className="w-[14px] h-[14px] text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Right Panel - Service Links */}
                      <div
                        className={`flex-1 py-4 transition-opacity duration-300 delay-100 ${
                          activeCategory ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {projects.map((item) => (
                          <div
                            key={item.title}
                            className={`${
                              activeCategory === item.title
                                ? "flex flex-col"
                                : "hidden"
                            }`}
                          >
                            {item.sliderData.map((service) => (
                              <Link
                                key={service.name}
                                href={service.link}
                                className="group/item flex items-center px-8 h-[56px] text-white/60 hover:text-white hover:bg-white/5 border-l-[3px] border-transparent hover:border-white transition-all duration-300"
                              >
                                <span className="text-[17px] font-medium">
                                  {service.name}
                                </span>
                                <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-2 group-hover/item:translate-x-0">
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Resources */}
              <li
                className={"relative group"}
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <div
                  className={`py-2 px-3 font-sans font-bold text-[16px] md:text-[20px] transition flex items-center cursor-pointer ${useDarkText ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}
                >
                  Resources
                  <svg
                    className={`w-5 h-5 ml-1 mt-1 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
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
                </div>

                <div
                  className={`absolute left-0 top-full transition-all duration-300 ${
                    isSticky ? "pt-2" : isHomePage ? "pt-4" : "pt-3"
                  } ${
                    resourcesOpen
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none translate-y-[-10px]"
                  }`}
                >
                  <div className="w-[260px] bg-[#0f0f0f] text-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-50 overflow-hidden py-4">
                    <Link
                      href="/blog"
                      onClick={() => setIsOpen(false)}
                      className="group/item flex items-center px-8 h-[56px] text-white/60 hover:text-white hover:bg-white/5 border-l-[3px] border-transparent hover:border-white transition-all duration-300"
                    >
                      <span className="text-[17px] font-medium">Blog</span>
                      <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-2 group-hover/item:translate-x-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                    <Link
                      href="/careers"
                      onClick={() => setIsOpen(false)}
                      className="group/item flex items-center px-8 h-[56px] text-white/60 hover:text-white hover:bg-white/5 border-l-[3px] border-transparent hover:border-white transition-all duration-300"
                    >
                      <span className="text-[17px] font-medium">Careers</span>
                      <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-2 group-hover/item:translate-x-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>

              {/* Contact */}
              <li>
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 font-sans font-bold text-[16px] md:text-[20px] transition cursor-pointer ${useDarkText ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}
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
