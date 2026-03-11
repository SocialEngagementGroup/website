import { NextResponse } from "next/server";

// Simple in-memory rate limiter using Map with LRU eviction.
// Limits the map to 5000 entries to prevent memory DoS.
const rateLimitMap = new Map();
const MAX_ENTRIES = 5000;

export function rateLimit(req, limit = 5, windowMs = 60 * 1000) {
  // Extract IP securely. 
  // 1. `req.ip` is provided securely by Next.js on platforms like Vercel.
  // 2. `x-real-ip` is set securely by most reverse proxies (Nginx, Cloudflare).
  // 3. Prevent spoofing by prioritizing trusted headers over `x-forwarded-for`.
  
  let forwardedIp = "127.0.0.1";
  const forwardedHeader = req.headers.get("x-forwarded-for");
  if (forwardedHeader) {
    // If multiple IPs are forwarded, the first one is theoretically the original client.
    // However, an attacker can prepend spoofed IPs. Prioritizing req.ip/x-real-ip mitigates this.
    forwardedIp = forwardedHeader.split(",")[0].trim();
  }

  const ip = req.ip || req.headers.get("x-real-ip") || forwardedIp;
  const userAgent = req.headers.get("user-agent") || "unknown";
  const clientKey = `${ip}-${userAgent}`;

  const now = Date.now();
  const userData = rateLimitMap.get(clientKey);

  // Implement LRU: bump to the "newest" position in the Map by deleting and re-inserting
  if (userData) {
    rateLimitMap.delete(clientKey);
    rateLimitMap.set(clientKey, userData);
  }

  if (!userData) {
    // Prevent memory DoS by maintaining a max capacity
    if (rateLimitMap.size >= MAX_ENTRIES) {
      const oldestKey = rateLimitMap.keys().next().value;
      rateLimitMap.delete(oldestKey);
    }

    rateLimitMap.set(clientKey, {
      count: 1,
      startTime: now,
    });
    return null; // Allowed
  }

  // Check if window has expired
  if (now - userData.startTime > windowMs) {
    rateLimitMap.set(clientKey, {
      count: 1,
      startTime: now,
    });
    return null; // Allowed
  }

  // Window hasn't expired, check limit
  if (userData.count >= limit) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 } // 429 Too Many Requests
    );
  }

  // Increment counter
  userData.count += 1;
  return null; // Allowed
}
