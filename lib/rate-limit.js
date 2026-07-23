import { NextResponse } from "next/server";

// Fixed-window in-memory rate limiter, keyed on client IP.
//
// Scope caveat: the store lives in one server instance. On serverless each
// warm instance keeps its own Map, so the real ceiling is
// `limit × concurrent instances`. This stops casual abuse and accidental
// hammering; it is not a hard global cap. For that you want the limiter at
// the edge (Cloudflare/WAF rule) or a shared store such as Upstash Redis.

const buckets = new Map();
const MAX_ENTRIES = 5000;

// Headers set by a trusted proxy in front of the app. A client cannot forge
// these end-to-end, because the proxy overwrites whatever it was sent.
//
// `x-forwarded-for` is deliberately not in this list: any client can send it
// and its first entry is attacker-controlled. It is used only as a last
// resort below, when no trusted proxy header is present.
const TRUSTED_IP_HEADERS = [
  "cf-connecting-ip", // Cloudflare
  "x-vercel-forwarded-for", // Vercel
  "true-client-ip", // Akamai, Cloudflare Enterprise
  "x-real-ip", // nginx and most reverse proxies
];

function getClientIp(req) {
  for (const header of TRUSTED_IP_HEADERS) {
    const value = req.headers.get(header);
    if (value) return value.split(",")[0].trim();
  }

  // Best effort. Spoofable, so a deployment that lands here should add a
  // proxy that sets one of the headers above.
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return "unknown";
}

// Drop entries whose window has closed. Runs on write, bounded by MAX_ENTRIES.
function prune(now, windowMs) {
  for (const [key, entry] of buckets) {
    if (now - entry.startTime > windowMs) buckets.delete(key);
  }
}

/**
 * @returns {NextResponse|null} a 429 response when over the limit, else null.
 */
export function rateLimit(req, limit = 5, windowMs = 60 * 1000) {
  // Keyed on IP alone. Folding User-Agent (or any other client-controlled
  // header) into the key hands the caller a fresh bucket per forged value,
  // which defeats the limit entirely.
  const key = getClientIp(req);

  const now = Date.now();
  const entry = buckets.get(key);

  // Fresh key, or the previous window has closed.
  if (!entry || now - entry.startTime > windowMs) {
    if (buckets.size >= MAX_ENTRIES) {
      prune(now, windowMs);
      // Still full of live windows: evict the least recently touched.
      if (buckets.size >= MAX_ENTRIES) {
        buckets.delete(buckets.keys().next().value);
      }
    }

    buckets.delete(key);
    buckets.set(key, { count: 1, startTime: now });
    return null;
  }

  // LRU bump: re-inserting moves the key to the newest position, so the
  // eviction above drops genuinely idle callers rather than active ones.
  buckets.delete(key);
  buckets.set(key, entry);

  if (entry.count >= limit) {
    const retryAfter = Math.max(
      1,
      Math.ceil((entry.startTime + windowMs - now) / 1000)
    );

    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
          "RateLimit-Limit": String(limit),
          "RateLimit-Remaining": "0",
          "RateLimit-Reset": String(retryAfter),
        },
      }
    );
  }

  entry.count += 1;
  return null;
}
