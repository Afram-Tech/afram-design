# Layout and responsiveness

**Every page and component must work at mobile, tablet and desktop.** A change is not complete
until it has been checked at **390, 768 and 1440 px** wide, in light and dark.

## Rules

1. **Mobile-first.** Base styles are for the phone; add breakpoints upward: `sm` 640, `md` 768
   (tablet), `lg` 1024, `xl` 1280.
2. **Grids collapse.** Never ship a fixed multi-column grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
3. **Responsive padding**: `px-4 sm:px-8`, not one fixed value.
4. **Tables** sit in `overflow-x-auto` with a sensible `min-w-[…]`, so they scroll sideways on a
   phone instead of breaking the page. For the smallest screens, consider a stacked card view.
5. **No horizontal page overflow, ever.** Use `min-w-0`, `truncate` and `flex-wrap` to contain
   content.
6. **Hide what isn't essential** on small screens (`hidden sm:block`), but primary actions stay
   reachable.
7. **Touch targets are at least 40px** (buttons `md` 40 / `lg` 48). A `sm` 32px button needs
   extra hit area on touch.
8. In afram-web, the deal trackers scroll inside a pane, not the page. Keep that structure.

## Page anatomy (afram-web)

```
┌ sidebar ┐┌───────────────────────────── bg-app canvas ─────────────────────────────┐
│         ││ PAGE HEADER (uppercase title · count)                       [Action]    │
│ nav     ││                                                                          │
│         ││ [HeroBanner / DeepGround]   ← at most one, dashboards only               │
│ Account ││ [StatCard] [StatCard] [StatCard]   ← straight on the canvas              │
│         ││ ┌ Card ──────────────────────────┐ ┌ Card ─────────────┐                 │
│         ││ │ CardHeader            [action] │ │                   │                 │
│         ││ │ hairline row                   │ │                   │                 │
│         ││ │ hairline row                   │ │                   │                 │
│         ││ └────────────────────────────────┘ └───────────────────┘                 │
└─────────┘└──────────────────────────────────────────────────────────────────────────┘
```
