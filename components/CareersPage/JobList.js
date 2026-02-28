import React from "react";
import JobCard from "./JobCard";

/**
 * JobList Component
 *
 * Container for job cards with empty state handling.
 * Uses global CSS p sizing.
 */
const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-black/50">
          No positions available in this category at the moment.
        </p>
        <p className="p3 text-black/40 mt-2">
          Check back soon or browse other categories.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
