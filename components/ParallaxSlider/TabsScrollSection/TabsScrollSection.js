"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TabsScrollSection = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const videosRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;
    const videos = videosRef.current;

    // Ensure arrays are clean
    sections.forEach((sec, i) => {
      gsap.set(sec, { opacity: i === 0 ? 1 : 0 });
      gsap.set(videos[i], { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : "100%" });
    });

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${i * 100}vh top`,
        end: `${(i + 1) * 100}vh top`,
        onEnter: () => toggleSection(i),
        onEnterBack: () => toggleSection(i),
      });
    });

    const toggleSection = (index) => {
      sections.forEach((sec, i) => {
        gsap.to(sec, { opacity: i === index ? 1 : 0, duration: 0.5 });
        gsap.to(videos[i], {
          opacity: i === index ? 1 : 0,
          y: i === index ? 0 : "100%",
          duration: 0.5,
        });
      });
    };

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="section_tabs" ref={containerRef}>
      <div className="padding-section-large">
        <div className="tabs_height">
          <div className="tabs_sticky-wrapper">
            <div className="tabs_container">
              <div className="tabs_component">
                {/* LEFT TEXT CONTENT */}
                <div className="tabs_left">
                  <div className="tabs_left-top">
                    {[
                      {
                        title: (
                          <>
                            Reinventing micro-mobility with{" "}
                            <span className="text-color-green">Award winning</span> design
                          </>
                        ),
                        text: "Our mission is to close the gap between a scooter and a bike. Yoda is the lightest vehicle of its category, designed to be agile and fun for everyone to ride.",
                      },
                      {
                        title: (
                          <>
                            Best in class energy management for{" "}
                            <span className="text-color-green">optimal autonomy</span>
                          </>
                        ),
                        text: "3 riding modes: 🌱 eco, ⚡️ normal & 🚀 boost - that offer up to 80 km range on one single charge with a swappable battery.",
                      },
                      {
                        title: (
                          <>
                            Durable and effortless, <span className="text-color-green">all the way</span>
                          </>
                        ),
                        text: "We spent years crafting Yoda, stripping away unnecessary components to deliver a simple and efficient mobility experience.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        ref={(el) => (sectionsRef.current[i] = el)}
                        className="tabs_let-content"
                      >
                        <h2 className="heading-style-h4 text-color-gray100">{item.title}</h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="tabs_left-bottom">
                    <div className="button is-green is-secondary">
                      <div className="button-text">Order today</div>
                      <div className="button-circle-wrapper">
                        <div className="button-icon _1 w-embed">
                          <svg
                            height="100%"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.66699 11.3332L11.3337 4.6665"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66699 4.6665H11.3337V11.3332"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="button-circlee background-color-green"></div>
                    </div>
                  </div>
                </div>

                {/* RIGHT VIDEO SECTION */}
                <div className="tabs_right">
                  {[
                    "https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.mp4",
                    "https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.mp4",
                    "https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.mp4",
                  ].map((src, i) => (
                    <div
                      key={i}
                      ref={(el) => (videosRef.current[i] = el)}
                      className="tabs_video"
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        data-object-fit="cover"
                      >
                        <source src={src} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsScrollSection;
