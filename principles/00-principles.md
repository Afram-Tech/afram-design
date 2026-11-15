# Principles

Afram moves people through the biggest purchase of their lives: a home, its financing and years
of repayments. The interface has to feel **calm, trustworthy and exact**. "Calm surfaces and firm
edges, one teal and one font, one way to draw each component."

## 1. Every screen has one obvious next step

A person should never wonder what to tap, whether something worked, or where they are in a deal.
One primary button per section. The stage a deal is at is always visible. When the server
refuses a mutation, the UI stays where it was and says why.

## 2. Calm over clever

Fewer boxes, fewer colours, fewer words. Hairline rows instead of boxes in boxes. One headline per
card. No decoration that does not carry meaning: no gradients on chrome, no glassmorphism, no
emoji, no stock illustration where an icon will do.

## 3. Money and status are exact

Amounts use tabular numbers and the person's chosen display currency. A status is always a word
plus a tone, never a colour alone, and the word comes from one shared vocabulary
([tokens/status.ts](../tokens/status.ts)).

## 4. One system, used the same way everywhere

Use the component kit, then the `af-*` classes, then tokens. If none fits, add to the system
rather than writing a one-off. A screen built today should look like it was built on the same
day as every other screen.

## 5. Works for everyone, on every screen

Mobile-first, keyboard-usable, readable in light and dark, and at least WCAG 2.2 AA. A change is
not finished until it has been checked at phone, tablet and desktop widths and in dark mode.
