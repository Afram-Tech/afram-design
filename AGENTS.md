# AGENTS.md

This repo is documentation, not an app. Start at [README.md](README.md): its first section
tells you what to read and in what order before a UI change in any Afram repo.

When editing this repo itself:

- Keep rules short and testable. A rule an agent cannot check in code does not belong in `principles/`.
- Do not hand-edit `tokens/afram-tokens.css`, `tokens/afram-components.css` or `tokens/status.ts`.
  They are snapshots; change them in afram-web and run `scripts/sync-tokens.sh`.
- British spelling, sentence case, no em dashes, no emoji. The same copy rules as the product.
