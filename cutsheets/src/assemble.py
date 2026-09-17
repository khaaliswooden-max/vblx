#!/usr/bin/env python3
"""Assemble self-contained Visionblox cut sheets (inline CSS, base64 fonts + logo)."""
import base64, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent
OUT  = ROOT.parent
REPO = OUT.parent
FONTS = ROOT / "fonts"

def b64(p):
    return base64.b64encode(pathlib.Path(p).read_bytes()).decode()

FACES = [
    ("DM Sans",        "DMSans",        [400, 500, 600, 700]),
    ("JetBrains Mono", "JetBrainsMono", [400, 500]),
]

# Static instances cut from the latin-subset variable fonts (fontTools varLib.instancer).
# Static faces make Chromium embed real CID TrueType subsets instead of Type 3 glyph
# procedures, which matters for print RIPs at the 6-7px mono sizes used here.
faces = ""
for family, stem, weights in FACES:
    for w in weights:
        data = b64(FONTS / f"{stem}-{w}.woff2")
        faces += (
            f"@font-face{{font-family:'{family}';font-style:normal;font-weight:{w};"
            f"font-display:block;src:url(data:font/woff2;base64,{data}) format('woff2');}}\n"
        )

logo = "data:image/png;base64," + b64(REPO / "public/visionblox-logo-knockout.png")

css = (ROOT / "style.css").read_text()

SHEETS = [
    ("VBX_CutSheet_HC_IT_v2",  "body_hc.html",  "Visionblox — Healthcare IT Cut Sheet"),
    ("VBX_CutSheet_GEN_IT_v2", "body_gen.html", "Visionblox — IT Services Cut Sheet"),
]

for stem, bodyfile, title in SHEETS:
    body = (ROOT / bodyfile).read_text().replace("__LOGO__", logo)
    html = (
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        f'<title>{title}</title>\n<style>{faces}\n{css}</style>\n</head>\n'
        f'<body>\n{body}\n</body>\n</html>\n'
    )
    dest = OUT / f"{stem}.html"
    dest.write_text(html)
    print(f"{dest.name}: {len(html):,} bytes")
