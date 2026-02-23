"use client";

import { useEffect, useState } from "react";
import VdoDesktop from "./VdoDesktop";
import VdoMobile from "./VdoMobile";

function useScreenWidth() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const update = () => setW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return w;
}

export default function VideoSection() {
  const screen = useScreenWidth();

  // Handle server-side rendering or initial load
  if (screen === 0) return <div style={{ minHeight: "50vh" }} />;

  return screen <= 768 ? <VdoMobile /> : <VdoDesktop />;
}
