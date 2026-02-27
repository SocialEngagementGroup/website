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
    <section ref={sectionRef} className="bg-[#232326]">
      <div
        className={`max-[1180px]:w-full container-fluid w-[78%] mx-auto py-6 md:py-28 px-6 md:px-7`}
      >
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-[50%_50%]
            [@media(min-width:1300px)]:grid-cols-[60%_35%]
            gap-4 
            md:gap-5
            items-center
            text-start
          "
        >
          {/* LEFT */}
          <div className="text-white order-2 md:order-1 mt-4 px-5 md:px-0">
            <h2 className="!font-serif !font-bold !leading-tight !tracking-tight max-w-[600px]">{heading}</h2>

            <ul className="mt-[16px] mb-[10px] max-w-[630px] max-[1300px]:max-w-full">
              {items?.map((item, index) => (
                <li
                  key={index}
                  className="list-disc mt-[1rem] ml-[30px] max-md:list-outside max-md:ml-0 !p1 !font-light opacity-90"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Video */}
          <div className="order-1 md:order-2">
            <div className="flex justify-center overflow-hidden aspect-[3/3] w-full">
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
