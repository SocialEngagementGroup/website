import React from 'react'
import HeroSection from "@/components/HomePage/HeroSection/HeroSection"
import DynamicSections from "@/components/HomePage/DynamicSections"

// HeroSection is above the fold — static import for instant SSR render.
// All below-fold sections are lazy-loaded via DynamicSections (Client Component).

export const metadata = {
  title: {
    absolute: "Human Creativity & AI-Powered Growth | SEG - Social Engagement Group",
  },
  description: "Experience the future of digital marketing with SEG. We combine human creativity and AI-powered growth strategies to elevate your brand and drive conversions.",
  openGraph: {
    title: "Human Creativity & AI-Powered Growth | SEG - Social Engagement Group",
    description: "Elevate your brand with SEG's blend of human creativity and AI-powered digital growth strategies.",
    url: "/",
  },
  twitter: {
    title: "Human Creativity & AI-Powered Growth | SEG - Social Engagement Group",
    description: "Elevate your brand with SEG's blend of human creativity and AI-powered digital growth strategies.",
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <DynamicSections />
    </>
  )
}

export default page
