import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Newsletter from "@/components/Footer/Newsletter";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Media Converter", href: "/media-converter" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact-us" },
    ],
    Creative: [
      { name: "Branding", href: "/services/branding" },
      { name: "Logo Design", href: "/services/logo-design" },
      { name: "Content Creation", href: "/services/content-creation" },
      { name: "Social Media Content", href: "/services/social-media-content" },
      { name: "3D Animation & Rendering", href: "/services/3D-animation-and-rendering" },
      { name: "Videography & Photography", href: "/services/videography-and-photography" },
    ],
    Digital: [
      { name: "SEO", href: "/services/seo" },
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
      { name: "Solution for Lawyers", href: "/services/solution-for-lawyers" },
      { name: "Solution for Doctors", href: "/services/solution-for-doctors" },
      { name: "Solution for Restaurants", href: "/services/solution-for-restaurants" },
      { name: "Solution for Tech Startups", href: "/services/solution-for-techstartups" },
      { name: "Solution for Jewelers", href: "/services/solution-for-jewelers" },
    ],
    Technology: [
      { name: "AI Automation", href: "/services/ai-automation-for-business-growth" },
      { name: "Cloud Modernization", href: "/services/cloud-modernization" },
      { name: "IT Consultation", href: "/services/it-consultation" },
      { name: "SaaS Implementation", href: "/services/saas-implementation" },
      { name: "Web Application", href: "/services/web-application" },
    ],
    Marketing: [
      { name: "Marketing by SEG", href: "https://digital.socialengagementgroup.com/" },
      { name: "Marketing for Law Firms", href: "https://digital.socialengagementgroup.com/marketing-for-law-firm" },
      { name: "Marketing for Doctors", href: "https://digital.socialengagementgroup.com/marketing-for-doctors" },
      { name: "Marketing for Restaurants", href: "https://digital.socialengagementgroup.com/marketing-for-restaurants" },
    ],
  };

  return (
    <div className="text-white pt-20 pb-10 font-sans">
      <div className="container-fluid w-[90%] mx-auto">
        {/* Top Row: Logo, Newsletter and Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 pb-12 border-b border-white/10 mb-12">
          {/* Brand Block */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer shrink-0">
            <Image
              src="/assets/images/site-logo/logo.svg"
              alt="Social Engagement Group"
              width={40}
              height={40}
              className="object-contain brightness-0 invert"
            />
            <span className="font-sans font-bold text-[14px] tracking-widest uppercase text-white">
              Social Engagement Group
            </span>
          </Link>

          {/* Newsletter and Socials Wrapper */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8 w-full md:w-auto">
            {/* Newsletter Box */}
            <div className="w-full md:w-[450px] lg:w-[500px] shrink-0">
              <Newsletter />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 shrink-0">
              <Link
                href="https://www.instagram.com/socialengagementgroup"
                target="_blank"
                aria-label="Follow us on Instagram"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border-brand-brick text-white hover:scale-110 transition-all duration-300"
                style={{ backgroundColor: "#975554" }}
              >
                <RiInstagramFill size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/social-engagement-group"
                target="_blank"
                aria-label="Follow us on LinkedIn"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border-brand-brick text-white hover:scale-110 transition-all duration-300"
                style={{ backgroundColor: "#975554" }}
              >
                <FaLinkedinIn size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/seg.socialengagementgroup/"
                target="_blank"
                aria-label="Follow us on Facebook"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border-brand-brick text-white hover:scale-110 transition-all duration-300"
                style={{ backgroundColor: "#975554" }}
              >
                <FaFacebookF size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 pb-16 border-b border-white/10 px-4 md:px-0">
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
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 px-4 md:px-0 w-full">
          <div className="text-gray-400 text-[14px] md:text-[13px] order-2 md:order-1 flex-1 text-center md:text-left">
            All rights reserved © 2026
          </div>

          {/* Legal Links (Bottom Middle) */}
          <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-center gap-3 md:gap-6 text-gray-400 text-[14px] md:text-[14px] order-1 md:order-2 tracking-widest md:normal-case shrink-0">
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

          <div className="hidden md:block flex-1 order-3 text-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
