import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Creative: [
      { name: "Branding", href: "/services/branding" },
      { name: "Logo Design", href: "/services/logo-design" },
      { name: "Content Creation", href: "/services/content-creation" },
      { name: "Social Media Content", href: "/services/social-media-content" },
      { name: "3D Animation & Rendering", href: "/services/3D-animation-and-rendering" },
      { name: "Videography & Photography", href: "/services/videography-and-photography" },
    ],
    Digital: [
      { name: "Search Engine Optimization", href: "/services/seo" },
      { name: "PPC Campaigns", href: "/services/ppc-campaigns" },
      { name: "Retargeting & Remarketing", href: "/services/retargeting-and-remarketing" },
      {
        name: "Google Business Profile Management",
        href: "/services/google-business-profile-management",
      },
      {
        name: "Review & Reputation Management",
        href: "/services/review-and-reputation-management",
      },
      { name: "Google Location Services Ads", href: "/services/google-location-services-ads" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
      { name: "Website Development", href: "/services/website-development" },
    ],
    Industry: [
      { name: "Solution For Lawyers", href: "/services/solution-for-lawyers" },
      { name: "Solution For Doctors", href: "/services/solution-for-doctors" },
      { name: "Solution For Restaurants", href: "/services/solution-for-restaurants" },
      { name: "Solution For Tech Startups", href: "/services/solution-for-techstartups" },
    ],
    Company: [
      { name: "About Us", href: "/#aboutUs" },
      { name: "Services", href: "/services" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Careers", href: "https://digital.socialengagementgroup.com/careers" },
    ],
  };

  return (
    <div className="text-white pt-20 pb-10 font-sans">
      <div className="container-fluid w-[90%] mx-auto">
        {/* Main Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-white/10 px-4 md:px-0">
          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 cursor-pointer">
              <Image
                src="/SiteLogo/logo.svg"
                alt="Social Engagement Group"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <span className="font-sans font-bold text-[14px] tracking-widest uppercase text-white">
                Social Engagement Group
              </span>
            </Link>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4 text-center md:text-left">
              <h4 className="!text-[16px] md:!text-[14px] font-bold text-white tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-3 md:space-y-2.5 p-0 list-none">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-[16px] md:text-[14px] block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 px-4 md:px-0">
          <div className="text-gray-500 text-[14px] md:text-[13px] order-3 md:order-1">
            All rights reserved © 2026
          </div>

          {/* Legal Links (Bottom Middle) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6 text-gray-500 text-[14px] md:text-[13px] order-2 md:order-2 tracking-widest uppercase md:normal-case">
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookies
            </Link>
            <Link
              href="/legal-notice"
              className="hover:text-white transition-colors"
            >
              Legal Notice
            </Link>
          </div>

          {/* Social Icons (Far Right) */}
          <div className="flex gap-4 order-1 md:order-3">
            <Link
              href="https://www.instagram.com/socialengagementgroup"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border-brand-brick text-white hover:scale-110 transition-all duration-300"
              style={{ backgroundColor: "#975554" }}
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/social-engagement-group"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border-brand-brick text-white hover:scale-110 transition-all duration-300"
              style={{ backgroundColor: "#975554" }}
            >
              <FaLinkedinIn size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/seg.socialengagementgroup/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border-brand-brick text-white hover:scale-110 transition-all duration-300"
              style={{ backgroundColor: "#975554" }}
            >
              <FaFacebookF size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
