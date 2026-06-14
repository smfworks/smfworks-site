#!/usr/bin/env python3
"""LLM pricing parser — extract per-token pricing from major providers."""
import json
import re
from datetime import datetime, timezone
from typing import Optional

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    requests = None  # type: ignore
    BeautifulSoup = None  # type: ignore


def _fetch(url: str) -> Optional[str]:
    if requests is None:
        return None
    headers = {
        "User-Agent": "Mozilla/5.0 (SMF-AI-Marketplace-Pricing-Bot/1.0; contact: michael@smfworks.com)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    }
    try:
        resp = requests.get(url, headers=headers, timeout=25)
        resp.raise_for_status()
        return resp.text
    except Exception:
        return None


def _extract_prices(text: str) -> tuple[Optional[float], Optional[float]]:
    """Crude regex fallback to find $N / 1M tokens prices."""
    if not text:
        return None, None
    matches = re.findall(r"\$([0-9]+(?:\.[0-9]+)?)\s*/\s*(?:1[Mm]|million)\s*tokens", text)
    if len(matches) >= 2:
        try:
            return float(matches[0]), float(matches[1])
        except ValueError:
            pass
    return None, None


class OpenAIParser:
    URL = "https://openai.com/api/pricing/"
    PROVIDER = "OpenAI"

    def parse(self):
        html = _fetch(self.URL)
        if not html or BeautifulSoup is None:
            return {"provider": self.PROVIDER, "url": self.URL, "models": []}
        soup = BeautifulSoup(html, "html.parser")
        models = []
        # OpenAI pricing page has model cards with text content
        for card in soup.find_all(["div", "section", "article"]):
            heading = card.find(["h2", "h3", "h4"])
            if not heading:
                continue
            name = heading.get_text(strip=True)
            if not name or not any(k in name.lower() for k in ["gpt-4o", "gpt-4.1", "o3", "o4", "gpt-4.5"]):
                continue
            body = card.get_text(" ", strip=True)
            inp, out = _extract_prices(body)
            ctx_match = re.search(r"(\d{3,6})(?:,?(?:000)?)\s*tokens?", body)
            ctx = int(ctx_match.group(1).replace(",", "")) if ctx_match else None
            models.append({
                "model": name,
                "input_price": inp,
                "output_price": out,
                "context_window": ctx,
                "notes": "Parsed from OpenAI pricing page",
                "source": self.URL,
            })
        return {"provider": self.PROVIDER, "url": self.URL, "models": models}


class AnthropicParser:
    URL = "https://www.anthropic.com/pricing"
    PROVIDER = "Anthropic"

    def parse(self):
        html = _fetch(self.URL)
        if not html or BeautifulSoup is None:
            return {"provider": self.PROVIDER, "url": self.URL, "models": []}
        soup = BeautifulSoup(html, "html.parser")
        models = []
        for card in soup.find_all(["div", "section"]):
            heading = card.find(["h2", "h3", "h4"])
            if not heading:
                continue
            name = heading.get_text(strip=True)
            if not any(k in name.lower() for k in ["claude", "opus", "sonnet", "haiku"]):
                continue
            body = card.get_text(" ", strip=True)
            inp, out = _extract_prices(body)
            ctx_match = re.search(r"(\d{3,6}(?:,\d{3})*)\s*(?:token|K|k)\b", body)
            ctx = None
            if ctx_match:
                raw = ctx_match.group(1).replace(",", "")
                ctx = int(raw) * 1000 if len(raw) <= 3 else int(raw)
            models.append({
                "model": name,
                "input_price": inp,
                "output_price": out,
                "context_window": ctx,
                "notes": "Parsed from Anthropic pricing page",
                "source": self.URL,
            })
        return {"provider": self.PROVIDER, "url": self.URL, "models": models}


class DeepSeekParser:
    URL = "https://api.deepseek.com/pricing"
    PROVIDER = "DeepSeek"

    def parse(self):
        html = _fetch(self.URL)
        if not html or BeautifulSoup is None:
            return {"provider": self.PROVIDER, "url": self.URL, "models": []}
        soup = BeautifulSoup(html, "html.parser")
        models = []
        for row in soup.find_all("tr"):
            cells = row.find_all(["td", "th"])
            if len(cells) < 3:
                continue
            texts = [c.get_text(strip=True) for c in cells]
            name = texts[0]
            if not any(k in name.lower() for k in ["deepseek", "v3", "r1"]):
                continue
            body = " ".join(texts)
            inp, out = _extract_prices(body)
            ctx_match = re.search(r"(\d{3,6}(?:,\d{3})*)\s*(?:token|K|k)\b", body)
            ctx = None
            if ctx_match:
                raw = ctx_match.group(1).replace(",", "")
                ctx = int(raw) * 1000 if len(raw) <= 3 else int(raw)
            models.append({
                "model": name,
                "input_price": inp,
                "output_price": out,
                "context_window": ctx,
                "notes": "Parsed from DeepSeek API pricing page",
                "source": self.URL,
            })
        return {"provider": self.PROVIDER, "url": self.URL, "models": models}


PARSERS = [OpenAIParser, AnthropicParser, DeepSeekParser]


def run():
    providers = []
    for parser_cls in PARSERS:
        try:
            result = parser_cls().parse()
            providers.append(result)
        except Exception as e:
            providers.append({
                "provider": parser_cls.PROVIDER,
                "url": parser_cls.URL,
                "error": str(e),
                "models": [],
            })
    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "providers": providers,
    }


if __name__ == "__main__":
    data = run()
    print(json.dumps(data, indent=2, ensure_ascii=False))
