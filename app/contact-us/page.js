import React from 'react'

export const metadata = {
  title: "Contact Us",
  description: "Ready to grow your business? Contact SEG today for a quote on our creative and AI-powered digital services. Let's start your story together.",
  openGraph: {
    title: "Contact Us | SEG - Social Engagement Group",
    description: "Get in touch with SEG for creative and AI-powered digital services that drive results.",
    url: "/contact-us",
  },
  twitter: {
    title: "Contact Us | SEG - Social Engagement Group",
    description: "Get in touch with SEG for creative and AI-powered digital services that drive results.",
  },
};
import ContactPage from "@/components/ContactPage/HeroSection/page";
import GetInTouch from '@/components/ContactPage/GetInTouch/page'
const page = () => {
  return (
    <div>
      <ContactPage />
      <GetInTouch />
    </div>
  )
}

export default page
