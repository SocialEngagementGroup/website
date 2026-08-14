import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";

/**
 * BlogCard Component
 *
 * Card-style blog listing with thumbnail, category, title, excerpt and meta.
 * Primary accent: brand-brick, hover: black — consistent with JobCard.
 *
 * Published posts link to `/blog/[slug]`. Placeholder posts (comingSoon)
 * render as a non-interactive card with a "Coming Soon" badge.
 */

// Format an ISO date (YYYY-MM-DD) into a short readable label, e.g. "May 12, 2026"
const formatDate = (iso) => {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogCard = ({ post }) => {
  const isLive = !post.comingSoon;
  const displayDate = isLive ? formatDate(post.datePublished) : "Coming Soon";

  const Thumbnail = (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200">
      {post.image ? (
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        // Placeholder visual when no image is set yet
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(255, 180, 150, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(255, 150, 180, 0.25) 0%, transparent 55%)",
          }}
        />
      )}

      {/* Category chip */}
      <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur border border-gray-200 text-gray-800">
        {post.categoryLabel}
      </span>

      {/* Coming soon badge */}
      {!isLive && (
        <span className="absolute top-3 right-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-brick text-white">
          Coming Soon
        </span>
      )}
    </div>
  );

  const Body = (
    <div className="flex flex-col gap-3 pt-4">
      <h3
        className={`!text-lg sm:!text-xl font-bold leading-snug transition-colors duration-200 line-clamp-2 min-h-[3.125rem] sm:min-h-[3.5rem] ${
          isLive
            ? "text-brand-brick group-hover:text-gray-900"
            : "text-gray-900"
        }`}
        style={{ textTransform: "none" }}
      >
        {post.title}
      </h3>

      <p className="p3 text-gray-500 line-clamp-3 min-h-[4.5rem] md:min-h-[5.0625rem]">
        {post.excerpt}
      </p>

      {/* Meta + CTA on a single row: date on the left, CTA right-aligned */}
      <div className="flex items-center justify-between gap-3 mt-1">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            {displayDate}
          </span>
        </div>

        {isLive ? (
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-brand-brick font-bold text-sm group-hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
            Read article
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : (
          <span className="flex-shrink-0 inline-flex items-center text-gray-400 font-bold text-sm whitespace-nowrap">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );

  if (isLive) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        {Thumbnail}
        {Body}
      </Link>
    );
  }

  return (
    <div className="group block h-full cursor-default">
      {Thumbnail}
      {Body}
    </div>
  );
};

export default BlogCard;
