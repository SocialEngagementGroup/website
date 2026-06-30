import React from "react";
import BlogCard from "./BlogCard";

/**
 * BlogList Component
 *
 * Responsive grid of blog cards.
 */
const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
