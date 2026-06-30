import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getPostsByCategory,
  getLatestPosts,
  toCardData,
} from "@/data/blogsData";
import BlogSlider from "@/components/BlogPage/BlogSlider";

/**
 * RelatedBlogs (reusable section)
 *
 * Drop-in blog cross-link section for service pages and other pages:
 *   <RelatedBlogs category="seo" />
 *
 * Shows the latest posts in the given category (falling back to the latest
 * overall) and links to the blog index — strengthening internal linking from
 * service pages into the blog.
 */
const RelatedBlogs = ({
  category,
  title = "From the Blog",
  subtitle = "Insights and strategies to help you grow.",
  limit = 9,
}) => {
  // Category posts first, then top up with the latest others to reach `limit`.
  const byCategory = category ? getPostsByCategory(category, limit) : [];
  let posts = byCategory;
  if (posts.length < limit) {
    const fill = getLatestPosts(limit + posts.length).filter(
      (p) => !posts.some((x) => x.slug === p.slug)
    );
    posts = [...posts, ...fill].slice(0, limit);
  }
  posts = posts.map(toCardData);

  if (!posts.length) return null;

  return (
    <section className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="!text-3xl sm:!text-4xl font-bold text-gray-900 !leading-tight tracking-tight mb-2">
              {title}
            </h2>
            <p className="!text-base sm:!text-lg text-gray-600">{subtitle}</p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-brand-brick font-bold hover:text-gray-900 transition-colors whitespace-nowrap"
          >
            View all articles
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <BlogSlider posts={posts} />
      </div>
    </section>
  );
};

export default RelatedBlogs;
