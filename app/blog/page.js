"use client";

import React, { useState, useMemo, useEffect } from "react";
import BlogHero from "@/components/BlogPage/BlogHero";
import BlogFilters from "@/components/BlogPage/BlogFilters";
import BlogList from "@/components/BlogPage/BlogList";
import BlogPagination from "@/components/BlogPage/BlogPagination";
import { blogs, POSTS_PER_PAGE } from "@/data/blogsData";

/**
 * BlogPage
 *
 * Master blog listing page. Live articles link to their `/blog/[slug]` page;
 * "coming soon" placeholders render as non-clickable cards.
 * Design mirrors the Careers page (light bg, gradient blobs, hero, filters).
 */
export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // `blogs` is already sorted newest-first, so the latest article shows first
  // and the oldest shows last.
  const filteredPosts = useMemo(() => {
    if (activeFilter === "all") return blogs;
    return blogs.filter((post) => post.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Reset to first page whenever the filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-brand-gray relative overflow-hidden">
      {/* Unified gradient blob accents */}
      <div
        className="absolute -right-20 top-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 180, 150, 0.4) 0%, rgba(255, 200, 180, 0.2) 30%, rgba(255, 220, 200, 0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute right-10 sm:right-20 top-40 sm:top-60 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 150, 180, 0.3) 0%, rgba(255, 180, 200, 0.15) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Hero Section */}
      <BlogHero />

      {/* Posts Section */}
      <section className="pb-16 sm:pb-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Category Filters */}
          <BlogFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Post Grid or Empty State */}
          {paginatedPosts.length > 0 ? (
            <>
              <BlogList posts={paginatedPosts} />
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-brick/10 mb-6">
                <svg
                  className="w-8 h-8 text-brand-brick"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">
                No articles in this category yet
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We&apos;re working on new content. Check back soon or browse a
                different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
