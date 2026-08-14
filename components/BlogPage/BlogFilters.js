"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { blogCategories } from "@/data/blogsData";

/**
 * BlogFilters Component
 *
 * Category dropdown for the Blog page. Keeps the filter compact instead of
 * spreading every category across the row. Brand-styled, closes on outside
 * click or Escape.
 */
const BlogFilters = ({ activeFilter, onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const activeLabel =
    blogCategories.find((c) => c.value === activeFilter)?.label || "All";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleEsc = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleSelect = (value) => {
    onFilterChange(value);
    setOpen(false);
  };

  return (
    <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200 flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="font-medium text-gray-700">Browse by</span>
        <span>category</span>
      </div>

      <div className="relative" ref={wrapperRef}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="inline-flex items-center justify-between gap-3 min-w-[180px] px-5 py-2.5 rounded-full !text-sm font-medium bg-white text-gray-800 border border-gray-200 shadow-sm hover:border-gray-900 transition-all duration-200 cursor-pointer"
        >
          <span>{activeLabel}</span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown menu */}
        <div
          role="listbox"
          className={`absolute right-0 mt-2 w-[200px] z-30 origin-top rounded-2xl bg-white border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-1.5 transition-all duration-200 ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {blogCategories.map((filter) => {
            const isActive = filter.value === activeFilter;
            return (
              <button
                key={filter.value}
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(filter.value)}
                className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl !text-sm font-medium text-left transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? "bg-brand-brick/10 text-brand-brick"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter.label}
                {isActive && <Check className="w-4 h-4 flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
