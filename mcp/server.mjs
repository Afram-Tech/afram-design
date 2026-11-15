#!/usr/bin/env node
// afram-design MCP server: serves this repo's design rules to agents over stdio.
// Zero dependencies (Node 18+). Read-only: it only reads files inside this repo.
//
//   node mcp/server.mjs
//
// Tools: design_overview, list_design_docs, read_design_doc, get_token, status_tone.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DOC_EXT = /\.(md|css|ts|html|txt)$/;
const SKIP = new Set([".git", "node_modules", "mcp"]);

const read = (p) => readFileSync(join(ROOT, p), "utf8");

function listDocs(dir = "") {
  const out = [];
  for (const name of readdirSync(join(ROOT, dir))) {
    if (SKIP.has(name) || name.startsWith(".")) continue;
    const rel = dir ? `${dir}/${name}` : name;
    const st = statSync(join(ROOT, rel));
    if (st.isDirectory()) out.push(...listDocs(rel));
    else if (DOC_EXT.test(name)) out.push({ path: rel, bytes: st.size });
  }
  return out;
}

function safePath(p) {
  const abs = resolve(ROOT, String(p ?? ""));
  if (abs !== ROOT && !abs.startsWith(ROOT + sep)) throw new Error("Path is outside the design repo");
  const rel = relative(ROOT, abs);
  if (rel.split(sep).some((s) => SKIP.has(s) || s.startsWith("."))) throw new Error("Not a design doc");
  if (!DOC_EXT.test(rel)) throw new Error("Not a design doc");
  return rel;
}

// ─── Tokens: parse :root and .dark blocks of afram-tokens.css ───
function parseTokens() {
  const css = read("tokens/afram-tokens.css").replace(/\/\*[\s\S]*?\*\//g, "");
  const block = (sel) => {
    const m = css.match(new RegExp(`${sel}\\s*\\{([\\s\\S]*?)\\n\\}`));
    const vars = {};
    if (!m) return vars;
    for (const d of m[1].matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) vars[d[1]] = d[2].replace(/\s+/g, " ").trim();
    return vars;
  };
  return { light: block(":root"), dark: block("\\.dark") };
}

// ─── Status vocabulary: parse the TONES table in status.ts ───
function parseStatus() {
  const src = read("tokens/status.ts");
  const body = src.slice(src.indexOf("const TONES"));
  const tones = {};
  for (const m of body.matchAll(/^\s{2}(\w+):\s*\[([\s\S]*?)\]/gm)) {
    tones[m[1]] = [...m[2].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
  }
  return tones;
}
const norm = (s) => String(s).toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();

const TOOLS = [
  {
    name: "design_overview",
    description:
      "Start here before any Afram UI change. Returns the README (what to read, in what order, and the precedence rules) and the principles index.",
    inputSchema: { type: "object", properties: {} },
    run: () => `${read("README.md")}\n\n---\n\n${read("principles/README.md")}`,
  },
  {
    name: "list_design_docs",
    description: "List every design doc in the repo (principles, tokens, components, apps, prototypes, wireframes, templates).",
    inputSchema: { type: "object", properties: {} },
    run: () => listDocs().map((d) => `${d.path}  (${d.bytes} bytes)`).join("\n"),
  },
  {
    name: "read_design_doc",
    description:
      "Read one design doc by its repo-relative path, e.g. principles/01-colour.md, components/README.md, apps/afram-web.md.",
    inputSchema: {
      type: "object",
      properties: { path: { type: "string", description: "Repo-relative path from list_design_docs" } },
      required: ["path"],
    },
    run: ({ path }) => read(safePath(path)),
  },
  {
    name: "get_token",
    description:
      "Look up design tokens by name or substring (e.g. 'primary', 'text-soft', 'radius', 'shadow-card'). Returns light and dark values.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Token name or substring; omit for all" } },
    },
    run: ({ query = "" }) => {
      const { light, dark } = parseTokens();
      const q = String(query).replace(/^--/, "").toLowerCase();
      const names = [...new Set([...Object.keys(light), ...Object.keys(dark)])].filter((n) => n.toLowerCase().includes(q));
      if (!names.length) return `No token matches "${query}".`;
      return names.map((n) => `${n}: light ${light[n] ?? "(inherits)"} | dark ${dark[n] ?? light[n]}`).join("\n");
    },
  },
  {
    name: "status_tone",
    description:
      "Map a status word to its tone (success, away, warning, error, info, verified, brand, neutral) using the one Afram status vocabulary. Omit 'status' to list the whole vocabulary.",
    inputSchema: { type: "object", properties: { status: { type: "string" } } },
    run: ({ status }) => {
      const tones = parseStatus();
      if (!status) return Object.entries(tones).map(([t, w]) => `${t}: ${w.join(", ")}`).join("\n\n");
      const s = norm(status);
      for (const [tone, words] of Object.entries(tones)) if (words.includes(s)) return `${status} → ${tone}`;
      return `${status} → neutral (not in the vocabulary). If it is a real status, add it to status.ts in afram-web with its tone rather than passing colours.`;
    },
  },
];

// ─── JSON-RPC over stdio (newline-delimited) ───
const send = (msg) => process.stdout.write(JSON.stringify({ jsonrpc: "2.0", ...msg }) + "\n");

function handle(req) {
  const { id, method, params = {} } = req;
  if (id === undefined) return; // notification
  switch (method) {
    case "initialize":
      return send({
        id,
        result: {
          protocolVersion: params.protocolVersion ?? "2025-06-18",
          capabilities: { tools: {} },
          serverInfo: { name: "afram-design", version: "1.0.0" },
          instructions:
            "Afram's design rules. Call design_overview before any UI change in afram-web, afram-dashboard or afram-website, then read the principles and the note for the target repo.",
        },
      });
    case "ping":
      return send({ id, result: {} });
    case "tools/list":
      return send({ id, result: { tools: TOOLS.map(({ run, ...t }) => t) } });
    case "tools/call": {
      const tool = TOOLS.find((t) => t.name === params.name);
      if (!tool) return send({ id, error: { code: -32602, message: `Unknown tool: ${params.name}` } });
      try {
        return send({ id, result: { content: [{ type: "text", text: tool.run(params.arguments ?? {}) }] } });
      } catch (e) {
        return send({ id, result: { isError: true, content: [{ type: "text", text: String(e.message ?? e) }] } });
      }
    }
    default:
      return send({ id, error: { code: -32601, message: `Method not found: ${method}` } });
  }
}

createInterface({ input: process.stdin }).on("line", (line) => {
  if (!line.trim()) return;
  let req;
  try {
    req = JSON.parse(line);
  } catch {
    return send({ id: null, error: { code: -32700, message: "Parse error" } });
  }
  handle(req);
});
