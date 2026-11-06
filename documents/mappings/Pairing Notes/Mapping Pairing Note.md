# Mapping Pairing Note

This note defines how a visual map and its CSV-backed inventory represent the same part of Workspace Atlas. Keep one pairing record per mapped system or area.

## Airtable pair

| Role | Hillnote path or file | Purpose |
| --- | --- | --- |
| Visual map | `documents/mappings/Airtable Architecture Comparison.moodboard.md` | Shows the Airtable root, workspaces, bases, and tables and selected records as cards with connectors. |
| Inventory | `documents/mappings/Airtable Architecture Inventory/` | Hillnote CSV-backed sheet with one row per root, workspace, base, table, or mapped record. |
| Portable architecture map | `mappings/airtable-architecture.canvas` | JSON Canvas version of the Airtable hierarchy. |
| Record-level clone | `mappings/airtable-records-hillnote-clone.canvas` | Mirrors the current moodboard positions, cards, and connectors with clickable Airtable links. |
| CSV import snapshot | `mappings/airtable-inventory-source.csv` | Portable copy of the mapped inventory. |

The moodboard contains 76 items and 73 connectors. The record-level JSON Canvas clone mirrors these counts and connector structure. Each CSV inventory contains 74 rows, with 28 hierarchy rows and 46 Airtable records. Board headers and source notes are visual aids.

## How to match map items to inventory rows

Use source identifiers and the parent chain as the shared key. Hillnote assigns its own moodboard item IDs; those IDs identify cards in the board but are not the inventory's canonical asset IDs.

| Resource | Inventory `asset_id` | `parent_asset_id` |
| --- | --- | --- |
| Airtable root | `airtable` | empty |
| Workspace | Airtable workspace ID, such as `wspKonVga0wnploQ4` | `airtable` |
| Base | Airtable base ID, such as `app18Kb5LQUkv8wy2` | Workspace ID |
| Table | `<base_id>:<table_id>` | Base ID |
| Record | `<base_id>:<table_id>:<record_id>` | Table asset ID |

The board shows workspace IDs on workspace cards and includes base/table identifiers in card descriptions or Airtable links. For tables, match both the base ID and table ID: Airtable table IDs can repeat across bases. The inventory's `external_id` stores the source ID; `url` stores the source link; `map_reference` points to the moodboard.

## Adding another pair

1. Create a focused map for one software or coherent area.
2. Create one inventory sheet for the same scope, with one row per mapped resource.
3. Give each row a stable `asset_id`; use `parent_asset_id` for its structural parent. Qualify source IDs when they are only unique within a parent.
4. Add clickable links and source IDs to map cards so they can be matched back to inventory rows.
5. Record both artifact paths, row/item counts, source, and last-checked date in this note and in the progress log.
6. When updating either side, refresh the paired side in the same work session and record the update date.

Keep visual placement and narrative on the board; keep searchable metadata and parent relationships in the inventory. Do not rely on canvas positions or generated board item IDs as permanent resource identifiers.

## Current source snapshot

Airtable workspaces, base metadata, and table schemas were read on 2026-11-06. The board and record-level JSON Canvas clone were aligned on 2026-11-06. This is a snapshot, not a live sync. Refresh it before relying on it for current system state.
