#!/usr/bin/env python3
"""
Pricing change detector for SMF AI Marketplace.

Fetches official provider pricing pages and compares extracted prices
against the curated canonical dataset. Outputs a report with flagged
discrepancies for human review.
"""
import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Optional

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError as e:
    print(json.dumps({"error": f"Missing dependency: {e}"}, indent=2))
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[2]
DATA_DIR = ROOT / "data"
SNAPSHOT_PATH = DATA_DIR / "pricing-snapshot.json"
CANONICAL_PATH = DATA_DIR / "llm-pricing.json"

HEADERS = {
    "User-Agent": "SMF-AI-Marketplace-Pricing-Bot/1.0 (contact: michael@smfworks.com)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


def fetch_text(url: str) -> tuple[str, bool]:
    try:
        resp = requests.get(url, headers=HEADERS, timeout=25)
        resp.raise_for_status()
        return resp.text, True
    except Exception as e:
        return f"[fetch_error] {e}", False


def get_page_text(html: str) -> str:
    if not html or BeautifulSoup is None:
        return ""
    soup = BeautifulSoup(html, "html.parser")
    # Remove script/style/nav/footer to reduce noise
    for tag in soup(["script", "style", "nav", "footer", "header", "aside"]):
        tag.decompose()
    return soup.get_text(" ", strip=True)


def extract_price(text: str) -> Optional[float]:
    patterns = [
        r"\$([0-9]+(?:\.[0-9]+)?)\s*/\s*(?:1[Mm]|million)\s*(?:tokens?|tok)",
        r"\$([0-9]+(?:\.[0-9]+)?)\s*per\s*(?:1[Mm]|million)\s*(?:tokens?|tok)",
        r"\$([0-9]+(?:\.[0-9]+)?)\s*/\s*1M\b",
        r"\$([0-9]+(?:\.[0-9]+)?)\s*/\s*1,?000[KK]?\s*(?:tokens?|tok)",
    ]
    for pat in patterns:
        m = re.search(pat, text, re.I)
        if m:
            return float(m.group(1))
    return None


def extract_context(text: str) -> Optional[int]:
    patterns = [
        (r"(\d{1,3}(?:,\d{3})+|\d{3,7})\s*(?:tokens?|context)", lambda s: int(s.replace(",", ""))),
        (r"(\d{2,3})[Kk]\s*(?:tokens?|context)", lambda s: int(s) * 1000),
    ]
    for pat, fn in patterns:
        m = re.search(pat, text, re.I)
        if m:
            val = fn(m.group(1))
            if val >= 1000:
                return val
    return None


def window_around(text: str, keyword: str, radius: int = 400) -> list[str]:
    """Return text windows around occurrences of keyword."""
    lower = text.lower()
    kw = keyword.lower()
    windows = []
    start = 0
    while True:
        idx = lower.find(kw, start)
        if idx == -1:
            break
        windows.append(text[max(0, idx - radius): idx + radius])
        start = idx + 1
    return windows


def run(canonical: dict) -> dict:
    snapshot = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "providers": [],
    }

    # Group models by provider URL
    by_url: dict[str, list[dict]] = {}
    for m in canonical.get("models", []):
        url = m.get("source_url", "")
        by_url.setdefault(url, []).append(m)

    for url, models in by_url.items():
        html, ok = fetch_text(url)
        if not ok:
            snapshot["providers"].append({
                "provider": models[0].get("provider", "Unknown"),
                "url": url,
                "fetch_ok": False,
                "error": html,
                "models": [],
            })
            continue

        page_text = get_page_text(html)
        provider_snapshot = {
            "provider": models[0].get("provider", "Unknown"),
            "url": url,
            "fetch_ok": True,
            "models": [],
        }

        for model in models:
            name = model["model"]
            aliases = [name, model.get("model_id", ""), *name.replace("-", " ").split()]
            windows = []
            for alias in aliases:
                if len(alias) < 3:
                    continue
                windows.extend(window_around(page_text, alias, radius=500))

            # Deduplicate windows
            seen = set()
            unique_windows = []
            for w in windows:
                sig = re.sub(r"\s+", "", w.lower())
                if sig not in seen:
                    seen.add(sig)
                    unique_windows.append(w)

            best_window = " ".join(unique_windows[:3]) if unique_windows else ""
            provider_snapshot["models"].append({
                "model": name,
                "model_id": model.get("model_id"),
                "extracted_input_price": extract_price(best_window),
                "extracted_output_price": extract_price(best_window),
                "extracted_context": extract_context(best_window),
                "window_sample": best_window[:600] if best_window else "",
            })

        snapshot["providers"].append(provider_snapshot)

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(SNAPSHOT_PATH, "w", encoding="utf-8") as f:
        json.dump(snapshot, f, indent=2, ensure_ascii=False)

    return snapshot


def compare(snapshot: dict, canonical: dict) -> dict:
    canonical_models = {m["model"].lower(): m for m in canonical.get("models", [])}
    flags = []

    for provider in snapshot.get("providers", []):
        for sm in provider.get("models", []):
            key = sm["model"].lower()
            if key not in canonical_models:
                continue
            canon = canonical_models[key]
            ci = sm.get("extracted_input_price")
            co = sm.get("extracted_output_price")
            if ci and canon.get("input_price") and abs(ci - canon["input_price"]) > 0.01:
                flags.append({
                    "type": "price_mismatch_input",
                    "provider": provider["provider"],
                    "model": sm["model"],
                    "canonical": canon["input_price"],
                    "extracted": ci,
                })
            if co and canon.get("output_price") and abs(co - canon["output_price"]) > 0.01:
                flags.append({
                    "type": "price_mismatch_output",
                    "provider": provider["provider"],
                    "model": sm["model"],
                    "canonical": canon["output_price"],
                    "extracted": co,
                })

    report = {
        "generated_at": snapshot["generated_at"],
        "canonical_updated_at": canonical.get("updated_at"),
        "flag_count": len(flags),
        "flags": flags,
    }
    return report


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--fetch", action="store_true", help="Fetch provider pages and write snapshot")
    parser.add_argument("--compare", action="store_true", help="Compare snapshot to canonical data")
    parser.add_argument("--report", action="store_true", help="Fetch + compare + print report")
    args = parser.parse_args()

    canonical = json.loads(CANONICAL_PATH.read_text(encoding="utf-8")) if CANONICAL_PATH.exists() else {"models": []}

    if args.fetch:
        snapshot = run(canonical)
        print(json.dumps({"status": "snapshot_written", "path": str(SNAPSHOT_PATH), "providers": len(snapshot["providers"])}, indent=2))
    elif args.compare:
        if not SNAPSHOT_PATH.exists():
            print(json.dumps({"error": "Snapshot missing. Run --fetch first."}))
            return
        snapshot = json.loads(SNAPSHOT_PATH.read_text(encoding="utf-8"))
        print(json.dumps(compare(snapshot, canonical), indent=2, ensure_ascii=False))
    elif args.report:
        snapshot = run(canonical)
        print(json.dumps(compare(snapshot, canonical), indent=2, ensure_ascii=False))
    else:
        parser.print_help()


if __name__ == "__main__":
    import argparse
    main()
