"use client";

import dynamic from "next/dynamic";

const ScrollProgress = dynamic(() => import("@/components/Common/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/Common/BackToTop"), { ssr: false });

export default function ClientEnhancements() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
    </>
  );
}
