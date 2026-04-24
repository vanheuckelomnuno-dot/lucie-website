import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  // Next.js requires unsafe-inline for hydration chunks; unsafe-eval for some dev tooling
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Tailwind/framer-motion inject inline styles at runtime
  "style-src 'self' 'unsafe-inline'",
  // next/font downloads fonts at build time and self-hosts them — no external font CDN needed
  "font-src 'self'",
  // All image sources used across the site
  "img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://me7aitdbxq.ufs.sh",
  // Google Maps iframe in contact section
  "frame-src https://maps.google.com https://www.google.com",
  // Prevent this page from being embedded in foreign iframes (clickjacking)
  "frame-ancestors 'none'",
  // WhatsApp/API calls only go to our own origin
  "connect-src 'self'",
  "media-src 'self'",
  // Block plugins (Flash, etc.)
  "object-src 'none'",
  // Prevent base-tag hijacking
  "base-uri 'self'",
  // Forms may only submit to our own origin
  "form-action 'self'",
  // Upgrade any accidental http:// subrequests to https://
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Force HTTPS for 2 years, include subdomains, eligible for preload list
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Block this site from being embedded in iframes (legacy browsers)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Legacy XSS filter for older IE/Edge
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Only send origin in Referer header for cross-origin requests
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features we don't use
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
      "accelerometer=()",
      "gyroscope=()",
      "magnetometer=()",
    ].join(", "),
  },
  // Main content security policy
  {
    key: "Content-Security-Policy",
    value: csp,
  },
  // Prevent cross-origin information leaks
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "unsafe-none",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "me7aitdbxq.ufs.sh",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // Disable the X-Powered-By: Next.js header (reveals technology stack)
  poweredByHeader: false,
};

export default nextConfig;
