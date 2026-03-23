## 2025-05-22 - [Security Headers Enhancement]

**Vulnerability:** Missing defense-in-depth security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).
**Learning:** SvelteKit provides a robust `handle` hook system, but standard security headers are not included by default and must be manually configured for complete protection.
**Prevention:** Always implement a dedicated security headers hook in new SvelteKit projects to ensure all responses carry necessary protection.
