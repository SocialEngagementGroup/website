/**
 * Canonical site origin.
 *
 * The production deployment serves from the `www` host — the apex
 * (socialengagementgroup.com) redirects to it. Every canonical URL, sitemap
 * entry, robots directive, Open Graph URL and JSON-LD `url`/`@id` must use the
 * host below, or search engines receive a self-contradicting signal: a
 * canonical tag pointing at a URL the server itself redirects away from.
 *
 * Import this constant rather than hardcoding the origin. It was previously
 * duplicated across six files and public/llms.txt, and drifted.
 */
export const SITE_URL = "https://www.socialengagementgroup.com";

/** Stable @id for the Organization entity, so all pages reference one node. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** Stable @id for the WebSite entity. */
export const WEBSITE_ID = `${SITE_URL}/#website`;
