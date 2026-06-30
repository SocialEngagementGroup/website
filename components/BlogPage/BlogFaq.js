import React from "react";

/**
 * BlogFaq Component
 *
 * Renders a post's FAQ section with semantic markup. The same data is also
 * emitted as FAQPage JSON-LD on the detail page, giving search engines and
 * AI crawlers clean question/answer pairs to extract.
 */
const BlogFaq = ({ faqs = [] }) => {
  if (!faqs.length) return null;

  return (
    <section className="pt-10 sm:pt-12 mt-10 sm:mt-12 border-t border-gray-200">
      <h2 className="!text-2xl sm:!text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6">
              <h3
                className="!text-base sm:!text-lg font-bold text-gray-900"
                style={{ textTransform: "none" }}
              >
                {faq.question}
              </h3>
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-brick/10 text-brand-brick flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
              <p className="!text-base sm:!text-lg text-gray-600 !leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default BlogFaq;
