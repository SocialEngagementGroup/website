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
    title: "AI-Powered Marketing Agency | Social Engagement Group",
    description: "SEG blends human creativity with AI-powered execution to grow your brand across every digital touchpoint. Ads, SEO, content and branding under one roof."
  },

  contact: {
    title: "Contact SEG | Book a Free Strategy Call",
    description: "Ready to grow your brand? Get in touch with Social Engagement Group to book a free strategy call. We partner with businesses ready for real, measurable results."
  },
  careers: {
    title: "Careers at SEG | Join Our Creative & AI-Driven Team",
    description: "We're building something different. Explore open roles at Social Engagement Group and join a team that blends creativity, strategy, and cutting-edge technology."
  },
  blog: {
    title: "Marketing, Branding & Growth Insights | SEG Blog",
    description: "Practical insights on marketing, branding, SEO, and technology from the Social Engagement Group team. Strategies and ideas to help your brand grow."
  },
  services: {
    title: "Marketing Services | Social Engagement Group",
    description: "From branding and SEO to paid ads and website development, SEG offers full-service digital marketing built to deliver results at every stage of growth."
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
    title: "3D Animation & Rendering Services | SEG",
    description: "Bring your brand to life with 3D animation and rendering. SEG creates visuals that stop the scroll, tell your story, and leave a lasting impression."
  },
  branding: {
    title: "Brand Identity & Strategy Services | SEG",
    description: "Build a brand that's impossible to ignore. SEG crafts strategic brand identities, from voice to visuals, that connect emotionally and drive loyalty."
  },
  contentCreation: {
    title: "Content Creation Services | Social Engagement Group - SEG",
    description: "Content that converts, not just fills space. SEG produces strategic, story-driven content that builds authority, earns trust, and grows your audience."
  },
  logoDesign: {
    title: "Logo Design Services | Social Engagement Group - SEG",
    description: "Your logo is your first impression. Social Engagement Group designs logos that are memorable, versatile, and built to represent your brand at every touchpoint."
  },
  socialMediaContent: {
    title: "Social Media Content Creation | SEG",
    description: "Scroll-stopping content made to perform. SEG creates platform-native social media content that grows your following and drives real engagement."
  },
  videographyPhotography: {
    title: "Videography & Photography Services | SEG",
    description: "High-quality visuals that tell your brand story. SEG's videography and photography capture moments that connect audiences and elevate your presence."
  },
  googleBusiness: {
    title: "Google Business Profile Management | SEG",
    description: "Show up where your customers are searching. SEG manages and optimizes your Google Business Profile to boost local visibility, trust, and inbound leads."
  },
  googleLocalAds: {
    title: "Google Local Services Ads Management | SEG",
    description: "Get Google Screened and appear at the top of local search. SEG manages your Local Services Ads so you pay for leads, not clicks."
  },
  ppc: {
    title: "PPC Campaign Management | Google & Meta Ads | SEG",
    description: "Stop wasting ad spend. SEG builds and manages high-converting PPC campaigns on Google and Meta that reach the right audience and deliver measurable ROI."
  },
  retargeting: {
    title: "Retargeting & Remarketing Services | SEG",
    description: "Most visitors don't convert first time. SEG's retargeting campaigns bring them back, turning missed opportunities into clients and loyal customers."
  },
  reputationManagement: {
    title: "Review & Reputation Management | SEG",
    description: "Your reputation is your most valuable asset. SEG monitors, manages, and grows your online reviews to build trust and keep your brand above competitors."
  },
  seo: {
    title: "SEO Services | Rank Higher, Convert More | SEG",
    description: "Get found by the people who need you most. SEG delivers data-driven SEO that improves rankings, drives qualified traffic, and grows your business."
  },
  socialMediaMarketing: {
    title: "Social Media Marketing Services | SEG",
    description: "More than just posting. Social Engagement Group builds social media strategies that grow real audiences, spark conversations, and turn followers into customers."
  },
  websiteDevelopment: {
    title: "Website Design & Development | Social Engagement Group - SEG",
    description: "Your website is your hardest-working salesperson. SEG builds fast, conversion-optimized sites that look credible and work around the clock."
  },
  doctors: {
    title: "Digital Marketing for Doctors & Medical Practices",
    description: "Attract more patients without lifting a finger. SEG delivers tailored marketing for healthcare providers, from SEO and ads to reputation and web design."
  },
  lawyers: {
    title: "Digital Marketing for Law Firms | SEG",
    description: "More cases start online. SEG helps law firms win local search, run high-converting ad campaigns, and build a presence that turns visitors into clients."
  },
  restaurants: {
    title: "Digital Marketing for Restaurants | SEG",
    description: "Fill more tables, more often. SEG builds marketing strategies for restaurants, from social content and local SEO to ads that drive real foot traffic."
  },
  techStartups: {
    title: "Digital Marketing for Tech Startups | SEG",
    description: "Early-stage or scaling fast, SEG helps tech startups build brand authority, generate qualified leads, and grow their digital presence with precision."
  },
  jewelers: {
    title: "Digital Marketing for Jewelers & Jewelry Brands",
    description: "Showcase your craft to the right buyers. SEG helps jewelers build stunning brand identities, run targeted ad campaigns, and grow sales through digital."
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
    title: "SaaS Implementation | Software That Drives Results",
    description: "Seamlessly implement SaaS solutions that transform operations. Expert deployment, integration, and optimization for maximum adoption and ROI."
  },
  webApplication: {
    title: "Web App Development | Scalable Digital Solutions",
    description: "Transform your business with custom web applications. Build powerful, scalable solutions that streamline operations and drive growth."
  },
  converter: {
    title: "Professional Media Converter | Social Engagement Group - SEG",
    description: "Convert, compress, and optimize your media files instantly with high quality results and complete on-device privacy."
  },
  careersSlug: {
    title: "TODO: Careers Slug Title",
    description: "TODO: Careers Slug Description"
  },
};

export default siteMetadata;
