# afram-website

The public marketing site (Next.js, Tailwind **v4**, Sanity CMS). **Shares the brand, not the
product kit.**

What it has:

- Its own scales in `src/app/globals.css` `@theme`: `brand-50…950` (teal, `brand-500` =
  `#007481`), `ink-50…950` (neutrals), and sparing accents `gold` (secondary), `sky` (data) and
  `coral` (urgency only). `accent-*` is a per-page accent that defaults to the brand teal.
- Montserrat for UI. A serif is allowed **only inside news stories** (`--font-news-serif`).
- Marketing utilities: `dot-grid`, `duotone-teal`, `wash-mint`, `ring-hairline`, and the
  `rise` / `fade` reveal animations with `--ease-out-soft`.
- `--spacing-card` (32px) is the gap between sibling cards in every card collection.

How to work in it:

1. Use its own `brand-*` / `ink-*` utilities. No hex in components, no Tailwind default palette.
2. `gold`, `sky` and `coral` are sparing accents: one per section at most, never on body text.
3. The marketing site may be more expressive than the app (big type, photography, reveal
   animations), but copy, accessibility, spacing grid and radius rules still apply, and the
   reveal animations must respect `prefers-reduced-motion`.
4. Content comes from Sanity. Don't hardcode copy that belongs in the CMS.

**Note:** `.claude/UI_UX/SKILL.md` in this repo is a mobile UI/UX skill written for a different
product, with a different brand. Ignore its brand section. This design repo is the authority for
Afram.
