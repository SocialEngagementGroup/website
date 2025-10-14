"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { ArrowUpRight } from "lucide-react";
import { tabsData } from "../../../data";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  // Track scroll and change active tab
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollTop = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const windowHeight = window.innerHeight;

      tabsData.forEach((_, index) => {
        if (
          scrollTop >= sectionTop + index * windowHeight &&
          scrollTop < sectionTop + (index + 1) * windowHeight
        ) {
          setActiveTab(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Play active video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video[index === activeTab ? "play" : "pause"]?.();
      }
    });
  }, [activeTab]);

  return (
    <section ref={sectionRef} className="relative">
      {/* Total scroll height */}
      <div className="h-[350vh]">
        {/* Sticky panels */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="max-w-[120rem] mx-auto px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-[0.4fr_1fr] gap-6 h-screen">
              {/* Left Panel */}
              <div className="bg-gray-700 rounded-xl p-6 flex flex-col justify-between">
                <div className="relative h-full">
                  {tabsData.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`absolute inset-0 flex flex-col justify-around text-center transition-opacity duration-500 ${
                        activeTab === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl leading-tight text-gray-100">
                          {tab.title}{" "}
                          <span className="text-green-400">{tab.highlight}</span>{" "}
                          design
                        </h2>
                        <div className="w-full h-px bg-gray-500" />
                        <p className="text-sm md:text-base text-gray-400">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="mt-6 group relative overflow-hidden border-green-400 bg-transparent text-gray-50 hover:text-gray-800 hover:border-green-400 transition-colors duration-300">
                  <span className="relative z-10 uppercase tracking-wider text-sm">
                    Order today
                  </span>
                  <div className="relative z-10 w-5 h-5 flex items-center justify-center rounded-full overflow-hidden ml-2">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div className="absolute inset-0 bg-green-400 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </div>

              {/* Right Panel - Videos */}
              <div className="relative rounded-xl overflow-hidden">
                {tabsData.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={`absolute inset-0 rounded-xl overflow-hidden transition-opacity duration-500 ${
                      activeTab === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={tab.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
