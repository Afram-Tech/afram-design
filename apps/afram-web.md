# afram-web

The member, vendor and financier app. **The reference implementation of design system v1.**

- Tokens: `src/styles/afram-tokens.css`. Components: `src/styles/afram-components.css`.
  React kit: `src/components/ds/`. Rules: `docs/UI_OVERHAUL.md` (mirrored in this repo's `principles/`).
- Tailwind **v4**, configured in CSS (`src/index.css` `@theme`), not `tailwind.config.js`.
- `cn()` from `lib/utils` for conditional classes.
- Dark mode is `class`-based, but **tokens carry their dark value**: write one class, not a `dark:` pair.
- Branch state (Nov 2026): v1 is on `feat/ui-overhaul`. Until it merges, `develop` still has
  older screens using hex literals (`#007481`, `#171717`, `#5c5c5c`) and `dark:` pairs. When you
  work on a branch that predates the overhaul, run the codemod after merging it:

  ```bash
  node scripts/design-system-codemod.mjs --dry   # counts only
  node scripts/design-system-codemod.mjs         # apply
  ```

- Not yet restyled: `portfolio/buyer/BrowseProjects.tsx` body, and the repayment-terms
  import-schedule modal.
- Screenshots of every area at 1440, 768 and 390, plus dark:
  `cypress/e2e/capture/ui-overhaul*.cy.ts` (stubbed data). Attach the relevant ones to a UI PR.
- Keep `data-testid`, `data-walkthrough`, `data-tour`, ids and `aria-*` intact.
- Code organisation: page = `index.tsx` orchestrator + `components/` + `types.ts` +
  `constants.ts`. Split files over ~200–300 lines. See the repo's `CLAUDE.md`.
