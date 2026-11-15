# afram-dashboard

Internal admin dashboard. **Not yet on design system v1.**

What it has today:

- Tailwind **v3** with `tailwind.config.js`, shadcn (`new-york`, base `zinc`) with HSL variables
  in `src/index.css`, plus some MUI and styled-components.
- An "iOS grouped list" theme: grey canvas, white cards, a floating white capsule for the active
  sidebar row. Primary is the Afram teal (`187 100% 25%` ≈ `#007481`).
- The legacy Figma-export palette in `tailwind.config.js` (`waterworld`, `candy-grape-fizz`,
  `wasabi`, `palette.text`… with `-mode-1` suffixes).
- System font stack (SF Pro, Inter, Outfit). **Montserrat is not the body face here yet.**

How to work in it until it migrates:

1. Follow every rule in `principles/` that doesn't depend on v1 tokens: copy, accessibility,
   composition, responsiveness, the spacing grid, the radius ladder, the status vocabulary.
2. For colour, use the shadcn semantic utilities (`bg-background`, `bg-card`, `text-foreground`,
   `text-muted-foreground`, `bg-primary`, `border-border`), **not** the `-mode-1` palette or hex.
3. Don't introduce MUI or styled-components in new UI. Prefer shadcn + Tailwind.
4. Don't add a new font. Don't restyle the whole dashboard inside a feature ticket.
5. Map status words to tones with the same vocabulary as [tokens/status.ts](../tokens/status.ts).

Migration to v1 (tokens, Montserrat, `ds` kit) is a separate piece of work; when it lands,
update this note.
