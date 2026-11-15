# Composition: calm cards

How much goes on a screen. These rules are what most reviews catch.

1. **One headline per card.** No overline that repeats the title.
2. **At most one pill per record.** Other facts go in one 12px `text-soft` meta line joined with " · ".
3. **Titles and values 600, body 400.**
4. **Hairline rows rather than boxes in boxes.** Inside a card, separate items with a
   `stroke-soft` hairline; use `af-inset` for a grouped panel. Never a card inside a card.
5. **At most one `Banner` per page.**
6. **At most one hero** (`HeroBanner` / `DeepGround`) per screen.
7. **One primary button per section.** Others are secondary, ghost or link.
8. **Documents** are always `FileIcon` / `FileRow` / `FileSlot`, never a custom tile.
9. **Empty states** use `EmptyState` with a lucide icon (never emoji), one sentence, one action.
10. **Modals** are 480, 560 or 760 wide, for simple decisions. Anything with steps is a drawer
    (`StepFlowDrawer` in afram-web): one header with the flow overline and step count, a
    segmented progress bar, one error `Banner`, a weak footer with Back and the forward action.
11. **Choices**: 2–5 options → `RadioCard`; filtering a list in place → `SegmentedControl`;
    switching sections → `UnderlineTabs`.

## Smell test

If a reviewer squints at the screen, they should see: one title, one thing that matters most,
one obvious action. If they see a patchwork of boxes, colours and pills, simplify.
