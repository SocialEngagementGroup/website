import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestPosts, toCardData } from "@/data/blogsData";
import BlogSlider from "@/components/BlogPage/BlogSlider";

/**
 * LatestBlogs (Home page section)
 *
 * Surfaces the most recent articles on the home page in a sliding showcase and
 * links to the blog index — strengthening internal linking and giving the blog
 * a clear entry point from the highest-traffic page.
 */
const LatestBlogs = () => {
  const posts = getLatestPosts(9).map(toCardData);
  if (!posts.length) return null;

  return (
    <section className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-900 shadow-sm mb-4">
              From the Blog
            </span>
            <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold text-gray-900 !leading-tight tracking-tight">
              Ideas, Insights &amp; Growth
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-brand-brick font-bold hover:text-gray-900 transition-colors whitespace-nowrap"
          >
            View all articles
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Sliding showcase of latest posts */}
        <BlogSlider posts={posts} />
      </div>
    </section>
  );
};

export default LatestBlogs;
