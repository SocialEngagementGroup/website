"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ResourcesInsightsSection.module.css";

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
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.kicker}>Our Resources</p>
        <h2 className={styles.title}>Explore Our Insights</h2>
      </div>

      <div className={styles.row}>
        {/* Left card stays static */}
        <div className={styles.leftCard}>
          <h3 className={styles.leftTitle}>LOREM IPSUM</h3>
          <div className={styles.divider} />
          <p className={styles.leftDesc}>LOREM IPSUM DOLOR SIT AMET</p>

          <div className={styles.controls}>
            <button className={styles.ctrlBtn} onClick={prev} type="button" aria-label="Previous">
              ←
            </button>

            <div className={styles.dots}>
              {BLOGS.map((b, i) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button className={styles.ctrlBtn} onClick={next} type="button" aria-label="Next">
              →
            </button>
          </div>

          <Link href="/blogs" className={styles.leftBtn}>
            View All Blogs
          </Link>
        </div>

        {/* Right card transitions */}
        <div className={styles.rightWrap}>
          <AnimatePresence mode="wait">
            <motion.div
              key={blog.id}
              className={styles.rightMotion}
              initial={{ opacity: 0, y: 14, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.99 }}
              transition={{ duration: 0.28 }}
            >
              <Link href={blog.href} className={styles.rightCard}>
                <div
                  className={styles.bg}
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
                <div className={styles.overlay} />

                <div className={styles.content}>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </div>

                <span className={styles.arrow}>↗</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
