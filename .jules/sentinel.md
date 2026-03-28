# Sentinel Security Journal

## 2026-03-23 - Defense-in-depth Security Headers

**Vulnerability:** Missing standard security headers (Clickjacking, MIME-sniffing).
**Learning:** Standard security headers were not being set, leaving the application vulnerable to various attacks like clickjacking and unintended MIME-sniffing.
**Prevention:** Implement a global hook in `src/hooks.server.ts` that ensures headers like `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy` are applied to every response, including those from authentication handlers.
