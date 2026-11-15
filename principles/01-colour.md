# Colour

Full values: [tokens/afram-tokens.css](../tokens/afram-tokens.css). Utilities: [tokens/README.md](../tokens/README.md).

## Rules

1. **No hex in `className` or inline styles for interface chrome.** Use a token utility
   (`text-text-strong`, `bg-bg-white-0`, `border-stroke-soft-200`, `bg-primary-base`…).
   The only exceptions are chart data series, photos and third-party logos.
2. **One brand colour: Afram teal** `--primary-base` `#007481`. Hover is `--primary-dark`; tints
   are `--primary-lighter` / `--primary-light`. No secondary brand colour on chrome. (The old
   "Candy Grape Fizz" purple is retired from new UI.)
3. **Write one class, not a `dark:` pair.** Tokens carry their dark value under `.dark`. A
   `dark:` variant is only for something that has no token.
4. **Text has four levels**: `text-strong` (titles, values), `text-sub` (body), `text-soft`
   (meta), `text-disabled`. Teal text and icons use `text-brand`, which stays readable in dark.
5. **Surfaces**: page canvas `bg-app`; cards and sheets `bg-white-0`; insets and hovers
   `bg-weak-50`; tracks and chips `bg-soft-200`.
6. **State colours mean one thing each** and are only reached through `StatusPill`,
   `toneForStatus()`, `Banner` or `IconChip`:

   | Tone | Means |
   | --- | --- |
   | success | Done, approved, open to buy |
   | away | Waiting on someone else |
   | warning | The person must act |
   | error | Failed, declined, late |
   | information | A transaction stage in motion |
   | verified | Identity or document checked |

   Fills use `-lighter`, marks use `-base`, text on a fill uses `-darker`.
7. **The deep ground** (`deep-950/900/800`, `ice`, `on-deep`) is the brand moment: the hero
   banner, welcome and tour. **One per screen.** It looks the same in light and dark.
8. **Overlays** behind modals and drawers use `--scrim` (deep-teal), never black.
9. **Gradients**: none on buttons, cards or text. The deep ground may carry its glow.

## Don't

- Don't use Tailwind's palette (`gray-500`, `blue-600`, `bg-white`) in new UI. Use tokens.
- Don't use the legacy `primary-50…900` / `success-50…900` scales in new UI. They still resolve
  so old screens render, but they are on their way out.
- Don't colour a status yourself. Add the word to `status.ts`.
