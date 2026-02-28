<h1 align="center">Social Engagement Group</h1>

<p align="center">
  <strong>Where Human Creativity Meets AI-Powered Digital Growth</strong>
</p>

<p align="center">
  <a href="https://socialengagementgroup.com">🌐 Live Site</a>  ·  
  <a href="https://github.com/SocialEngagementGroup/website">📦 Repository</a>  ·  
  <a href="https://socialengagementgroup.com/contact-us">📬 Contact Us</a>
</p>

<br />

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0050?style=for-the-badge&logo=framer" />
  <img src="https://img.shields.io/badge/Turbopack-Enabled-F7DF1E?style=for-the-badge" />
</p>

---

## ✨ Overview

The **Social Engagement Group (SEG)** website is a premium, high-performance marketing agency platform built with the latest web technologies. It showcases SEG's full suite of creative, digital, and industry-specific marketing services through immersive animations, smooth scrolling, and a bold typographic system.

---

## 🏗️ Tech Stack

| Layer             | Technology                                                                                                                  |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| **Framework**     | [Next.js 15](https://nextjs.org/) (App Router + Turbopack)                                                                  |
| **UI Library**    | [React 19](https://react.dev/)                                                                                              |
| **Styling**       | [Tailwind CSS 4](https://tailwindcss.com/) + Global CSS Design System                                                       |
| **Animations**    | [Framer Motion 12](https://www.framer.com/motion/)                                                                          |
| **Smooth Scroll** | [Lenis](https://github.com/studio-freight/lenis)                                                                            |
| **Carousels**     | [Swiper 12](https://swiperjs.com/) + [React Slick](https://react-slick.neostack.com/)                                       |
| **Gallery**       | [LightGallery](https://www.lightgalleryjs.com/)                                                                             |
| **Forms**         | [React Hook Form](https://react-hook-form.com/) + [Yup](https://github.com/jquense/yup)                                     |
| **Icons**         | [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/) + [Iconify](https://iconify.design/)    |
| **SEO**           | [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) + reCAPTCHA                                                 |
| **Fonts**         | [Outfit](https://fonts.google.com/specimen/Outfit) + [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) |

---

## 📂 Project Structure

```
Website/
├── app/
│   ├── (Pages)/              # Legal pages (Cookies, Privacy, Terms, Legal Notice)
│   ├── Home/                  # Home page
│   ├── about/                 # About page
│   ├── contact-us/            # Contact page
│   ├── services/
│   │   ├── (creative)/        # Branding, Logo, 3D, Content, Video, Social Media
│   │   ├── (digital)/         # SEO, PPC, SMM, Web Dev, Google Ads, Reviews
│   │   ├── (industry)/        # Solutions for Doctors, Lawyers, Restaurants, Startups
│   │   └── (masterPage)/      # All Services overview
│   ├── globals.css            # Global design system & typography
│   ├── layout.js              # Root layout (fonts, metadata, GTM, JSON-LD)
│   ├── page.js                # Landing page
│   ├── robots.js              # Dynamic robots.txt generation
│   └── sitemap.js             # Dynamic sitemap.xml generation
│
├── components/                # Modular UI components
├── data/                      # Global site and services data
├── public/
│   ├── assets/                # Static assets (optimized WebP images & WebM videos)
│   └── llms.txt               # AI-friendly site summary for LLM crawlers
└── next.config.mjs            # Next.js configuration
```

---

## 🎨 Design System

The site uses a **custom typographic hierarchy** defined in `globals.css`:

| Element   | Desktop | Mobile | Purpose                    |
| :-------- | :-----: | :----: | :------------------------- |
| `h1`      |  64px   |  42px  | Page titles                |
| `h2`      |  48px   |  32px  | Section headings           |
| `h3`      |  24px   |  20px  | Feature / button headings  |
| `h4`      |  54px   |  38px  | Premium mid-level headings |
| `h5`      |  24px   |  20px  | Sub-section headers        |
| `h6`      |  20px   |  18px  | Utility captions           |
| `p / .p1` |  24px   |  20px  | Body text                  |
| `.p2`     |  24px   |  18px  | Secondary content          |
| `.p3`     |  18px   |  16px  | Small utility text         |

**Fonts:** Outfit (sans-serif) for body & headings, Playfair Display (serif) for accents.

---

## 🚀 Performance & Optimization

### 🎥 Asset Optimization

- **WebM Video Compression**: All site videos have been compressed under **800KB** using the VP9 codec to ensure fast loading and compliance with Vercel deployment limits.
- **WebP Image Conversion**: Images are standardized to **WebP** format, offering superior compression and quality compared to legacy PNG/JPG formats.

### 🤖 AI Accessibility

- **llms.txt**: Implemented the [`llms.txt`](/public/llms.txt) standard to provide Large Language Models (like ChatGPT, Claude, and Perplexity) with a clean, structured Markdown summary of the website's content and services.
- **AI Crawler Whitelisting**: `robots.js` is explicitly configured to allow major AI bots to crawl and index the site.

---

## 🌐 SEO & Analytics

- **Structured Data (JSON-LD)**: Integrated `Organization` and `WebSite` schemas in the root layout for rich search results.
- **Google Tag Manager**: Integrated for advanced analytics tracking (`GTM-KF3BPC8C`).
- **Dynamic Sitemap**: `next-sitemap` coupled with `app/sitemap.js` for automatic indexing.
- **Metadata Standardization**: Global title template ensures consistent branding: `"%s | SEG - Social Engagement Group"`.
- **Social Sharing**: Optimized Open Graph (OG) and Twitter Card tags across all routes.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/SocialEngagementGroup/website.git
cd website

# Install dependencies
npm install
```

### Development

```bash
# Start dev server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Key Scripts

| Command         | Description                          |
| :-------------- | :----------------------------------- |
| `npm run dev`   | Start development server (Turbopack) |
| `npm run build` | Create production build              |
| `npm start`     | Start production server              |
| `npm run lint`  | Run ESLint checks                    |

---

## 📜 License

This project is **proprietary** and owned by **Social Engagement Group LLC**. All rights reserved.

---

<p align="center">
  <sub>Built with ❤️ by the <strong>Social Engagement Group</strong> team</sub>
</p>
