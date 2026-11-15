# PR design checklist

Agents paste this into the PR description, ticked honestly, with a one-line note on anything
left unticked. Reviewers check the same list.

```markdown
### Design checklist (Afram-Tech/afram-design)
- [ ] Read the Linear ticket's design files and `principles/`
- [ ] Components come from the kit (`@/components/ds`, then `af-*`); nothing re-invented
- [ ] No hex, rgb or Tailwind palette colours for chrome; tokens only
- [ ] No `dark:` pairs where a token carries the dark value
- [ ] Type is Montserrat on the scale (11 overline only, 12–40); money and counts `tabular-nums`
- [ ] Spacing on the 4px grid; radius on the ladder; no card inside a card
- [ ] One primary button per section; at most one Banner and one hero per page; at most one pill per record
- [ ] Every status is a word from `status.ts` via StatusPill / toneForStatus
- [ ] Copy: British spelling, sentence case, verb-first buttons, no em dashes, no emoji, Member/Vendor/Financier
- [ ] Accessible: labels on every field, visible focus, keyboard works, icon buttons labelled, 4.5:1 contrast
- [ ] Responsive: checked at 390, 768 and 1440; no horizontal overflow; tables scroll in place
- [ ] Checked in dark mode
- [ ] `data-testid`, `data-tour`, `data-walkthrough`, ids and `aria-*` intact
- [ ] Screenshots attached (390 / 768 / 1440, light and dark)
- Deviations from the rules, and why: <none>
```
