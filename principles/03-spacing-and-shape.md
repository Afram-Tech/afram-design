# Spacing, radius and depth

## Spacing: a 4px grid

Allowed steps: **2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64** px (`--space-*`). In Tailwind
that is `0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16`. Avoid arbitrary values such as `p-[13px]`.

| Where | Spacing |
| --- | --- |
| Inside a pill or chip | 4–8 horizontal |
| Inside a field or button | 12–16 horizontal |
| Inside a card | 20–24 (16 on mobile) |
| Between items in a card | 12–16 |
| Between cards | 16–24 (marketing site card grids: `--spacing-card`, 32) |
| Page gutter | 16 mobile, 32 from `sm` (`px-4 sm:px-8`) |
| Between page sections | 32–48 |

## Radius ladder

| Radius | Use |
| --- | --- |
| full (pill) | Buttons, segmented controls, pills, toggles |
| 24 | Heroes, modals, drawers |
| 20 | Cards |
| 16 | Panels inside cards (`af-inset`) |
| 12 | Inputs and selects |
| 10, 6 | Small chips, file badges |

Anything else gets snapped: 14 → 16, 22 → 24.

## Depth

1. **Every raised surface has a 1px `stroke-soft` edge plus its shadow.**
2. Shadows by role: `--shadow-card` (cards), `--shadow-raised` (hover lift), `--shadow-float`
   (menus, popovers), `--shadow-modal` (modals, drawers), `--shadow-primary` (the primary button),
   `--shadow-focus` (focus ring).
3. **Never a shadowed card inside a card.** Inside a card, use `af-inset` (weak fill, 16 radius,
   no shadow) or hairline rows.
4. Stat cards on a dashboard sit straight on the `bg-app` canvas.
