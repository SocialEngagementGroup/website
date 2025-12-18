"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      className={`fixed inset-x-0 mx-auto z-[999] transition-all duration-500 global-navbar ${
        isSticky
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
              className={`Contact-btn border font-bold font-sans text-[18px] rounded-[14px] cursor-pointer md:py-1.5 pb-1.5 pt-1.5 px-3 md:px-8 transition ${
                isSticky
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
                  className="block py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition"
                >
                  Home
                </Link>
              </li>

              {/* Services */}
              <li className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition flex items-center"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute md:left-1/2 md:-translate-x-1/2 mt-3 w-full md:w-[900px] bg-black rounded-xl shadow-2xl z-50 ${
                    servicesOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-white">
                    {/* Creative */}
                    <div>
                      <h4 className="mb-3 font-semibold uppercase text-gray-300 text-sm">
                        Creative Services
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/services/branding">Branding</Link></li>
                        <li><Link href="/services/logo-design">Logo Design</Link></li>
                        <li><Link href="/services/content-creation">Content Creation</Link></li>
                        <li><Link href="/services/social-media-content">Social Media Content</Link></li>
                        <li><Link href="/services/3D-animation-&-rendering">3D Animation & Rendering</Link></li>
                        <li><Link href="/services/videography-&-photography">Videography & Photography</Link></li>
                      </ul>
                    </div>

                    {/* Digital */}
                    <div>
                      <h4 className="mb-3 font-semibold uppercase text-gray-300 text-sm">
                        Digital Services
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/services/seo">SEO</Link></li>
                        <li><Link href="/services/ppc-campaigns">PPC Campaigns</Link></li>
                        <li><Link href="/services/retargeting-&-remarketing">Retargeting & Remarketing</Link></li>
                        <li><Link href="/services/google-business-profile-management">Google Business Profile Management</Link></li>
                        <li><Link href="/services/review-and-reputation-management">Review and Reputation Management</Link></li>
                        <li><Link href="/services/google-location-services-ads">Google Location Services Ads</Link></li>
                        <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
                        <li><Link href="/services/website-development">Website Development</Link></li>
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
