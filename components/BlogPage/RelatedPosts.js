import React from "react";
import BlogSlider from "./BlogSlider";

// The slider is a client component, so only the fields a card actually needs
// cross the server→client boundary — avoids serializing full article content.
const toCardData = (post) => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  categoryLabel: post.categoryLabel,
  comingSoon: post.comingSoon,
  datePublished: post.datePublished,
  readTime: post.readTime,
  image: post.image,
  imageAlt: post.imageAlt,
});

/**
 * RelatedPosts ("Keep Reading") Component
 *
 * Auto-sliding carousel of related articles below a blog post — keeps readers
 * engaged and strengthens internal linking (good for SEO and crawl depth).
 */
const RelatedPosts = ({ posts = [] }) => {
  if (!posts.length) return null;

  return (
    <section className="pt-10 sm:pt-12 mt-10 sm:mt-12 border-t border-gray-200">
      <h2 className="!text-2xl sm:!text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
        Keep Reading
      </h2>
      <BlogSlider posts={posts.map(toCardData)} />
    </section>
  );
};

export default RelatedPosts;
