"use client";
import React, { useEffect, useRef, useState } from "react";

const ProfessionalBranding = ({ heading, items, video }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // play when at least 35% of the section is visible
        setShouldPlay(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { threshold: [0, 0.15, 0.35, 0.6, 1] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const playVideo = async () => {
      try {
        await v.play();
      } catch {
        // iOS may block play in some cases, but this prevents crashes
      }
    };

    if (shouldPlay) {
      playVideo();
    } else {
      v.pause();
      v.currentTime = 0; // optional: reset to start when leaving section
    }
  }, [shouldPlay]);

  return (
    <section ref={sectionRef} className="bg-white">
      <div
        className={`max-[1180px]:w-full container-fluid w-[78%] mx-auto py-6 md:py-12 px-6 md:px-7`}
      >
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-[60%_40%]
            [@media(min-width:1300px)]:grid-cols-[60%_40%]
            gap-4 
            md:gap-5
            items-center
            text-start
          "
        >
          {/* LEFT */}
          <div className="text-black order-2 md:order-1 mt-4 px-5 md:px-0">
            <h2 className="max-w-[800px] text-center mx-auto lg:mx-0">{heading}</h2>

            <ul className="mt-[16px] mb-[10px] max-w-[850px] max-[1300px]:max-w-full">
              {items?.map((item, index) => (
                <li
                  key={index}
                  className="list-disc mt-[1rem] ml-[30px] max-md:list-outside max-md:ml-0 p1 opacity-90"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Video */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="flex justify-center overflow-hidden aspect-[3/3] w-full md:w-[125%] md:-mr-[10%] lg:w-[130%] lg:-mr-[15%]">
              <video
                ref={videoRef}
                className={`rounded-[20px] h-full w-full object-contain`}
                muted
                loop
                playsInline
                preload="none"
                controls={false}
                disablePictureInPicture
                // do NOT use autoPlay, we handle play/pause via scroll
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBranding;
