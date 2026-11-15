# Tone and copy

## Voice

Plain, warm and precise, like a good conveyancer who explains things once and clearly. People are
spending serious money: never jokey, never alarming, never vague about what happens next.

## Rules

1. **British spelling**: colour, organise, cheque, licence (noun).
2. **Sentence case** everywhere, except page titles, which render in capitals through `PageHeader`.
3. **Buttons start with a verb** and say what happens: "Upload title deed", "Accept offer",
   "Pay deposit". Not "OK", "Submit", "Click here".
4. **No em dashes. No emoji.** Use a full stop, a comma or " · " in meta lines.
5. **Meta lines** are one 12px `text-soft` line joined with " · ": `3 bed · 120 m² · Accra`.
6. **Status words come from [tokens/status.ts](../tokens/status.ts)** and are shown sentence-cased
   by `statusLabel()`. Don't invent a synonym ("Awaiting review" vs "Pending review"): reuse one,
   or add the new word to `status.ts` with its tone.
7. **Roles, as shown to people**: **Member** (wire value `buyer`), **Vendor** (`issuer`),
   **Financier** (`financier`). Never show "buyer" or "issuer" in the UI.
8. **Money**: format with `useFormatPrice()` so it follows the person's display currency
   (`fmtGHS()` hardcodes GHS and ignores the currency switcher). Tabular figures.
9. **Errors say what happened and what to do**: "We couldn't verify this Ghana Card. Check the
   number and try again." Not "Error 422" or "Something went wrong".
10. **Empty states** say what will appear and how to make it appear, with one action.
11. **Toasts**: announce a payment with a success toast. Don't toast every mutation; most announce
    themselves by moving a visible stage forward.
12. **Units**: "m²" stays lower case even inside uppercase labels (`Units` component).

## Words

| Use | Not |
| --- | --- |
| Member | Buyer, customer, user |
| Vendor | Issuer, seller (in UI chrome) |
| Sign in / Sign out | Log in, Login |
| Vendor financing | Seller financing (in UI copy) |
| Rent to buy | Rent-to-own |
