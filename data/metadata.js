/**
 * Shared Open Graph / Twitter defaults.
 *
 * Next.js does NOT deep-merge metadata: a page that defines its own
 * `openGraph` object replaces the root layout's entirely, silently dropping
 * the image, siteName, locale, and card type. Every page-level `openGraph`
 * and `twitter` block must spread these defaults first, then override
 * title/description/url.
 */
export const ogDefaults = {
  siteName: "Social Engagement Group",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/assets/images/brand/og-image.png",
      width: 1200,
      height: 630,
      alt: "Social Engagement Group - Human Creativity & AI-Powered Digital Growth",
    },
  ],
};

export const twitterDefaults = {
  card: "summary_large_image",
  images: ["/assets/images/brand/og-image.png"],
};

const siteMetadata = {
  home: {
    title: "AI-Powered Digital Marketing Agency | Social Engagement Group - SEG",
    description: "Social Engagement Group blends human creativity with AI-powered execution to grow your brand across every digital touchpoint. Ads, SEO, content, branding, all under one roof."
  },

  contact: {
    title: "Contact Social Engagement Group - SEG | Book a Free Strategy Call",
    description: "Ready to grow your brand? Get in touch with Social Engagement Group to book a free strategy call. We partner with businesses ready for real, measurable results."
  },
  careers: {
    title: "Careers at Social Engagement Group - SEG | Join a Creative & AI-Driven Marketing Team",
    description: "We're building something different. Explore open roles at Social Engagement Group and join a team that blends creativity, strategy, and cutting-edge technology."
  },
  blog: {
    title: "Blog | Social Engagement Group - SEG | Marketing, Branding & Growth Insights",
    description: "Practical insights on marketing, branding, SEO, and technology from the Social Engagement Group team. Strategies and ideas to help your brand grow."
  },
  services: {
    title: "Marketing Services | Social Engagement Group - SEG",
    description: "From branding and SEO to paid ads and website development, Social Engagement Group offers full-service digital marketing solutions crafted to deliver real results at every stage of growth."
  },
  cookies: {
    title: "Cookies | Social Engagement Group - SEG",
    description: "Learn how Social Engagement Group uses cookies to improve your browsing experience and how you can manage your preferences."
  },
  legal: {
    title: "Legal Notice | Social Engagement Group - SEG",
    description: "Read the legal notice for Social Engagement Group, including disclaimers, intellectual property rights, and terms governing use of our website."
  },
  privacy: {
    title: "Privacy Policy | Social Engagement Group - SEG",
    description: "Your privacy matters to us. Learn how Social Engagement Group collects, uses, and protects your personal information when you visit our website."
  },
  terms: {
    title: "Terms & Conditions | Social Engagement Group - SEG",
    description: "Review the terms and conditions governing your use of the Social Engagement Group website and our marketing services."
  },
  animation3d: {
    title: "3D Animation & Rendering Services | Social Engagement Group - SEG",
    description: "Bring your brand to life with stunning 3D animation and rendering. Social Engagement Group creates visuals that stop the scroll, tell your story, and leave a lasting impression."
  },
  branding: {
    title: "Brand Identity & Strategy Services | Social Engagement Group - SEG",
    description: "Build a brand that's impossible to ignore. Social Engagement Group crafts strategic brand identities from voice to visuals that connect emotionally and drive lasting loyalty."
  },
  contentCreation: {
    title: "Content Creation Services | Social Engagement Group - SEG",
    description: "Content that converts, not just fills space. Social Engagement Group produces strategic, story-driven content that builds authority, earns trust, and grows your audience."
  },
  logoDesign: {
    title: "Logo Design Services | Social Engagement Group - SEG",
    description: "Your logo is your first impression. Social Engagement Group designs logos that are memorable, versatile, and built to represent your brand at every touchpoint."
  },
  socialMediaContent: {
    title: "Social Media Content Creation | Social Engagement Group - SEG",
    description: "Scroll-stopping content made to perform. Social Engagement Group creates platform-native social media content that grows your following and drives real engagement."
  },
  videographyPhotography: {
    title: "Videography & Photography Services | Social Engagement Group - SEG",
    description: "High-quality visuals that tell your brand story. Social Engagement Group's videography and photography services capture moments that connect audiences and elevate your presence."
  },
  googleBusiness: {
    title: "Google Business Profile Management | Social Engagement Group - SEG",
    description: "Show up where your customers are searching. Social Engagement Group manages and optimizes your Google Business Profile to boost local visibility, trust, and inbound leads."
  },
  googleLocalAds: {
    title: "Google Local Services Ads Management | Social Engagement Group - SEG",
    description: "Get Google Screened and appear at the very top of local search results. Social Engagement Group manages your Local Services Ads so you pay for leads, not clicks."
  },
  ppc: {
    title: "PPC Campaign Management | Google & Meta Ads | Social Engagement Group - SEG",
    description: "Stop wasting ad spend. Social Engagement Group builds and manages high-converting PPC campaigns on Google and Meta that target the right audience and deliver measurable ROI."
  },
  retargeting: {
    title: "Retargeting & Remarketing Services | Social Engagement Group - SEG",
    description: "Most visitors don't convert the first time. Social Engagement Group's retargeting campaigns bring them back turning missed opportunities into signed clients and loyal customers."
  },
  reputationManagement: {
    title: "Review & Reputation Management | Social Engagement Group - SEG",
    description: "Your reputation is your most valuable asset. Social Engagement Group monitors, manages, and grows your online reviews to build trust and keep your brand above the competition."
  },
  seo: {
    title: "SEO Services | Rank Higher, Convert More | Social Engagement Group - SEG",
    description: "Get found by the people who need you most. Social Engagement Group delivers data-driven SEO strategies that improve rankings, drive qualified traffic, and grow your business long-term."
  },
  socialMediaMarketing: {
    title: "Social Media Marketing Services | Social Engagement Group - SEG",
    description: "More than just posting. Social Engagement Group builds social media strategies that grow real audiences, spark conversations, and turn followers into customers."
  },
  websiteDevelopment: {
    title: "Website Design & Development | Social Engagement Group - SEG",
    description: "Your website is your hardest-working salesperson. Social Engagement Group designs and builds fast, conversion-optimized websites that make your brand look credible and work around the clock."
  },
  doctors: {
    title: "Digital Marketing for Doctors & Medical Practices | Social Engagement Group - SEG",
    description: "Attract more patients without lifting a finger. Social Engagement Group delivers tailored digital marketing for healthcare providers from SEO and ads to reputation management and web design."
  },
  lawyers: {
    title: "Digital Marketing for Law Firms | Social Engagement Group - SEG",
    description: "More cases start online. Social Engagement Group helps law firms dominate local search, run high-converting ad campaigns, and build a digital presence that turns visitors into signed clients."
  },
  restaurants: {
    title: "Digital Marketing for Restaurants | Social Engagement Group - SEG",
    description: "Fill more tables, more often. Social Engagement Group creates digital marketing strategies for restaurants from social media content and local SEO to ads that drive real foot traffic."
  },
  techStartups: {
    title: "Digital Marketing for Tech Startups | Social Engagement Group - SEG",
    description: "Early-stage or scaling fast, Social Engagement Group helps tech startups build brand authority, generate qualified leads, and grow their digital presence with precision and speed."
  },
  jewelers: {
    title: "Digital Marketing for Jewelers & Jewelry Brands | Social Engagement Group - SEG",
    description: "Showcase your craft to the right buyers. Social Engagement Group helps jewelers build stunning brand identities, run targeted ad campaigns, and grow sales through strategic digital marketing."
  },
  aiAutomation: {
    title: "AI Automation | Scale Smarter & Faster",
    description: "Transform operations with AI automation. Boost efficiency, reduce costs, and unlock growth with intelligent systems that work 24/7 for your business."
  },
  cloudModernization: {
    title: "Cloud Modernization Services | Transform Legacy Into Agility",
    description: "Modernize your infrastructure with strategic cloud migration. Reduce costs, boost performance, and scale effortlessly with future-ready architecture."
  },
  itConsultation: {
    title: "IT Consulting Services | Transform Technology Into Growth",
    description: "Scale your business with strategic IT consulting. Modernize infrastructure, optimize systems, and drive efficiency with expert technology solutions."
  },
  saasImplementation: {
    title: "SaaS Implementation Services | Deploy Software That Drives Results",
    description: "Seamlessly implement SaaS solutions that transform operations. Expert deployment, integration, and optimization for maximum adoption and ROI."
  },
  webApplication: {
    title: "Web Application Development | Build Scalable Digital Solutions",
    description: "Transform your business with custom web applications. Build powerful, scalable solutions that streamline operations and drive growth."
  },
  converter: {
    title: "Professional Media Converter | Social Engagement Group - SEG",
    description: "Convert, compress, and optimize your media files instantly with high quality results and complete on-device privacy."
  },
  websiteAudit: {
    title: "Free Website Performance Audit | Social Engagement Group - SEG",
    description: "Unlock your website's full potential with a free performance audit. Discover actionable insights to improve speed, SEO, and conversion rates today."
  },
  careersSlug: {
    title: "TODO: Careers Slug Title",
    description: "TODO: Careers Slug Description"
  },
};

export default siteMetadata;
