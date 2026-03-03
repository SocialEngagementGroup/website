"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

// --- Singleton Event Bus ---
// This lives outside the component so external code can trigger it too.
let startListeners = [];
let doneListeners = [];

export const topLoaderStart = () => startListeners.forEach((fn) => fn());
export const topLoaderDone = () => doneListeners.forEach((fn) => fn());

// --- Component ---
const TopLoader = () => {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [finishing, setFinishing] = useState(false);

  const progressTimer = useRef(null);
  const finishTimer = useRef(null);

  // --------------------------------------------------
  // API: called on link-click (instant feedback)
  // --------------------------------------------------
  const start = useCallback(() => {
    clearTimeout(finishTimer.current);
    clearInterval(progressTimer.current);

    setFinishing(false);
    setVisible(true);
    setProgress(5);

    // Trickle the bar up to ~85% smoothly using exponential slowdown
    let current = 5;
    progressTimer.current = setInterval(() => {
      current += (90 - current) * 0.08;
      setProgress(Math.min(current, 90));
    }, 120);
  }, []);

  // --------------------------------------------------
  // API: called when navigation finishes
  // --------------------------------------------------
  const finish = useCallback(() => {
    clearInterval(progressTimer.current);
    setFinishing(true);
    setProgress(100);
    finishTimer.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
      setFinishing(false);
    }, 500);
  }, []);

  // --------------------------------------------------
  // Register to singleton bus
  // --------------------------------------------------
  useEffect(() => {
    startListeners.push(start);
    doneListeners.push(finish);
    return () => {
      startListeners = startListeners.filter((fn) => fn !== start);
      doneListeners = doneListeners.filter((fn) => fn !== finish);
    };
  }, [start, finish]);

  // --------------------------------------------------
  // Detect actual route change → finish the bar
  // --------------------------------------------------
  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      finish();
    }
  }, [pathname, finish]);

  // --------------------------------------------------
  // Intercept ALL anchor-tag clicks on the document
  // --------------------------------------------------
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only intercept same-origin, non-hash, non-external links
      const isExternal =
        href.startsWith("http") &&
        !href.startsWith(window.location.origin);
      const isHashOnly = href.startsWith("#");
      const isMailOrTel =
        href.startsWith("mailto:") || href.startsWith("tel:");

      if (isExternal || isHashOnly || isMailOrTel) return;

      // Don't trigger if the destination is the same page
      const destPath = href.split("?")[0].split("#")[0];
      const currentPath = window.location.pathname;
      if (destPath === currentPath) return;

      start();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [start]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(progressTimer.current);
      clearTimeout(finishTimer.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100000] pointer-events-none"
      aria-hidden="true"
    >
      {/* Track */}
      <div className="h-[3px] w-full bg-white/10" />

      {/* Moving bar */}
      <div
        className="absolute top-0 left-0 h-[3px] rounded-full"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, #975554 0%, #c87b7a 40%, #e3d3cc 70%, #fff 100%)",
          boxShadow:
            "0 0 12px 2px rgba(151,85,84,0.7), 0 0 4px 1px rgba(227,211,204,0.5)",
          transition: finishing
            ? "width 0.4s cubic-bezier(0.4,0,0.2,1)"
            : "width 0.12s linear",
        }}
      />

      {/* Shimmering glint that rides along the tip */}
      <div
        className="absolute top-0 h-[3px] rounded-full w-16 blur-[4px] bg-white/60"
        style={{
          left: `calc(${progress}% - 3rem)`,
          transition: finishing
            ? "left 0.4s cubic-bezier(0.4,0,0.2,1)"
            : "left 0.12s linear",
        }}
      />
    </div>
  );
};

export default TopLoader;
