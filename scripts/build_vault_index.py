#!/usr/bin/env python3
"""Build the static notebook manifest from the Obsidian Markdown vault."""
from __future__ import annotations
import json
import re
from datetime import datetime, timezone
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
VAULT = ROOT / "obsidian"
OUTPUT = ROOT / "vault-index.json"
WIKILINK = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]")
def main() -> None:
    notes = []
    for path in sorted(VAULT.rglob("*.md"), key=lambda item: item.as_posix().casefold()):
        relative = path.relative_to(ROOT).as_posix()
        text = path.read_text(encoding="utf-8")
        notes.append({"path": relative, "name": path.stem, "folder": path.parent.relative_to(ROOT).as_posix(), "links": list(dict.fromkeys(match.strip() for match in WIKILINK.findall(text)))})
    manifest = {"generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"), "notes": notes}
    OUTPUT.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Indexed {len(notes)} notes in {OUTPUT.relative_to(ROOT)}")
if __name__ == "__main__":
    main()
