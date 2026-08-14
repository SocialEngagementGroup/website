"use client";

import React, { useState, useMemo } from "react";
import CareersHero from "@/components/CareersPage/CareersHero";
import JobFilters from "@/components/CareersPage/JobFilters";
import JobList from "@/components/CareersPage/JobList";
import { allJobs, isJobOpen } from "@/data/jobsData";

/**
 * CareersPage
 *
 * Full careers listing page with clean, minimal design.
 * Uses global CSS heading/paragraph sizing from globals.css.
 */
export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("open");

  const filteredJobs = useMemo(() => {
    if (activeFilter === "open") {
      return allJobs.filter((job) => isJobOpen(job));
    }
    return allJobs;
  }, [activeFilter]);

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
      <CareersHero />

      {/* Jobs Section */}
      <section className="pb-16 sm:pb-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Filters */}
          <JobFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Job Listings or No Jobs Message */}
          {filteredJobs.length > 0 ? (
            <JobList jobs={filteredJobs} />
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">
                No open positions
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We don&apos;t have any open positions at the moment, but check
                back soon for new opportunities!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
