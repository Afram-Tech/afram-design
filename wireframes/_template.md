# <Area>: <screen name>

**Who:** Member / Vendor / Financier · **Repo:** afram-web · **Route:** `/…`

**Job:** One sentence. What the person is here to do.
**Primary action:** The one button that matters.

## Layout (mobile first)

```
┌──────────────────────────────┐
│ PAGE TITLE           [Action]│
│ meta · meta                  │
├──────────────────────────────┤
│ Card: <title>                │
│  row ───────────── value     │
│  row ───────────── value     │
└──────────────────────────────┘
```

At `lg` and up: describe what changes (columns, sidebar, what moves).

## Components

| Region | Component | Notes |
| --- | --- | --- |
| Header | `PageHeader` | count shown |
| … | `Card` + hairline rows | |

## States

- Loading: skeleton rows
- Empty: `EmptyState`, icon `…`, text "…", action "…"
- Error: one `Banner` tone error, text "…"
- Statuses that appear: Pending, Approved, … (all in `status.ts`)

## Copy

All visible strings, in final wording.
