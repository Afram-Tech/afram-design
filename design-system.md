# The design system and how agents reach it

## Where it lives

| What | Where | Status |
| --- | --- | --- |
| Design system v1 (rules, tokens, components, live examples) | Claude artifact `claude.ai/artifact/EVjHatuSb2M63XPDdhrnMt` (referenced from afram-web's `afram-tokens.css`) | Exists. Must be shared with the org so agents and reviewers can open it |
| Code implementation | `Afram-Tech/afram-web`, `src/styles/` + `src/components/ds/` | Exists (on `feat/ui-overhaul`) |
| Figma file | _Add the URL here_ | **To do:** no Figma link is referenced in any Afram repo yet |
| This repo | `Afram-Tech/afram-design` | The written rules and snapshots |

## Reaching it through MCP

Agents reach the design system through two MCP servers. Both are declared in each code repo's
`.mcp.json`; see [mcp/README.md](mcp/README.md) for setup.

1. **`afram-design`** (this repo, [`mcp/server.mjs`](mcp/server.mjs)). Serves the principles,
   tokens, component notes, app notes and prototypes. No network, no secrets. Tools:
   `design_overview`, `list_design_docs`, `read_design_doc`, `get_token`, `status_tone`.
2. **Figma Dev Mode MCP** (once the Figma file exists). Lets the agent read frames, variables and
   component specs from the Figma file linked on a ticket. Each person enables it from the Figma
   desktop app (Preferences → Enable Dev Mode MCP Server); it runs at
   `http://127.0.0.1:3845/mcp`.

Design files for a single change are attached to the Linear ticket. Agents read those with the
Linear MCP, which the team already uses.
