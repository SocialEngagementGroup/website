/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.socialengagementgroup.com',
  generateRobotsTxt: true,
  exclude: ['/robots.txt', '/sitemap.xml'],
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
};
