# afram-design MCP server

Serves this repo to agents over MCP (stdio). Zero dependencies; Node 18+. Read-only, and it only
reads files inside this repo.

| Tool | What it returns |
| --- | --- |
| `design_overview` | The README and principles index. Agents call this first |
| `list_design_docs` | Every doc in the repo |
| `read_design_doc` | One doc by path, e.g. `principles/01-colour.md` |
| `get_token` | Token values, light and dark, by name or substring |
| `status_tone` | The tone for a status word, or the whole vocabulary |

## Setup in a code repo

Clone this repo next to the code repos (`~/Desktop/afram-design` beside `~/Desktop/afram-web`),
then each code repo's `.mcp.json` has:

```json
{
  "mcpServers": {
    "afram-design": {
      "command": "node",
      "args": ["../afram-design/mcp/server.mjs"]
    }
  }
}
```

The path is relative to the code repo, so it works for anyone who keeps the repos side by side.
Claude Code asks once to approve a project MCP server. Agents read `AGENTS.md` in the code repo,
which points here.

For cloud or CI agents, check out `Afram-Tech/afram-design` beside the code repo in the job (the
agent's GitHub access needs **read** on this repo), and the same `.mcp.json` works.

## Check it works

```bash
printf '%s\n' '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{}}' \
  '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"status_tone","arguments":{"status":"Under review"}}}' \
  | node mcp/server.mjs
```
