# Accessibility

Target: **WCAG 2.2 AA** in light and dark.

## Contrast (checked against the tokens)

| Pair | Ratio | |
| --- | --- | --- |
| `text-strong` on `bg-app` | 16.3 | AA |
| `text-sub` on `bg-white-0` | 6.5 | AA |
| `text-soft` on `bg-white-0` | 5.1 | AA |
| `text-soft` on `bg-app` | 4.7 | AA, just. Don't put `text-soft` on anything darker than `bg-app` |
| White on `primary-base` | 5.5 | AA |
| `text-brand` on `field` | 5.2 | AA |
| State `-darker` on `-lighter` | 7.8 – 10.9 | AA |
| Dark: `text-soft` on `bg-white-0` | 5.7 | AA |
| `text-disabled` on white | 1.9 | Disabled only. Never for content someone must read |

If you put text on a new background combination, check it is at least 4.5:1 (3:1 for 18px+ or
14px+ bold).

## Rules

1. **Never colour alone.** Status is a word plus a tone; errors have text; charts have labels or
   a legend.
2. **Every input has a visible label** (`Field` puts it above). Placeholder text is not a label.
   Errors sit under the field and are linked with `aria-describedby`.
3. **Focus is always visible**: `--shadow-focus` ring. Never `outline: none` without a replacement.
4. **Keyboard**: everything clickable is a `button` or `a`, reachable by Tab, in reading order.
   Modals trap focus, close on Escape, and return focus to what opened them.
5. **Icon-only buttons** have an `aria-label`. Decorative icons are `aria-hidden`.
6. **Touch targets** at least 40×40px.
7. **Motion**: respect `prefers-reduced-motion`. No animation longer than 300ms for UI feedback.
   Nothing flashes.
8. **Images** that carry meaning have `alt`; property photos describe the property.
9. **Keep `data-testid`, `data-walkthrough`, `data-tour`, ids and `aria-*` intact** when
   restyling. Tests and the product tour target them.
10. **Language**: `lang="en-GB"`. Use real headings in order (`h1` once per page).
