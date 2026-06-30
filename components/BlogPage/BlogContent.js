import React from "react";
import Link from "next/link";
import { blogs } from "@/data/blogsData";

/**
 * BlogContent Component
 *
 * Renders an article body from an array of structured content blocks.
 * Keeping content as data (not raw HTML) keeps markup semantic and consistent,
 * which is better for accessibility, SEO, and AI crawlers parsing the page.
 *
 * Supported block types: paragraph, heading (h2), subheading (h3),
 * list (ul/ol), quote, callout.
 *
 * Inline internal links (great for SEO and crawl depth):
 *   [[blog-slug]]            → links to that post, using its title as anchor text
 *   [[blog-slug|Anchor]]     → links to that post with custom anchor text
 *   [[/services/seo|Anchor]] → links to any internal path with the given anchor
 */

// slug -> title lookup for inline [[slug]] internal links
const slugToTitle = blogs.reduce((map, post) => {
  map[post.slug] = post.title;
  return map;
}, {});

// Convert text containing [[...]] tokens into an array of strings + <Link>s
const renderText = (text) => {
  if (!text || !text.includes("[[")) return text;

  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[\[([^\]]+)\]\]$/);
    if (!match) return part;

    const [targetRaw, labelRaw] = match[1].split("|").map((s) => s.trim());
    const label = labelRaw || "";

    let href;
    let anchor;
    if (targetRaw.startsWith("/")) {
      // Arbitrary internal path (e.g. a service page)
      href = targetRaw;
      anchor = label || targetRaw;
    } else {
      // Blog slug → use the post title unless a custom label is given
      const title = slugToTitle[targetRaw];
      if (!title && !label) return targetRaw; // unknown slug → drop brackets
      href = `/blog/${targetRaw}`;
      anchor = label || title;
    }

    return (
      <Link
        key={i}
        href={href}
        className="text-brand-brick font-medium underline underline-offset-2 hover:text-gray-900 transition-colors"
      >
        {anchor}
      </Link>
    );
  });
};

const BlogContent = ({ content = [] }) => {
  return (
    <div className="space-y-6 sm:space-y-7">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="!text-2xl sm:!text-3xl font-bold text-gray-900 !leading-tight pt-4 scroll-mt-28"
              >
                {block.text}
              </h2>
            );

          case "subheading":
            return (
              <h3
                key={index}
                className="!text-lg sm:!text-xl font-bold text-gray-900 !leading-snug pt-2"
                style={{ textTransform: "none" }}
              >
                {block.text}
              </h3>
            );

          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={index}
                className={`space-y-3 ${block.ordered ? "list-none" : ""}`}
              >
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 ${
                        block.ordered
                          ? "w-6 h-6 rounded-full bg-brand-brick/10 text-brand-brick text-sm font-bold flex items-center justify-center mt-0.5"
                          : "w-2 h-2 mt-2.5 rounded-full bg-brand-brick"
                      }`}
                    >
                      {block.ordered ? i + 1 : ""}
                    </span>
                    <span className="!text-base sm:!text-lg text-gray-600 !leading-relaxed">
                      {renderText(item)}
                    </span>
                  </li>
                ))}
              </ListTag>
            );
          }

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-brand-brick pl-5 sm:pl-6 py-2 my-2"
              >
                <p className="!text-lg sm:!text-xl text-gray-900 font-medium italic !leading-relaxed">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.cite && (
                  <cite className="block mt-3 text-sm text-gray-500 not-italic">
                    — {block.cite}
                  </cite>
                )}
              </blockquote>
            );

          case "callout":
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm"
              >
                {block.title && (
                  <p className="!text-base font-bold text-brand-brick mb-2 uppercase tracking-wide">
                    {block.title}
                  </p>
                )}
                <p className="!text-base sm:!text-lg text-gray-700 !leading-relaxed">
                  {renderText(block.text)}
                </p>
              </div>
            );

          case "paragraph":
          default:
            return (
              <p
                key={index}
                className="!text-base sm:!text-lg text-gray-600 !leading-relaxed"
              >
                {renderText(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
};

export default BlogContent;
