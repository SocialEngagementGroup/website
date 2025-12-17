"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu toggle
  const [servicesOpen, setServicesOpen] = useState(false); // Services dropdown toggle
  const [isSticky, setIsSticky] = useState(false); // Sticky navbar on scroll

  // ---------- Sticky navbar scroll logic ----------
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
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

          {/* ---------- Logo ---------- */}
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

          {/* ---------- Contact Button + Hamburger ---------- */}
          <div className="flex md:order-2 items-center">
            <button
              onClick={() => (window.location.href = "/contact-us")}
              className={`Contact-btn border font-bold font-sans text-[18px] rounded-[14px] cursor-pointer md:py-1.5 pb-1.5 pt-1.5 px-3 md:px-8 transition ${
                isSticky
                  ? "border-white text-black bg-white"
                  : "border-white text-white md:bg-white md:text-black hover:bg-white hover:text-black"
              }`}
            >
              Contact Us
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center w-10 h-10 justify-center text-sm text-white md:hidden focus:outline-none ml-3"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-7 h-7"
                aria-hidden="true"
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

          {/* ---------- Navigation Links ---------- */}
          <div
            className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1 items-center justify-between transition-all duration-500 md:bg-transparent`}
          >
            <ul
              className={`navlink md:ml-26 ml-0 flex flex-col p-4 md:p-0 border border-gray-700 md:border-0 rounded-lg md:flex-row md:space-x-10 md:mt-0 mt-5 ${isOpen ? "bg-black md:bg-transparent" : "bg-transparent"
                }`}
            >
              {/* Home */}
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition"
                >
                  Home
                </a>
              </li>

              {/* ---------- Services Dropdown ---------- */}
              {/* ---------- Services Dropdown ---------- */}
<li className="relative">
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="py-2 px-3 text-white font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition flex items-center"
    style={{ lineHeight: '1.2rem' }}
  >
    Services
    <svg className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {/* Dropdown */}
  <div
    className={`
      absolute md:left-1/2 md:-translate-x-1/2 mt-3
      w-full md:w-[900px]
      ${servicesOpen ? "block" : "hidden"}
      md:group-hover:block
      bg-black rounded-xl shadow-2xl z-50
    `}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-white">

      {/* Creative Services */}
      <div>
        <h4 className="mb-3 font-semibold uppercase text-gray-300 text-sm">
          Creative Services
        </h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="/services/3D-animation-&-rendering" onClick={() => setIsOpen(false)}>3D Animation & Rendering</Link></li>
          <li><Link href="/services/branding">Branding</Link></li>
          <li><Link href="/services/content-creation">Content Creation</Link></li>
          <li><Link href="/services/logo-design">Logo Design</Link></li>
          <li><Link href="/services/social-media-content">Social Media Content</Link></li>
          <li><Link href="/services/videography-&-photography">Videography & Photography</Link></li>
        </ul>
      </div>

      {/* Digital Services */}
      <div>
        <h4 className="mb-3 font-semibold uppercase text-gray-300 text-sm">
          Digital Services
        </h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="/services/google-business-profile-management">Google Business Profile Management</Link></li>
          <li><Link href="/services/google-location-services-ads">Google Location Services Ads</Link></li>
          <li><Link href="/services/ppc-campaigns">PPC Campaigns</Link></li>
          <li><Link href="/services/retargeting-&-remarketing">Retargeting & Remarketing</Link></li>
          <li><Link href="/services/review-and-reputation-management">Review & Reputation Management</Link></li>
          <li><Link href="/services/seo">SEO</Link></li>
          <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
          <li><Link href="/services/website-development">Website Development</Link></li>
        </ul>
      </div>

    </div>
  </div>
</li>


              {/* Clients */}
              <li>
                <a
                  href="#clients"
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition"
                >
                  Clients
                </a>
              </li>

              {/* About Us */}
              <li>
                <a
                  href="#aboutUs"
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
