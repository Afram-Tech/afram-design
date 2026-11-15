# Per-repo notes

The three products are at different points on the way to design system v1. Read the note for
the repo you are changing.

| Repo | Stack | On design system v1? | Note |
| --- | --- | --- | --- |
| `afram-web` | React 18, Vite, Tailwind v4 | **Yes**, on `feat/ui-overhaul` (not yet on `develop`) | [afram-web.md](afram-web.md) |
| `afram-dashboard` | React, Vite, Tailwind v3, shadcn, some MUI | **No.** Own iOS-style shadcn theme, legacy palette | [afram-dashboard.md](afram-dashboard.md) |
| `afram-website` | Next.js, Tailwind v4 | **Partly.** Same teal and Montserrat, its own marketing scales | [afram-website.md](afram-website.md) |

The principles in [`principles/`](../principles/) apply to all three. What differs is which
tokens and components exist in each.
