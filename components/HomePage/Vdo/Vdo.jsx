"use client";

import VdoDesktop from "./VdoDesktop";
import VdoMobile from "./VdoMobile";

// Use CSS show/hide instead of JS window.innerWidth.
// Both components render on the server — no placeholder div, no CLS.
// Tailwind's `hidden md:block` / `md:hidden` handles the switch at 768px.
export default function VideoSection() {
  return (
    <>
      <div className="hidden md:block">
        <VdoDesktop />
      </div>
      <div className="md:hidden">
        <VdoMobile />
      </div>
    </>
  );
}
