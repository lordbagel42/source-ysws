# Source — Design System

> **Theme:** Terminal Brutalism — "The Sovereign Console"

---

## 1. Visual Theme & Atmosphere

A brutalist hacker-centric aesthetic inspired by CRT terminals and raw command-line interfaces. High-voltage neon accents punch through charcoal surfaces. No soft gradients, no rounded corners, no drop shadows. Every element earns its screen space through structural clarity and tonal contrast.

**Mood keywords:** sovereign, uncompromising, high-voltage, monolithic, precision-engineered.

---

## 2. Color Palette & Roles

### Primary — Electric Green

| Role                   | Hex       | Usage                              |
| ---------------------- | --------- | ---------------------------------- |
| `primary`              | `#00FF41` | CTAs, active states, key accents   |
| `on-primary`           | `#003907` | Text/icons on primary backgrounds  |
| `primary-container`    | `#00530E` | Filled badges, secondary CTAs      |
| `on-primary-container` | `#EBFFE2` | Text on primary-container          |

### Secondary — Cybernetic Cyan

| Role                     | Hex       | Usage                           |
| ------------------------ | --------- | ------------------------------- |
| `secondary`              | `#00E3FD` | Links, focus rings, info accent |
| `on-secondary`           | `#001F24` | Text on secondary backgrounds   |
| `secondary-container`    | `#00616D` | Status chips, tags              |
| `on-secondary-container` | `#BDF4FF` | Text on secondary-container     |

### Tertiary — Hazard Yellow

| Role                    | Hex       | Usage                       |
| ----------------------- | --------- | --------------------------- |
| `tertiary`              | `#F0FF00` | Warnings, streak highlights |
| `on-tertiary`           | `#002203` | Text on tertiary            |
| `tertiary-container`    | `#004F58` | Tertiary container fills    |
| `on-tertiary-container` | `#9CF0FF` | Text on tertiary-container  |

### Surface Hierarchy

| Role                      | Hex       | Usage                                    |
| ------------------------- | --------- | ---------------------------------------- |
| `surface`                 | `#131313` | Page background                          |
| `surface-container-low`   | `#1C1B1B` | Card backgrounds                         |
| `surface-container`       | `#201F1F` | Elevated panels, dialogs                 |
| `surface-container-high`  | `#2A2A2A` | Headers, nav bars, top-bar accents       |
| `surface-container-highest`| `#353534` | Highest-emphasis surface (active states) |
| `on-surface`              | `#E5E2E1` | Primary text on surfaces                 |
| `on-surface-variant`      | `#C6C6C7` | Secondary text, descriptions             |
| `surface-dim`             | `#0E0E0E` | Backdrops, overlays                      |

### Error — Neon Coral

| Role                  | Hex       | Usage                            |
| --------------------- | --------- | -------------------------------- |
| `error`               | `#FFB4AB` | Error text, destructive accents  |
| `on-error`            | `#690005` | Text on error backgrounds        |
| `error-container`     | `#93000A` | Error badge backgrounds          |
| `on-error-container`  | `#FFDAD6` | Text on error-container          |

### Outline & Borders

| Role              | Hex       | Usage                              |
| ----------------- | --------- | ---------------------------------- |
| `outline`         | `#84967E` | Muted Sage — structural borders    |
| `outline-variant` | `#3B4B37` | Subtle card borders, divider lines |

---

## 3. Typography Rules

| Role      | Font           | Weight  | Transform   | Notes                              |
| --------- | -------------- | ------- | ----------- | ---------------------------------- |
| Headlines | Space Grotesk  | 700     | `uppercase` | Monospace-feel geometric sans      |
| Labels    | Space Grotesk  | 500–600 | `uppercase` | Navigation, chips, status text     |
| Body      | Inter          | 400     | `none`      | Readable body copy, descriptions   |
| Mono/Code | JetBrains Mono | 400     | `none`      | Fallback: `monospace`              |

**Scale:** Headings step through `3rem → 2rem → 1.5rem → 1.25rem`. Body at `1rem / 1.6` line-height.

---

## 4. Component Stylings

### Buttons

- **Border-radius:** `0px` — hard rectangular edges, no rounding
- **Border:** `2px solid` — primary color for primary buttons, outline for secondary
- **Hover:** 2px hard-shadow offset (`2px 2px 0 primary`) — no blur, no softness
- **Active:** Invert fill (bg becomes primary, text becomes on-primary)
- **Disabled:** 38% opacity, no border change

### Cards

- **Background:** `surface-container-low` (`#1C1B1B`)
- **Border:** `2px solid outline-variant` (`#3B4B37`)
- **Header bar:** `surface-container-high` (`#2A2A2A`) as a distinct top strip
- **Border-radius:** `0px`
- **Hover:** Border shifts to `outline` (`#84967E`)

### Inputs

- **Background:** `surface-dim` (`#0E0E0E`)
- **Border:** `2px solid outline-variant` (`#3B4B37`)
- **Font:** monospace (JetBrains Mono / Space Grotesk)
- **Focus:** Border becomes `secondary` (`#00E3FD`), subtle glow optional
- **Border-radius:** `0px`
- **Placeholder color:** `on-surface-variant` at 50% opacity

### Status Chips

- **Background:** `secondary-container` (`#00616D`)
- **Text:** `on-secondary-container` (`#BDF4FF`)
- **Border-radius:** `0px`
- **Border:** `1px solid secondary` (`#00E3FD`)

### Navigation

- **Active link:** `primary` text (`#00FF41`) with 2px bottom border
- **Inactive link:** `on-surface-variant` (`#C6C6C7`)
- **Hover:** Text shifts to `on-surface` (`#E5E2E1`)

---

## 5. Layout Principles

1. **Tonal stepping for depth** — No box-shadows. Use surface hierarchy (`#131313` → `#1C1B1B` → `#2A2A2A`) to create visual layers.
2. **2px structural borders** — Define regions with `outline-variant` borders, not shadows or gradients.
3. **Intentional asymmetry** — Offset grid columns, uneven padding, left-heavy layouts with right-aligned metadata.
4. **"No-Line" rule** — Prefer background color shifts over `<hr>` or visible dividers. Use tonal stepping to separate sections.
5. **Dense information layout** — Maximize data density. Tight vertical rhythm, compact spacing. This is a mission console, not a marketing page.
6. **Full-width sections** — Hero and section blocks span the viewport. Content is constrained within to `max-width: 1280px`.

---

## 6. Design System Notes for Stitch Generation

Include this block in every Stitch prompt to maintain consistency:

```
DESIGN SYSTEM — Terminal Brutalism "The Sovereign Console"
- Dark theme: surface #131313, container-low #1C1B1B, container-high #2A2A2A
- Primary: Electric Green #00FF41, on-primary #003907
- Secondary: Cybernetic Cyan #00E3FD, secondary-container #00616D
- Error: Neon Coral #FFB4AB
- Outline: Muted Sage #84967E, outline-variant #3B4B37
- Fonts: Space Grotesk (headlines/labels, uppercase), Inter (body)
- Border-radius: 0px everywhere. No rounded corners.
- No shadows. Use tonal surface stepping for depth.
- Borders: 2px solid outline-variant for structure, primary for emphasis
- Buttons: hard-shadow hover (2px 2px 0), no blur
- Dense layout, intentional asymmetry, full-width sections
```
