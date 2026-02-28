"use client";

import React, { useState, useRef, useEffect } from "react";

const VideoSection = ({ 
  videoId = "ujt54JDgbYo", 
  title = "Social Engagement Group | Grow With Us", 
  label = "Showcase Video" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef(null);
  const sectionRef = useRef(null);

  const transitionBase = "transition-[transform,opacity,filter] duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)";
  const transitionColor = "transition-colors duration-[1000ms] ease-in-out";

  // Intersection Observer for Autoplay on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Control video via YouTube IFrame API
  const sendCommand = (func) => {
    if (!iframeRef.current) return;
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: func,
        args: "",
      }),
      "*"
    );
  };

  const toggleVideo = () => {
    const newState = !isPlaying;
    if (newState) {
      sendCommand("unMute");
      sendCommand("playVideo");
    } else {
      sendCommand("pauseVideo");
    }
    setIsPlaying(newState);
  };

  // Autoplay when in view, pause when out of view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        sendCommand("playVideo");
        setIsPlaying(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      sendCommand("pauseVideo");
      setIsPlaying(false);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className={`min-h-[50vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-white ${transitionColor}`}
    >
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center py-10 md:py-20 text-center">
        {/* Main Content Wrapper */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center transition-all duration-1000">
          <div className="mb-8 md:mb-12">
            <h3 className="font-heading text-[#975554] text-[13px] md:text-[15px] !font-extrabold !capitalize tracking-[0.2em] mb-6">
              {label}
            </h3>
            <h2 className="font-heading text-black text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
              Where Strategy Meets Result
            </h2>
          </div>

          {/* YouTube Video Section */}
          <div className="relative w-full z-0 transition-all duration-1000 opacity-100 translate-y-0">
            <div
              className="relative aspect-video overflow-hidden group cursor-pointer"
              onClick={toggleVideo}
            >
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&controls=0&iv_load_policy=3&loop=1&playlist=${videoId}&playsinline=1`}
                title={title}
                className="absolute inset-0 w-full h-full transform scale-[1.01] pointer-events-none transition-all duration-700"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              {/* Interaction Overlay */}
              <div
                className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ${
                  isPlaying ? "bg-transparent md:group-hover:bg-black/10" : "bg-black/10"
                }`}
              >
                {/* Custom Play/Pause Button */}
                <div
                  className={`w-20 h-20 md:w-28 md:h-28 bg-[#975554]/90 rounded-full flex items-center justify-center text-white shadow-2xl transform transition-all duration-500 ${
                    isPlaying
                      ? "opacity-0 md:group-hover:opacity-100 scale-90"
                      : "opacity-100 scale-100 animate-pulse"
                  }`}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
