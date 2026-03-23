# UX & Accessibility Journal (Palette)

## Learnings & Patterns

### Mobile Navigation
- **Active State Stability:** Use a permanent border (e.g., `border-t-2 border-transparent`) on nav items to prevent layout shifts when the active state (`border-primary`) is applied.
- **Touch Target Sizing:** Ensure nav items use `flex-1` for equal distribution and adequate touch area on small screens.
- **Icon/Text Balance:** For 5-item bottom navs on mobile (375px-390px), use `text-[9px]` and icon size `18` to avoid crowding while maintaining legibility.

### Responsive Typography
- **Clamped Headers:** Use responsive utility classes (e.g., `text-3xl md:text-5xl lg:text-6xl`) for large display headings (`HARDWARE_REGISTRY`) to ensure they don't overflow on small devices.
- **Data Tables:** For dense information like Bill of Materials, use `truncate` on text columns to prevent horizontal overflow in narrow viewports.

### Layout consistency
- **Footer Responsiveness:** Side-by-side footer elements should stack or lose vertical borders/large padding on mobile (`md:border-l md:pl-8`) to maintain a clean aesthetic.
