# Component library notes

The React kit lives in afram-web at `src/components/ds/`:

```ts
import { Button, StatusPill, Card, Field, TextInput } from "@/components/ds";
```

**Order of preference:** a `ds` component → an `af-*` class from
[afram-components.css](../tokens/afram-components.css) → tokens. If none fits, propose an
addition to the system in the PR rather than writing a one-off. The older kit in
`src/components/ui/` was restyled onto the system with its props unchanged. Use it when a `ds`
equivalent does not exist (for example `AmountInput`, `CurrencySelectField`, `FileDropzone`).

## Actions

| Component | Use for | Notes |
| --- | --- | --- |
| `Button` | Every button | `variant`: `primary` · `secondary` · `tinted` · `ghost` · `danger` · `link` · `on-deep` · `ghost-deep`. `size`: `sm` 32 · `md` 40 · `lg` 48. Also `icon`, `block`, `loading`. **One primary per section.** `buttonClass()` styles a link as a button |

## Status and feedback

| Component | Use for | Notes |
| --- | --- | --- |
| `StatusPill` | Any status word beside a record | `status` (the word); the tone comes from `toneForStatus`. `size` sm/md, `dot`, `pulse`, `surface` solid/glass. At most one per record |
| `Banner` | An inline message | `tone`: neutral, brand, success, warning, error, info. **At most one per page** |
| `Toast`, `ToastViewport` | Inverse confirmations | `tone` success/error/info. In afram-web call `toast` / `useToast` from `@/hooks`; `toast.loading(msg, {id})` then `toast.success(msg, {id})` morphs one toast |
| `EmptyState` | Before a page has content | `icon` (lucide, never emoji), `title`, `body`, one `action` |

## Surfaces and layout

| Component | Use for | Notes |
| --- | --- | --- |
| `Card`, `CardHeader`, `SectionTitle` | White surfaces | `Card`: `interactive`, `pad`, `as`. `CardHeader`: `title`, `sub`, `icon`, `action`. Panels inside a card use `af-inset`, never a second card |
| `StatCard` | One number that matters | `label`, `value`, `unit`, `icon`, `meta`. Sits straight on the canvas |
| `PageHeader` | A page's title bar | `title` (rendered uppercase), `count`, `sub`, `actions` |
| `HeroBanner`, `DeepGround` | The deep-teal brand moment | **One per screen.** `HeroBanner`: `eyebrow`, `title`, `body`, `actions`, `aside` |
| `WashGround`, `RingMeter` | The light wash behind dashboard banners; a figure in a ring | |
| `IconChip` | An icon in a tinted square | `tone`, `size` sm/md/lg |
| `Modal` | Simple dialogs | `width` 480 · 560 · 760. `title`, `sub`, `icon`, `footer`. Escape and outside click close it. Multi-step work goes in a drawer, not a modal |

## Forms

| Component | Use for | Notes |
| --- | --- | --- |
| `Field` | Wrap every control | `label` above, `hint` or `error` below, `aside`, `required` |
| `TextInput`, `TextArea` | Text entry | The light-teal well. `icon`, `affix` (e.g. "GHA-"), `trailing`, `invalid` |
| `Checkbox`, `Switch` | On/off | |
| `RadioCard` | 2 to 5 answers | `selected`, `onSelect`, `icon`, `title`, `body` |
| `SegmentedControl` | Filter a list in place | `items`, `value`, `onChange`, `size` |
| `UnderlineTabs` | Switch between sections | `items`, `value`, `onChange` |

Forms use **react-hook-form + zod**. `formik` and `yup` are stale: do not add new usages.

## Documents

| Component | Use for |
| --- | --- |
| `FileIcon` | A file-format badge (pdf, doc, xls, ppt, img, video, zip) |
| `FileRow` | A document in a list: `name`, `fileName`, `meta`, `tag`, `status`, `actions`, `empty` |
| `FileSlot` | An upload slot for a required document |

Always these. Never a custom document tile.

## Other

| Component | Use for |
| --- | --- |
| `Units` | Keeps "m²" lower case inside uppercase labels |

## `af-*` classes for markup not worth a component

`af-btn`, `af-pill`, `af-card`, `af-inset`, `af-control`, `af-table`, `af-drawer`, `af-steps`,
`af-bar`, `af-seg`, `af-tabs`, `af-file-row`, `af-tile` (property tiles), `af-overline`,
`af-num`, `af-spin`, and the rest in [afram-components.css](../tokens/afram-components.css).

## Shared shells in afram-web (not yet in `ds`)

- `StepFlowDrawer` (`components/layouts/drawers/shell`): every multi-step creation flow.
- `LegalDocumentUploads` + `FileDropDialog`: legal-document steps.
- `ReviewRow` (`components/listing`): review steps.

## Asked for, not yet in the system

A vertical step rail, range slider, toggle chip, `OtpInput` (local:
`components/auth/OtpInput.tsx`), `Select` (local:
`components/onboarding/modern/shared/SelectControl.tsx`), `Avatar`, a link variant of
`af-tabs__item`, and promoting the drawer shell and `FileDropDialog` into `ds`. If your ticket
needs one, use the local version and say so in the PR.
