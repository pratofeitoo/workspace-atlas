#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p content
git archive HEAD documents "mappings JSON canvas" resources | tar -xf - -C content
cat > content/index.md <<'MARKDOWN'
---
title: Workspace Atlas
---

Browse the workspace notes in the sidebar or open a map below.

- [[mappings JSON canvas/airtable-records-hillnote-clone.canvas|Airtable records]]
- [[mappings JSON canvas/divercidade-hub-2026-folder-tree-01-to-06-level-5.canvas|2026 folder tree]]
- [[mappings JSON canvas/divercidade-hub-drive-folder-tree-hillnote-clone.canvas|Drive folder tree]]
- [[mappings JSON canvas/drafts-google-drive-folder-and-file-tree-hillnote-clone.canvas|Drafts folder and file tree]]
MARKDOWN
