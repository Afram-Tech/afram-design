# afram-design

The single source of design truth for Afram's products. **Agents read this repo before any UI
change and follow it.** Humans review the result against the same rules.

Products it covers: `afram-web` (the app), `afram-dashboard` (internal admin) and
`afram-website` (marketing site).

---

## If you are an agent making a UI change, do this

1. **Read the ticket's own design files first.** Designs for a specific change are attached to
   its Linear ticket. They win over anything here for *that* screen's layout and content.
2. **Read [`principles/`](principles/) in full.** It is short. These rules apply to every
   screen, whatever the ticket's design shows. If a ticket's design breaks one, follow the
   rule and say so in the PR.
3. **Check what the target repo already uses** in [`apps/`](apps/). The three repos are at
   different stages of moving onto design system v1, and the notes say what to do in each.
4. **Build from the component kit** in [`components/`](components/README.md) before writing
   new markup. Do not invent a component that exists.
5. **Use tokens, never raw hex**, from [`tokens/`](tokens/README.md).
6. **Look at the live design system through MCP** (the `afram-design` server; see
   [`mcp/`](mcp/README.md) and [`design-system.md`](design-system.md)) when you need a value
   or component detail that is not written down here.
7. **Before you open the PR**, go through [`templates/pr-design-checklist.md`](templates/pr-design-checklist.md)
   and paste the completed checklist into the PR description.

If two sources disagree, the order of precedence is:

> Linear ticket's design files (that screen only) → `principles/` → `components/` and
> `tokens/` → the existing code in the repo → your own judgement.

When you are unsure, choose the calmer, plainer option and flag it in the PR. Do not guess
silently.

---

## What is where

| Path | What it holds |
| --- | --- |
| [`principles/`](principles/) | Design principles and UI rules: spacing, type, colour, tone and copy, accessibility, layout and responsiveness, motion |
| [`tokens/`](tokens/README.md) | Design tokens (CSS custom properties + Tailwind v4 utilities), the `af-*` component classes and the status vocabulary. A snapshot of the canonical files in afram-web |
| [`components/`](components/README.md) | Component library notes: what each component is for, its props and when not to use it |
| [`apps/`](apps/) | Per-repo notes: which system each repo is on and how to work in it |
| [`prototypes/`](prototypes/README.md) | HTML prototypes. Open in a browser |
| [`wireframes/`](wireframes/README.md) | Low-fidelity wireframes for flows not yet built |
| [`design-system.md`](design-system.md) | Links to the design system itself (artifact, Figma) and how agents reach it |
| [`mcp/`](mcp/README.md) | The `afram-design` MCP server that serves this repo to agents |
| [`templates/`](templates/) | Linear UI ticket template and the PR design checklist |
| [`scripts/`](scripts/) | Keeping the token snapshot in sync with afram-web |

---

## For humans

- **Changing a rule:** open a PR here. Rules change in this repo first, then in code.
- **Changing a token or component:** change it in `afram-web` (`src/styles/`,
  `src/components/ds/`), then run `scripts/sync-tokens.sh` here and commit the snapshot.
- **Attaching designs to a ticket:** use [`templates/linear-ui-ticket.md`](templates/linear-ui-ticket.md).
- Origin: the 11 Nov 2026 agentic development meeting. Design files live in the org, and the
  agent gets read access to them so it can make UI changes before human review.
# afram-design
