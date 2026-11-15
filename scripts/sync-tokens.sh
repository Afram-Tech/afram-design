#!/usr/bin/env bash
# Refresh the token snapshots in tokens/ from afram-web.
#
#   scripts/sync-tokens.sh [path-to-afram-web] [git-ref]
#
# Defaults: ../afram-web and its feat/ui-overhaul branch (switch to develop once v1 merges).
# Reads from the git ref, not the working tree, so local uncommitted edits never leak in.
set -euo pipefail

here="$(cd "$(dirname "$0")/.." && pwd)"
web="${1:-$here/../afram-web}"
ref="${2:-feat/ui-overhaul}"

git -C "$web" rev-parse --verify --quiet "$ref^{commit}" >/dev/null \
  || { echo "No ref '$ref' in $web" >&2; exit 1; }

sha="$(git -C "$web" rev-parse --short "$ref")"
git -C "$web" show "$ref:src/styles/afram-tokens.css"     > "$here/tokens/afram-tokens.css"
git -C "$web" show "$ref:src/styles/afram-components.css" > "$here/tokens/afram-components.css"
git -C "$web" show "$ref:src/components/ds/status.ts"     > "$here/tokens/status.ts"

printf 'Snapshot of Afram-Tech/afram-web %s @ %s, taken %s.\n' "$ref" "$sha" "$(date +%F)" \
  > "$here/tokens/SOURCE.txt"
echo "Synced tokens from afram-web $ref @ $sha"
git -C "$here" --no-pager diff --stat -- tokens/ || true
