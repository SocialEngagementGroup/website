"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky navbar scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    handleScroll(); // initial call
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 mx-auto z-[999] transition-all duration-500 ${
        isSticky
          ? "bg-black shadow-md w-[91%] top-[20px] py-3 rounded-2xl px-2 sm:px-5"
          : "bg-transparent w-full top-0 py-5 px-3 sm:px-22"
      }`}
    >
      <div
        className={`container-fluid mx-auto  transition-all duration-500`}
      >
        <div className="flex flex-wrap items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="relative w-[45px] h-[45px] md:w-[60px] md:h-[60px]">
              <Image
                src="/SiteLogo/seg.png"
                alt="Site Logo"
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Contact + Hamburger */}
          <div className="flex md:order-2 items-center">
            <button
              onClick={() => (window.location.href = "#")}
              className={`border font-bold font-sans text-[18px] rounded-[14px] cursor-pointer md:py-1.5 pb-1.5 pt-1.5 px-3 md:px-8 transition
                ${
                  isSticky
                    ? "border-white text-white"
                    : "border-white text-white md:bg-white md:text-black hover:bg-white hover:text-black"
                }
              `}
            >
              Contact Us
            </button>

            {/* Hamburger */}
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

          {/* Menu Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1 items-center justify-between transition-all duration-500 md:bg-transparent`}
          >
            <ul
              className={`navlink flex flex-col p-4 md:p-0 border border-gray-700 md:border-0 rounded-lg md:flex-row md:space-x-10 md:mt-0 mt-5 
              ${isOpen ? "bg-black md:bg-transparent" : "bg-transparent"}`}
            >
              {[
                "Home",
                "About",
                "Services",
                "Industries",
                "Case Studies",
                "Insights",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
