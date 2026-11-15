# Linear UI ticket template

Paste into the ticket description. Attach the design files to the ticket itself.

```markdown
## What changes
<One or two sentences: the screen, who sees it, what is different after this ticket.>

## Repo and route
afram-web · `/member/...`

## Design
- Design files: <attached to this ticket / Figma frame link>
- Follow: Afram-Tech/afram-design (principles/, components/, apps/<repo>.md)
- Deviations from the design rules this ticket deliberately makes: <none / list>

## Acceptance
- [ ] Matches the attached design for layout and content
- [ ] Passes templates/pr-design-checklist.md in afram-design
- [ ] Screenshots at 390, 768 and 1440, light and dark, attached to the PR
```

## A test ticket to check the agent follows the rules

Use this once the repo and access are set up. It is small and touches the rules reviewers catch
most: tokens instead of hex, one pill per record, meta line, empty state, copy.

```markdown
## What changes
Restyle the member notifications list so each notification is a hairline row: title (600),
one 12px text-soft meta line ("Offer · 2 hours ago"), and at most one StatusPill. Add an
EmptyState when there are no notifications: lucide BellOff icon, "No notifications yet",
body "We'll let you know when something on your deals changes."

## Repo and route
afram-web · notifications page

## Design
- Follow Afram-Tech/afram-design. No attached design: the rules are the design.

## Acceptance
- [ ] No hex or Tailwind palette colours in the diff
- [ ] Components from @/components/ds
- [ ] PR description contains the completed design checklist
- [ ] Screenshots at 390, 768, 1440, light and dark
```
