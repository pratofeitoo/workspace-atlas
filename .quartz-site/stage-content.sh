#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p content
git -C .. archive HEAD documents "mappings JSON canvas" resources | tar -xf - -C content
cat > content/index.md <<'MARKDOWN'
---
title: Workspace Atlas
---

Browse the workspace notes in the sidebar or open a map below.

- <a href="./mappings%20JSON%20canvas/airtable-records-hillnote-clone.html">Airtable records</a>
- <a href="./mappings%20JSON%20canvas/divercidade-hub-2026-folder-tree-01-to-06-level-5.html">2026 folder tree</a>
- <a href="./mappings%20JSON%20canvas/divercidade-hub-drive-folder-tree-hillnote-clone.html">Drive folder tree</a>
- <a href="./mappings%20JSON%20canvas/drafts-google-drive-folder-and-file-tree-hillnote-clone.html">Drafts folder and file tree</a>
MARKDOWN
