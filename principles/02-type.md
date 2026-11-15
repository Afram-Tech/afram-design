# Type

## Rules

1. **Montserrat is the only UI face.** No Inter, Outfit or system serif/mono in the product UI.
   (The marketing site may use a serif in long-form news stories only; see
   [apps/afram-website.md](../apps/afram-website.md).)
2. **The scale**, in px: **11** (uppercase overline only), **12, 13, 14, 15, 16, 18, 20, 24, 32,
   40**. Nothing under 11. Nothing between the steps.
3. **Weights**: titles and values **600**; body **400**; overlines **700**. Avoid 300 and below
   for anything a person must read.
4. **Overline** (`af-overline`): 11px / 14px line, 700, `letter-spacing: 0.08em`, uppercase,
   `text-soft`. Use it to label a group, never to repeat the title under it.
5. **Page titles render in capitals** (via `PageHeader`). Everything else is sentence case.
6. **Money, counts, references and account numbers** use `tabular-nums` (`af-num`) so columns
   line up. No monospace font.
7. **Responsive headings** scale with breakpoints, for example `text-[22px] sm:text-[26px]`
   in afram-web's existing pages, or a step up the scale at `sm`.
8. Keep "m²" lower case inside uppercase labels with the `Units` component.

## Typical uses

| Size | Use |
| --- | --- |
| 40 / 32 | Hero figures, landing headlines |
| 24 / 20 | Page and section titles, stat values |
| 18 / 16 | Card titles, modal titles |
| 15 / 14 | Body text, form fields, table cells |
| 13 / 12 | Meta lines, hints, pill labels, table headers |
| 11 | Uppercase overlines only |
