## 2026-03-21 - [Better Auth Session Optimization in SvelteKit Hook]

**Learning:** Calling `auth.api.getSession` in a SvelteKit hook for every request is redundant for Better Auth's own API routes (`/api/auth/*`). The `svelteKitHandler` already performs its own session management for these routes. Skipping this lookup for these specific paths avoids unnecessary database roundtrips.
**Action:** Always wrap session lookup in SvelteKit hooks with a check to skip `/api/auth` (or the configured `basePath`) to improve performance on auth-related endpoints.
