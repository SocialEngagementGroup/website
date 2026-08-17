import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

const masterServices = [
  {
    title: "Social Media",
    image: "/assets/images/home/master-services/social-media.jpg",
    href: "/services/social-media-marketing",
  },
  {
    title: "Marketing & SEO",
    image: "/assets/images/home/master-services/marketing-seo.jpg",
    href: "/services/seo",
  },
  {
    title: "Web Development",
    image: "/assets/images/home/master-services/web-development.jpg",
    href: "/services/website-development",
  },
  {
    title: "AI Technology",
    image: "/assets/images/home/master-services/ai-technology.jpg",
    href: "/services/ai-automation",
  },
];

const ParallaxSliderSection = () => {
  return (
    <section
      id="services"
      className="bg-[linear-gradient(180deg,#E3D3CC_62.5%,#FFFFFF_100%)] relative z-20"
    >
      <div className="mx-auto w-[92%] max-w-[1440px] pt-10 pb-24 text-center md:pt-28 md:pb-32">
        <div className="section-title-custom text-center">
          <SectionTitle
            id="what-we-do"
            title="What We Do"
            subtitle2={
              <>
                Marketing solutions for every stage <br /> of your growth
              </>
            }
            description="Crafted to deliver real results through strategy, storytelling, and AI-powered execution, all under one roof."
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-16 md:gap-5">
          {masterServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              aria-label={`Explore ${service.title} services`}
              className="group relative block aspect-[3/2] overflow-hidden rounded-[22px] border-[3px] border-black bg-black shadow-[0_12px_30px_rgba(20,16,16,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(20,16,16,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#975554]/50 md:rounded-[28px] md:border-[5px]"
            >
              <Image
                src={service.image}
                alt={`${service.title} master service`}
                fill
                quality={75}
                sizes="(max-width: 639px) 46vw, 23vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <span className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/[0.04]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSliderSection;
