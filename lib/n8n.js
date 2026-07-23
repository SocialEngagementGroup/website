// Shared auth for outbound n8n webhook calls.
//
// Every webhook (contact, newsletter, audit) is protected by the same shared
// secret, sent as a request header. In n8n this pairs with a "Header Auth"
// credential on the Webhook node — matching header name and value.
//
// The webhook URLs are unguessable but they are not secrets: they travel
// through logs, proxies and browser history. The header is what actually
// stops anyone who learns a URL from posting junk into the automation.

export const N8N_AUTH_HEADER = "X-Webhook-Secret";

/**
 * Auth headers for an n8n webhook request.
 *
 * @returns {Record<string,string>|null} null when N8N_WEBHOOK_SECRET is unset,
 *   so callers fail closed rather than sending an unauthenticated request that
 *   n8n would reject anyway.
 */
export function n8nAuthHeaders() {
  const secret = process.env.N8N_WEBHOOK_SECRET;
  if (!secret) return null;

  return { [N8N_AUTH_HEADER]: secret };
}
