# Tokens

| File | What it is |
| --- | --- |
| [afram-tokens.css](afram-tokens.css) | Every colour, spacing, radius, shadow and field token, light (`:root`) and dark (`.dark`), plus the Tailwind v4 `@theme inline` block that turns them into utilities |
| [afram-components.css](afram-components.css) | Every component as `af-*` classes in the `components` layer |
| [status.ts](status.ts) | The status vocabulary: `toneForStatus(label)` and `statusLabel(label)` |

**These are snapshots.** The canonical files are in `Afram-Tech/afram-web`:
`src/styles/afram-tokens.css`, `src/styles/afram-components.css`,
`src/components/ds/status.ts`. They came originally from the V11 overhaul in `afram-exchange-v2`.
Refresh with [`scripts/sync-tokens.sh`](../scripts/sync-tokens.sh); `SOURCE.txt` records the
commit each snapshot came from.

## Utility cheat sheet (Tailwind v4)

| Use | Utility |
| --- | --- |
| Text | `text-text-strong` · `text-text-sub` · `text-text-soft` · `text-text-disabled` · `text-text-brand` |
| Page canvas | `bg-bg-app` |
| Surfaces | `bg-bg-white-0` (cards) · `bg-bg-weak-50` (insets, hovers) · `bg-bg-soft-200` (tracks, chips) |
| Lines | `border-stroke-soft-200` · `border-stroke-strong` |
| Brand | `bg-primary-base` · `hover:bg-primary-dark` · `bg-primary-lighter` · `bg-primary-light` · `text-on-primary` |
| States | `{success,warning,error,information,away,verified}-{lighter,light,base,darker}`, e.g. `bg-success-lighter text-success-darker` |
| Deep ground | `bg-deep-950/900/800` · `text-ice` · `text-on-deep` · `text-deep-success` |
| Fields | `bg-field` · `border-field-border` |
| Shadows | `shadow-[var(--shadow-card)]` and `--shadow-raised/float/modal/primary/focus`, or `afram-card`, `afram-float`, `afram-modal`, `afram-shadow-primary` |

## Key values

| Token | Light | Dark |
| --- | --- | --- |
| `--primary-base` | `#007481` | `#007481` |
| `--text-brand` | `#007481` | `#6ccbd8` |
| `--bg-app` | `#f4f6f6` | `#0a1113` |
| `--bg-white-0` | `#ffffff` | `#111a1c` |
| `--text-strong` | `#0f1a1c` | `#eef3f3` |
| `--text-sub` | `#526063` | `#a1b0b3` |
| `--text-soft` | `#627176` | `#869599` |
| `--stroke-soft` | `#e3e8e9` | `#213034` |
| `--deep-950` | `#00262a` | same |

Font: Montserrat. Spacing: 4px grid. Radius: 6, 10, 12, 16, 20, 24, full.
