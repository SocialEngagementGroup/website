'use client';

import Header from "@/app/(site)/UI/MarketingUI/ui/Header";
import Footer from "@/app/(site)/UI/MarketingUI/ui/Footer";
import Cta from "@/app/(site)/UI/MarketingUI/ui/Cta";
import Div from "@/app/(site)/UI/MarketingUI/ui/Div";
import Accordion from "@/app/(site)/UI/MarketingUI/ui/Accordion/index";
import Hero5 from "@/app/(site)/UI/MarketingUI/ui/Hero/Hero5";
import LogoList from "@/app/(site)/UI/MarketingUI/ui/LogoList";
import SectionHeading from "@/app/(site)/UI/MarketingUI/ui/SectionHeading";
import TestimonialSlider from "@/app/(site)/UI/MarketingUI/ui/Slider/TestimonialSlider";
import Spacing from "@/app/(site)/UI/MarketingUI/ui/Spacing";
import VideoModal from "@/app/(site)/UI/MarketingUI/ui/VideoModal";
import ServiceListStyle2 from "@/app/(site)/UI/MarketingUI/ui/ServiceList/ServiceListStyle2";
import ServiceList from "@/app/(site)/UI/MarketingUI/ui/ServiceList";
import { useState } from "react";
import ContactPage from "../contacts/page";
import PostSlider from "@/app/(site)/UI/MarketingUI/ui/Slider/PostSlider";

/* ---------------- DATA ---------------- */

const heroSocialLinks = [
  { name: "Behance", links: "/" },
  { name: "Twitter", links: "/" },
];

const funfaceData = [
  { title: "Digital products", factNumber: "550" },
  { title: "Global happy clients", factNumber: "40K" },
  { title: "Project completed", factNumber: "50k" },
  { title: "Team members", factNumber: "250" },
];

const serviceData1 = [
  { title: "UI/UX Design", href: "/service/service-details" },
  { title: "Marketing", href: "/service/service-details" },
  { title: "Branding", href: "/service/service-details" },
];

const serviceData2 = [
  { title: "SEO", href: "/service/service-details" },
  { title: "App design", href: "/service/service-details" },
  { title: "React Developer", href: "/service/service-details" },
];

const portfolioData = [
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/template/images/portfolio_11.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/template/images/portfolio_12.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/template/images/portfolio_13.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/template/images/portfolio_14.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/template/images/portfolio_15.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/template/images/portfolio_16.jpeg",
  },
];

/* ---------------- PAGE ---------------- */

export default function DigitalAgencyHome() {
  const [itemShow, setItemShow] = useState(6);

  return (
    /* ✅ REQUIRED WRAPPER */
    <main className="cs-main_content">

      {/* ✅ TEMPLATE HEADER */}
      <Header />

      {/* HERO */}
      <Hero5
        title="Marketing for <span>L</span>aw <br /> Firms Built for Consistent Call Volume"
        subtitle="We help law firms generate inbound calls by understanding your practice and building around what actually matters, so you can focus on your cases, not chasing leads."
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+044 546664"
        email="info@arino.com"
        btnText="Schedule a Strategy Call"
        btnLink="https://calendly.com/itseg/segmeet"
      />

      {/* Start Video Block Section */}
      <Div className="cs-video_block_1_wrap">
        <Div className="container">
          <VideoModal
            videoSrc="videos/landingpagevideo.mp4"
            bgUrl="template/images/video_bg_2.jpeg"
          />
        </Div>
      </Div>

      <section className="cs-shape_wrap_4 cs-parallax">
        <div className="cs-shape_4 cs-to_up" />
        <div className="cs-shape_4 cs-to_right" />
        <Spacing lg="145" md="80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="How We Make This Work"
                subtitle=""
                btnLink="/service"
                btnText="See All Services"
              />
              <Spacing lg="45" md="45" />
            </div>
            <div className="col-lg-7 offset-xl-1">
              <ServiceListStyle2 />
            </div>
          </div>
        </div>
      </section>

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Why Firms Choose Us"
          subtitle=""
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
      {/* End Services Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Featured Case Study"
                subtitle="The Law Offices of Michael F. Campopiano"
                btnText=""
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* TESTIMONIAL */}
      <Spacing lg="145" md="80" />
      <TestimonialSlider />
      <Spacing lg="145" md="80" />

      {/* CLIENTS */}
      <Div className="container">
        <SectionHeading
          title="Trusted by Clients Across Competitive Industries"
          subtitle="We work closely with law firms, applying systems built from experience across other high-competition industries including healthcare, hospitality, and retail where visibility, trust, and conversion matter just as much."
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
        <Spacing lg="145" md="80" />
      </Div>

      {/* Start CTA Section */}
      <Cta
        title="Let’s Build a System<br /> You <i> Can</i> Rely On"
        btnText="Schedule a Strategy Call"
        btnLink="https://calendly.com/itseg/segmeet"
        bgSrc="template/images/cta_bg_5.jpeg"
        variant="cs-type_1"
        description="If your firm is ready for consistent visibility and a clearer path to new cases, we’ll help you build a marketing system you can trust so you can focus on running your practice."
      />
      {/* End CTA Section */}

      <Spacing lg='150' md='80' />

      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Common Questions From Law Firms'
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45' />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg='150' md='80' />
      <ContactPage />

      {/* ✅ TEMPLATE FOOTER */}
      <Footer />
    </main>
  );
}
