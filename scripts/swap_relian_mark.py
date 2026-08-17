#!/usr/bin/env python3
"""
Replace the generic placeholder logo on the Relian(TM) deck's title slide with
the real Relian "Ledger Mark" (concept S2 — the R monogram with the teal
baseline and gold check).

The authored deck stood the product logo up as a generic Material-style shield
glyph inside a teal rounded square. That same shield is reused elsewhere in the
deck as an ordinary card pictogram, so this only touches the one instance that
acts as a LOGO: the square-container-plus-icon lockup on the title slide. The
container goes away with it — a real mark carries its own color treatment and
does not sit in a swatch.

Variant is chosen by background: the dark mark (off-white monogram, light-teal
bar, gold check) on navy, the light mark on white.

Run AFTER scripts/brand_relian_deck.py, which rebuilds the deck from source:

    python scripts/brand_relian_deck.py --src <source>.pptx --out <deck>.pptx
    python scripts/swap_relian_mark.py --deck <deck>.pptx
    python scripts/add_relian_speaker_notes.py --deck <deck>.pptx
"""
import argparse
import os

from pptx import Presentation
from pptx.util import Inches, Emu
from PIL import Image

ASSETS = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                      os.pardir, "branded_docs", "assets", "relian-logo")
MARK_DARK = os.path.normpath(os.path.join(ASSETS, "relian_mark_dark.png"))
MARK_LIGHT = os.path.normpath(os.path.join(ASSETS, "relian_mark_light.png"))

CONTAINER_FILL = "2EA891"       # teal swatch the placeholder icon sat in
MARK_SCALE = 1.15               # an outlined mark needs a little more height than
                                # the solid swatch it replaces to hold equal weight
DARK_BGS = ("232D5A", "1B2247", "1B2347", "2A3560", "1A2140")


def _in(v):
    return Emu(v).inches if v is not None else 0.0


def _fill_hex(sh):
    try:
        if sh.fill.type == 1:
            return str(sh.fill.fore_color.rgb).upper()
    except Exception:
        pass
    return None


def _is_dark(slide):
    for sh in slide.shapes:
        if sh.width and sh.height and _in(sh.width) > 13.0 and _in(sh.height) > 7.0:
            if (_fill_hex(sh) or "") in DARK_BGS:
                return True
    return False


def find_placeholder(slide, min_side=0.85):
    """The logo lockup: a large square teal swatch with a picture centered in it.

    Card pictograms use the same teal swatch at ~0.7" or smaller, so the size
    floor is what separates the logo from ordinary iconography.
    """
    for sh in slide.shapes:
        if sh.shape_type == 13 or not sh.width or not sh.height:
            continue
        w, h = _in(sh.width), _in(sh.height)
        if _fill_hex(sh) != CONTAINER_FILL or w < min_side or abs(w - h) > 0.05:
            continue
        left, top = _in(sh.left), _in(sh.top)
        for pic in slide.shapes:
            if pic.shape_type != 13 or not pic.width:
                continue
            cx = _in(pic.left) + _in(pic.width) / 2.0
            cy = _in(pic.top) + _in(pic.height) / 2.0
            if left <= cx <= left + w and top <= cy <= top + h:
                return sh, pic
    return None


def swap(deck, out):
    prs = Presentation(deck)
    swapped = []
    for i, slide in enumerate(prs.slides, 1):
        found = find_placeholder(slide)
        if not found:
            continue
        container, icon = found
        left, side = _in(container.left), _in(container.height)
        mid_y = _in(container.top) + side / 2.0
        mark = MARK_DARK if _is_dark(slide) else MARK_LIGHT
        for sh in (icon, container):
            sh._element.getparent().remove(sh._element)
        img = Image.open(mark)
        ratio = img.size[0] / float(img.size[1])
        h = side * MARK_SCALE
        # left edge stays on the layout's text column; grow about the old center
        slide.shapes.add_picture(mark, Inches(left), Inches(mid_y - h / 2.0),
                                 Inches(h * ratio), Inches(h))
        swapped.append((i, os.path.basename(mark), round(h * ratio, 3), round(h, 3)))
    if not swapped:
        raise SystemExit("no placeholder logo found — deck already swapped, or its layout changed")
    prs.save(out)
    return out, swapped


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--deck", default="branded_docs/VBX_Relian_Capabilities_External.pptx")
    ap.add_argument("--out", help="defaults to updating --deck in place")
    a = ap.parse_args()
    out, swapped = swap(a.deck, a.out or a.deck)
    for i, mark, w, h in swapped:
        print("slide %-2d <- %s  %.3f x %.3f in" % (i, mark, w, h))
    print("wrote:", out)


if __name__ == "__main__":
    main()
