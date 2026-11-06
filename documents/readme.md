# Workspace Atlas

Workspace Atlas is a visual and searchable inventory of the folders and files used across different software, storage systems, schemas, and processing workflows.

## Goals

- Make a large, mixed workspace easier to understand and navigate.
- Map folder and file structures, software boundaries, schemas, and processing relationships.
- Keep a searchable inventory alongside visual maps.
- Build separate, useful maps first, then decide how to connect or merge them into a larger atlas.
- Keep stable identifiers so visual maps and inventory rows can refer to the same resources.

## Working folder

The active project workspace is:

`/Users/paulorezende/Documents/Skein/HUB Workspace Atlas`

Hillnote documents and sheets live in its `Workspace Atlas/documents/` area. Supporting source artifacts are kept in `Workspace Atlas/mappings/`.

## Current prototype: Airtable

The first mapping covers the Airtable architecture:

`airtable → 2 workspaces → 5 bases → 20 tables`

The Hillnote moodboard and both CSV inventories also cover 46 records from Team, Setores, Projetos, Clients, and Clientes Ativos. A record-level JSON Canvas clone now mirrors the connected moodboard layout.

- Hillnote moodboard: `documents/mappings/Airtable Architecture Comparison.moodboard.md`
- Hillnote CSV-backed sheet: `documents/mappings/Airtable Architecture Inventory/`
- JSON Canvas architecture map: `mappings/airtable-architecture.canvas`
- Record-level JSON Canvas clone: `mappings/airtable-records-hillnote-clone.canvas`
- CSV import source: `mappings/airtable-inventory-source.csv`

See [Mapping Pairing Note](Mapping%20Pairing%20Note.md) for how the map and inventory correspond.

## Format decision

The canonical mapping format is still undecided. JSON Canvas is attractive for its broad compatibility. Hillnote moodboards appear more robust and can contain linked cards and visual groupings. Continue comparing portability, editing, and merge workflows before standardizing.

## Working principles

- Keep each map focused on a software, system, or coherent area until the merge approach is understood.
- Use stable `asset_id` values and `parent_asset_id` links in inventory sheets.
- Scope identifiers to their parent when source IDs can repeat. For Airtable tables, the inventory key is `<base_id>:<table_id>`. Record keys append `:<record_id>` to the table key.
- Use maps for visual structure and inventories for searchable facts; avoid maintaining duplicate descriptions in both.
- Record sources and the date a map was checked. Treat snapshots as dated until refreshed.
- Do not place passwords, API keys, or other credentials in maps or inventories.

## Progress

See [log.md](log.md) for dated work entries and open decisions.
