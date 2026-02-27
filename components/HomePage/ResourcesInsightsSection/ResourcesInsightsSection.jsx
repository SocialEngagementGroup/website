"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const BLOGS = [
  {
    id: 1,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet",
    href: "/blogs/lorem-ipsum",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    title: "Better UI for Growth",
    description: "Design patterns that convert visitors",
    href: "/blogs/ui-growth",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    title: "Analytics That Matter",
    description: "What clients actually want to see",
    href: "/blogs/analytics",
    image:
      "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function ResourcesInsightsSection() {
  const [index, setIndex] = useState(0);

  const blog = useMemo(() => BLOGS[index], [index]);

  const prev = () => setIndex((i) => (i === 0 ? BLOGS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === BLOGS.length - 1 ? 0 : i + 1));

  return (
    <section className="py-[80px]">
      <div className="text-center mb-[40px]">
        <p className="opacity-75">Our Resources</p>
        <h2 className="">Explore Our Insights</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[20px] items-stretch">
        {/* Left card stays static */}
        <div className="bg-[#9b5a57] rounded-[16px] p-[32px] text-white flex flex-col justify-center">
          <h3 className="">LOREM IPSUM</h3>
          <div className="w-[40px] h-[2px] bg-white my-[12px]" />
          <p className="mb-[18px]">LOREM IPSUM DOLOR SIT AMET</p>

          <div className="flex items-center gap-[10px] mt-[6px]">
            <button className="w-[40px] h-[40px] rounded-full bg-white/[0.18] border border-white/25 text-white cursor-pointer" onClick={prev} type="button" aria-label="Previous">
              ←
            </button>

            <div className="flex gap-[8px] items-center">
              {BLOGS.map((b, i) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`w-[9px] h-[9px] rounded-full cursor-pointer transition-colors ${i === index ? "bg-white/[0.95]" : "bg-white/[0.35]"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="w-[40px] h-[40px] rounded-full bg-white/[0.18] border border-white/25 text-white cursor-pointer" onClick={next} type="button" aria-label="Next">
              →
            </button>
          </div>

          <Link href="/blogs" className="bg-white text-black py-[10px] px-[18px] rounded-[20px] w-fit mt-[18px]">
            View All Blogs
          </Link>
        </div>

        {/* Right card transitions */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={blog.id}
              className="h-full"
              initial={{ opacity: 0, y: 14, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.99 }}
              transition={{ duration: 0.28 }}
            >
              <Link href={blog.href} className="relative rounded-[16px] overflow-hidden text-white min-h-[360px] block">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-[2] p-[32px]">
                  <h3 className="">{blog.title}</h3>
                  <p className="opacity-90">{blog.description}</p>
                </div>

                <span className="absolute top-[16px] right-[16px] z-[2] bg-white/20 py-[8px] px-[10px] rounded-full">↗</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
