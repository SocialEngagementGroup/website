"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * BlogPagination Component
 *
 * Numbered pagination for the master blog grid. Renders nothing when there's
 * only a single page. Uses brand-brick for the active page.
 */
const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goTo = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  const baseBtn =
    "inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <nav
      aria-label="Blog pagination"
      className="flex items-center justify-center gap-2 mt-12 sm:mt-16"
    >
      <button
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`${baseBtn} bg-white text-gray-600 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goTo(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`${baseBtn} ${
            page === currentPage
              ? "bg-brand-brick text-white shadow-sm hover:bg-gray-900"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`${baseBtn} bg-white text-gray-600 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default BlogPagination;
