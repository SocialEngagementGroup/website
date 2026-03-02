"use client";

import React, { useState, useRef, useEffect } from "react";

const VideoSection = ({ 
  videoId = "ujt54JDgbYo", 
  title = "Social Engagement Group | Grow With Us", 
  label = "Showcase Video" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
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

  // Auto-trigger play and mark as triggered when section enters view
  useEffect(() => {
    if (isInView) {
      setIsPlaying(true);
      setHasTriggered(true);
    }
  }, [isInView]);

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
    if (isPlaying && isMuted) {
      // First click on autoplay: unmute and keep playing
      sendCommand("unMute");
      setIsMuted(false);
    } else {
      // Normal play/pause toggle
      const newState = !isPlaying;
      if (newState) {
        if (!isMuted) sendCommand("unMute");
        sendCommand("playVideo");
      } else {
        sendCommand("pauseVideo");
      }
      setIsPlaying(newState);
    }
  };

  // Sync state when in view/playing - ONLY call when needed to avoid resets
  useEffect(() => {
    if (hasTriggered) {
      if (isInView && isPlaying) {
        sendCommand("playVideo");
        if (isMuted) {
          sendCommand("mute");
        } else {
          sendCommand("unMute");
        }
      } else if (!isInView) {
        sendCommand("pauseVideo");
      }
    }
  }, [isInView, isPlaying, isMuted, hasTriggered]);

  return (
    <section
      ref={sectionRef}
      className={`min-h-[40vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-white ${transitionColor}`}
    >
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center pt-10 pb-6 md:py-20 text-center">
        {/* Main Content Wrapper */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center transition-all duration-1000">
          <div className="mb-8 md:mb-12">
            <h3 className="font-heading text-[#975554] text-[13px] md:text-[15px] !font-extrabold !capitalize tracking-[0.2em] mb-6">
              {label}
            </h3>
            <h2 className="font-heading text-black text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
              Where strategy meets result
            </h2>
          </div>

          {/* YouTube Video Section */}
          <div className="relative w-full z-0 transition-all duration-1000 opacity-100 translate-y-0">
            <div
              className="relative aspect-video overflow-hidden group cursor-pointer bg-black"
              onClick={toggleVideo}
            >
              {/* Persistent Iframe once triggered */}
              {hasTriggered ? (
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&controls=0&iv_load_policy=3&loop=1&playlist=${videoId}&playsinline=1&mute=1&autoplay=1`}
                  title={title}
                  className="absolute inset-0 w-full h-full transform scale-[1.01] pointer-events-none transition-all duration-700"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                     style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` }}>
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              )}

              {/* Interaction Overlay */}
              <div
                className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ${
                  isPlaying ? "bg-transparent" : "bg-transparent"
                }`}
              >
                {/* Custom Play Button - Only shown when paused */}
                <div
                  className={`w-20 h-20 md:w-28 md:h-28 bg-[#975554]/90 rounded-full flex items-center justify-center text-white shadow-2xl transform transition-all duration-500 ${
                    isPlaying
                      ? "opacity-0 scale-90 pointer-events-none"
                      : "opacity-100 scale-100 animate-pulse"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Premium Sound Indicator (Tap to Unmute) */}
                {isMuted && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:right-6 z-30 flex items-center px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 group-hover:bg-black/70 transition-all duration-300">
                    <span className="text-white text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                      Tap to Unmute
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

