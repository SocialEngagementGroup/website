'use client';

import Header from "@/app/(site)/UI/MarketingUI/ui/Header";
import Footer from "@/app/(site)/UI/MarketingUI/ui/Footer";

import Cta from "@/app/(site)/UI/MarketingUI/ui/Cta";
import Div from "@/app/(site)/UI/MarketingUI/ui/Div";
import FunFact2 from "@/app/(site)/UI/MarketingUI/ui/FunFact/FunFact2";
import Hero4 from "@/app/(site)/UI/MarketingUI/ui/Hero/Hero4";
import LogoList from "@/app/(site)/UI/MarketingUI/ui/LogoList";
import MovingText2 from "@/app/(site)/UI/MarketingUI/ui/MovingText/MovingText2";
import Portfolio from "@/app/(site)/UI/MarketingUI/ui/Portfolio";
import PostList from "@/app/(site)/UI/MarketingUI/ui/Post/PostList";
import SectionHeading from "@/app/(site)/UI/MarketingUI/ui/SectionHeading";
import TestimonialSlider from "@/app/(site)/UI/MarketingUI/ui/Slider/TestimonialSlider";
import TimelineSlider from "@/app/(site)/UI/MarketingUI/ui/Slider/TimelineSlider";
import Spacing from "@/app/(site)/UI/MarketingUI/ui/Spacing";
import VideoModal from "@/app/(site)/UI/MarketingUI/ui/VideoModal";

import { Icon } from "@iconify/react";
import { useState } from "react";
import ContactPage from "../contacts/page";

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
      <Hero4
        title="We Are <span>A</span>rino <br />Digital Agency"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+044 546664"
        email="info@arino.com"
      />

      {/* FUN FACT */}
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/template/images/funfact_shape_bg.svg"
        />
      </Div>

      {/* SERVICES */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="What we provide"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="65" md="45" />
      </Div>

      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />

      {/* ABOUT */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4" />
        <Div className="cs-shape_4" />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Uk’s best digital agency ever"
                subtitle="Why Choose Us"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-half_screen">
                <VideoModal
                  videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
                  bgUrl="/template/images/video_bg.jpeg"
                  variant="cs-style1 cs-size1"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* PORTFOLIO */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Portfolio to explore"
          subtitle="Latest Projects"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />

        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div className="col-lg-4" key={index}>
              <Portfolio {...item} variant="cs-style1 cs-type1" />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        {portfolioData.length > itemShow && (
          <Div className="text-center">
            <Spacing lg="65" md="40" />
            <span
              className="cs-text_btn"
              onClick={() => setItemShow(itemShow + 3)}
            >
              <span>Load More</span>
              <Icon icon="bi:arrow-right" />
            </span>
          </Div>
        )}
      </Div>

      {/* AWARDS */}
      <Spacing lg="140" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-4">
            <SectionHeading
              title="We get multiple awards"
              subtitle="Our Awards"
              variant="cs-style1"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <Div className="col-xl-7 offset-xl-1">
            <TimelineSlider />
          </Div>
        </Div>
      </Div>

      {/* TESTIMONIAL */}
      <Spacing lg="145" md="80" />
      <TestimonialSlider />

      {/* BLOG */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4" />
        <Div className="cs-shape_4" />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <PostList />
            </Div>
          </Div>
        </Div>
      </Div>

      {/* CLIENTS */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our reputed partner"
          subtitle="Top Clients"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>

      {/* CTA */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/template/images/cta_bg.jpeg"
        />
      </Div>
      <ContactPage />
      {/* ✅ TEMPLATE FOOTER */}
      <Footer />
    </main>
  );
}
