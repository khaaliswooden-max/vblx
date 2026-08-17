#!/usr/bin/env python3
"""
Apply the VisionBlox / VBX brand system to the Relian Substrate Briefing (.pptx).

  * Remaps the deck's generic navy/teal palette onto the VBX tokens
    (navy #232D5A, teal #2EA891, gold #F7B801, muted #8892A4, ...), splitting
    fills / lines / text and light / dark slides so contrast survives.
    Semantic status colors (MEASURED green, PARTIAL amber) are preserved.
  * Retypes Cambria/Calibri to Arial, the VBX Office document face.
  * Embeds the real logo lockup: knockout (off-white wordmark) on the navy
    title / closing slides, full color in the footer of content slides over a
    gold accent rule -- mirroring the VBX docx footer convention.
  * Adds the BUILD WHAT DOESN'T EXIST YET tagline in teal to the hero slides
    and muted slide numbers to the footer band.
  * Lifts bottom captions clear of the new footer band so nothing collides.

Usage:
    python brand_relian_deck.py --in SRC.pptx --out OUT.pptx --assets DIR
"""
import argparse

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

A = "{http://schemas.openxmlformats.org/drawingml/2006/main}"

# ---- VBX tokens -----------------------------------------------------------
NAVY = "232D5A"
NAVY_LIGHT = "2A3560"
NAVY_DARK = "1B2347"
NAVY_BORDER = "3A4577"          # visible hairline on navy panels
TEAL = "2EA891"
TEAL_HOVER = "26957F"           # darker teal for small text on white
TEAL_DEEP = "1B6E5E"            # teal ink on a teal tint
TEAL_PANEL = "154B41"           # deep teal card fill on navy
LIGHT_TEAL = "7FD4C1"           # teal accents ON navy
TEAL_TINT = "E7F5F1"
GOLD = "F7B801"
MUTED = "8892A4"
OFFWHITE = "F5F5F0"

TAGLINE = "BUILD WHAT DOESN'T EXIST YET"

# Source palette -> VBX, keyed by role. Anything absent is left untouched
# (neutral borders, semantic green/amber, plain white).
FILL_MAP = {
    "0E1730": NAVY_DARK,      # dark slide background
    "17264A": NAVY_LIGHT,     # panels on dark
    "14213D": NAVY,           # navy chips / bands
    "0F8B8D": TEAL,           # icon discs
    "123536": TEAL_PANEL,     # deep teal card (slide 7)
    "F3F6FC": TEAL_TINT,      # soft blue-tint panels -> teal tint
    "E4F3F2": TEAL_TINT,
    "5B6B85": MUTED,
}
LINE_MAP = {
    "0F8B8D": TEAL,
    "14213D": NAVY,
    "2C3E63": NAVY_BORDER,
}
# On navy, the accent green is decorative, not a status signal -- it becomes VBX
# gold. On white it only ever marks Trutina status (MEASURED), so it stays green.
LINE_MAP_DARK = dict(LINE_MAP, **{"2FBF71": GOLD, "E0912F": OFFWHITE})
TEXT_MAP_LIGHT = {
    "14213D": NAVY,           # headings
    "1F2A44": NAVY_LIGHT,     # body ink
    "5B6B85": MUTED,
    "8FA0C4": MUTED,
    "0F8B8D": TEAL_HOVER,     # teal text on white, contrast-safe
    "0B6E70": TEAL_DEEP,      # teal text on a teal tint
    "D7E0F4": TEAL_TINT,
}
TEXT_MAP_DARK = {
    "FFFFFF": OFFWHITE,
    "D7E0F4": TEAL_TINT,
    "8FA0C4": MUTED,
    "0F8B8D": LIGHT_TEAL,     # teal reads light on navy
    "14213D": OFFWHITE,
    "1F2A44": TEAL_TINT,
    "2FBF71": GOLD,           # decorative accent on navy -> VBX gold
    "E0912F": OFFWHITE,       # third chip in the hero trio -> off-white
}
EFFECT_MAP = {"9AA6BE": MUTED}

FONT_MAP = {"Cambria": "Arial", "Calibri": "Arial"}

# Footer band geometry (13.333 x 7.5in slide)
MARGIN_L = 0.60
CONTENT_W = 12.13
RULE_Y = 6.94
RULE_H = 0.028
LOGO_Y = 6.985
LOGO_W = 1.02
CAPTION_BOTTOM = 6.86          # captions must clear the rule by this much


def _role(clr):
    """Classify an <a:srgbClr> by its nearest meaningful ancestor."""
    node = clr.getparent()
    while node is not None:
        tag = node.tag
        if tag in (A + "rPr", A + "defRPr", A + "endParaRPr"):
            return "text"
        if tag == A + "ln":
            return "line"
        if tag == A + "effectLst":
            return "effect"
        if tag.endswith("}spPr") or tag.endswith("}bgPr") or tag.endswith("}grpSpPr"):
            return "fill"
        node = node.getparent()
    return "fill"


def recolor(slide, dark):
    maps = {"text": TEXT_MAP_DARK if dark else TEXT_MAP_LIGHT,
            "fill": FILL_MAP,
            "line": LINE_MAP_DARK if dark else LINE_MAP,
            "effect": EFFECT_MAP}
    for clr in slide.element.iter(A + "srgbClr"):
        val = (clr.get("val") or "").upper()
        new = maps[_role(clr)].get(val)
        if new:
            clr.set("val", new)


def retype(slide):
    for el in slide.element.iter():
        if el.tag in (A + "latin", A + "ea", A + "cs"):
            new = FONT_MAP.get(el.get("typeface"))
            if new:
                el.set("typeface", new)


def is_dark(slide):
    for clr in slide.element.iter(A + "srgbClr"):
        node = clr.getparent()
        while node is not None:
            if node.tag.endswith("}bgPr"):
                return (clr.get("val") or "").upper() in ("0E1730", NAVY_DARK)
            node = node.getparent()
    return False


def add_logo(slide, path, left, top, width, ratio=1002 / 422.0):
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE
from PIL import Image

# ---- VBX palette (tailwind.config.ts / references/palette.md) -------------
TEAL = RGBColor(0x2E, 0xA8, 0x91)
GOLD = RGBColor(0xF7, 0xB8, 0x01)

# Off-token -> VBX token. Applied to shape fills, table cell fills and runs.
COLOR_MAP = {
    "1B2247": "1B2347",   # near-navy-dark   -> vbx navy-dark
    "5A6373": "8892A4",   # generic gray ink -> vbx muted
}

SKILL_ASSETS = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                            os.pardir, ".claude", "skills", "vbx-branding", "assets")
LOGO_COLOR = os.path.normpath(os.path.join(SKILL_ASSETS, "visionblox-logo.png"))
LOGO_KO = os.path.normpath(os.path.join(SKILL_ASSETS, "visionblox-logo-knockout.png"))

WORDMARK = "VISIONBLOX"
TAGLINE = "BUILD WHAT DOESN’T EXIST YET"
TAGLINE_PT = 11
TAGLINE_SPC = 300          # DrawingML character spacing (1/100 pt)
HERO_LOGO_W = 2.2          # in
FOOTER_LOGO_W = 1.0        # in
RULE_TOP = 6.96            # in
RULE_H = 0.028             # in
FOOTER_LOGO_TOP = 6.99     # in


def _in(v):
    return Emu(v).inches if v is not None else 0.0


def _text(sh):
    return sh.text_frame.text.strip() if sh.has_text_frame else ""


def _remove(sh):
    sh._element.getparent().remove(sh._element)


def _fill_hex(sh):
    try:
        if sh.fill.type == 1:
            return str(sh.fill.fore_color.rgb).upper()
    except Exception:
        pass
    return None


def _is_dark(slide):
    """This deck paints its background with a full-bleed rectangle, not <p:bg>."""
    for sh in slide.shapes:
        if sh.width is None or sh.height is None:
            continue
        if _in(sh.width) > 13.0 and _in(sh.height) > 7.0:
            hexv = _fill_hex(sh)
            if hexv and hexv in ("232D5A", "1B2247", "1B2347", "2A3560", "1A2140"):
                return True
    return False


def normalize_colors(slide):
    """Remap off-token hexes to VBX tokens (fills, table cells, run colors)."""
    n = 0
    for sh in slide.shapes:
        cur = _fill_hex(sh)
        if cur in COLOR_MAP:
            sh.fill.fore_color.rgb = RGBColor.from_string(COLOR_MAP[cur])
            n += 1
        if sh.has_text_frame:
            n += _normalize_tf(sh.text_frame)
        if getattr(sh, "has_table", False) and sh.has_table:
            for row in sh.table.rows:
                for cell in row.cells:
                    try:
                        if cell.fill.type == 1:
                            c = str(cell.fill.fore_color.rgb).upper()
                            if c in COLOR_MAP:
                                cell.fill.fore_color.rgb = RGBColor.from_string(COLOR_MAP[c])
                                n += 1
                    except Exception:
                        pass
                    n += _normalize_tf(cell.text_frame)
    return n


def _normalize_tf(tf):
    n = 0
    for para in tf.paragraphs:
        for run in para.runs:
            try:
                cur = str(run.font.color.rgb).upper()
            except Exception:
                continue
            if cur in COLOR_MAP:
                run.font.color.rgb = RGBColor.from_string(COLOR_MAP[cur])
                n += 1
    return n


def strip_drawn_lockup(slide):
    """Remove the typed VISIONBLOX wordmark and the small squares drawn beside it.

    Returns (left, top) of the removed lockup, or None if the slide had none.
    """
    marks = [sh for sh in slide.shapes if _text(sh) == WORDMARK]
    if not marks:
        return None
    anchor = None
    for word in marks:
        w_left, w_top, w_bot = _in(word.left), _in(word.top), _in(word.top) + _in(word.height)
        band_top, band_bot = w_top - 0.25, w_bot + 0.25
        for sh in list(slide.shapes):
            if sh is word or sh.has_text_frame and _text(sh):
                continue
            if sh.width is None or sh.height is None:
                continue
            # small decorative glyph shapes sitting to the LEFT of the wordmark
            if _in(sh.width) <= 0.55 and _in(sh.height) <= 0.55 \
                    and _in(sh.left) < w_left \
                    and band_top <= _in(sh.top) <= band_bot:
                anchor = (_in(sh.left), _in(sh.top)) if anchor is None else \
                    (min(anchor[0], _in(sh.left)), min(anchor[1], _in(sh.top)))
                _remove(sh)
        anchor = (w_left, w_top) if anchor is None else anchor
        _remove(word)
    return anchor


def add_logo(slide, path, left, top, width):
    img = Image.open(path)
    ratio = img.size[0] / float(img.size[1])
    return slide.shapes.add_picture(path, Inches(left), Inches(top),
                                    Inches(width), Inches(width / ratio))


def add_rule(slide, left, top, width, height, hexcolor):
    sp = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(left), Inches(top),
                                Inches(width), Inches(height))
    sp.fill.solid()
    sp.fill.fore_color.rgb = RGBColor.from_string(hexcolor)
def add_rule(slide, left, top, width, height, color):
    sp = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(left), Inches(top),
                                Inches(width), Inches(height))
    sp.fill.solid()
    sp.fill.fore_color.rgb = color
    sp.line.fill.background()
    sp.shadow.inherit = False
    return sp


def add_text(slide, left, top, width, height, text, size, hexcolor,
             align=PP_ALIGN.LEFT, bold=True, spacing=None):
    tb = slide.shapes.add_textbox(Inches(left), Inches(top), Inches(width), Inches(height))
    tf = tb.text_frame
    tf.word_wrap = False
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]
    p.alignment = align
    r = p.add_run()
    r.text = text
    r.font.name = "Arial"
    r.font.size = Pt(size)
    r.font.bold = bold
    r.font.color.rgb = RGBColor.from_string(hexcolor)
    if spacing:
        r.font._rPr.set("spc", str(int(spacing * 100)))   # letter-spacing, pt*100
    return tb


def lift_bottom_captions(slide):
    """Move full-width bottom kicker captions clear of the footer band.

    Restricted to left-anchored, full-width, short boxes so card captions,
    status chips and the body text of the references slide stay put.
    """
    for sh in slide.shapes:
        if not sh.has_text_frame or sh.left is None:
            continue
        left = Emu(sh.left).inches
        width = Emu(sh.width).inches
        top = Emu(sh.top).inches
        height = Emu(sh.height).inches
        if left < 2.0 and width > 6.0 and height < 1.0 and (top + height) > CAPTION_BOTTOM:
            sh.top = Inches(max(0.0, CAPTION_BOTTOM - height))


def shift_block(slide, from_top, to_top_max, delta):
    """Nudge every shape whose top falls in [from_top, to_top_max) up by delta."""
    for sh in slide.shapes:
        if sh.top is None:
            continue
        t = Emu(sh.top).inches
        if from_top <= t < to_top_max:
            sh.top = Inches(t - delta)


def shrink_tall_cards(slide, min_height, delta):
    for sh in slide.shapes:
        if sh.height is not None and Emu(sh.height).inches >= min_height:
            sh.height = Inches(Emu(sh.height).inches - delta)


def brand(src, out, color_logo, ko_logo):
    prs = Presentation(src)
    n = len(prs.slides)

    for i, slide in enumerate(prs.slides, start=1):
        dark = is_dark(slide)
        recolor(slide, dark)
        retype(slide)

        # Make room for the footer band without disturbing the authored layout:
        # the two comparison cards lose 0.15in of empty bottom padding (2), the
        # lower card row moves up into the gap above it (4), and the references
        # body is trimmed to its actual text height (8).
        if i == 2:
            shrink_tall_cards(slide, 3.80, 0.15)
        elif i == 4:
            shift_block(slide, 4.50, 6.60, 0.18)
        elif i == n:
            for sh in slide.shapes:
                if sh.has_text_frame and Emu(sh.height).inches > 4.0:
                    sh.height = Inches(4.75)

        if dark:
            if i == 1:
                # Hero: lockup top-left, tagline top-right.
                add_logo(slide, ko_logo, MARGIN_L, 0.50, 1.85)
                add_text(slide, 7.70, 0.78, 5.03, 0.30, TAGLINE, 9.5, TEAL,
                         align=PP_ALIGN.RIGHT, spacing=1.4)
            else:
                # Closing: lockup top-right, tagline in the footer line.
                add_logo(slide, ko_logo, 12.73 - 2.00, 0.46, 2.00)
                for sh in slide.shapes:
                    if sh.has_text_frame and sh.left is not None \
                            and Emu(sh.top).inches > 6.5 and Emu(sh.width).inches > 6.0:
                        sh.width = Inches(7.60)
                add_text(slide, 8.40, 6.80, 4.33, 0.30, TAGLINE, 9, TEAL,
                         align=PP_ALIGN.RIGHT, spacing=1.4)
        else:
            lift_bottom_captions(slide)
            add_rule(slide, MARGIN_L, RULE_Y, CONTENT_W, RULE_H, GOLD)
            add_logo(slide, color_logo, MARGIN_L, LOGO_Y, LOGO_W)
            add_text(slide, 9.73, 7.10, 3.00, 0.24,
                     f"INTERNAL  ·  {i} / {n}", 9, MUTED,
                     align=PP_ALIGN.RIGHT, bold=False, spacing=0.5)

    prs.save(out)
    return out
def _style_tagline_run(run):
    """Arial 11pt bold, teal, letter-spaced — the brand's tagline treatment."""
    run.font.name = "Arial"
    run.font.size = Pt(TAGLINE_PT)
    run.font.bold = True
    run.font.color.rgb = TEAL
    run._r.get_or_add_rPr().set("spc", str(TAGLINE_SPC))


def set_tagline(slide, existing=None, left=8.3, top=0.72, width=4.43):
    """Place the tagline top-right in teal, reusing the authored one if present.

    An authored tagline is re-styled as well as repositioned: the source deck's
    happened to already be on-brand, but a reused shape that carries off-brand
    type would otherwise survive the branding pass and leave the hero slides
    inconsistent with each other.
    """
    if existing is not None:
        existing.left, existing.top, existing.width = Inches(left), Inches(top), Inches(width)
        for para in existing.text_frame.paragraphs:
            para.alignment = PP_ALIGN.RIGHT
            for run in para.runs:
                _style_tagline_run(run)
        return existing
    tb = slide.shapes.add_textbox(Inches(left), Inches(top), Inches(width), Inches(0.3))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.RIGHT
    r = p.add_run()
    r.text = TAGLINE
    _style_tagline_run(r)
    return tb


def find_tagline(slide):
    for sh in slide.shapes:
        if _text(sh).upper().startswith("BUILD WHAT DOESN"):
            return sh
    return None


def existing_footer_rule(slide):
    """The authored hairline rule across the footer, if any."""
    for sh in slide.shapes:
        if sh.width is None or sh.height is None:
            continue
        if _in(sh.height) <= 0.05 and _in(sh.width) > 10.0 and _in(sh.top) > 6.5:
            return sh
    return None


def brand(src, out, hero_idxs):
    prs = Presentation(src)
    slide_w = _in(prs.slide_width)
    report = []
    for i, slide in enumerate(prs.slides):
        n = i + 1
        dark = _is_dark(slide)
        logo = LOGO_KO if dark else LOGO_COLOR
        recolored = normalize_colors(slide)
        stripped = strip_drawn_lockup(slide)
        notes = []
        if i in hero_idxs:
            add_logo(slide, logo, 0.6, 0.5, HERO_LOGO_W)
            set_tagline(slide, find_tagline(slide),
                        left=slide_w - 0.6 - 4.43, top=0.72, width=4.43)
            notes.append("hero: knockout lockup + tagline")
        else:
            rule = existing_footer_rule(slide)
            if rule is not None:
                rule.top = Inches(RULE_TOP)
                rule.height = Inches(RULE_H)
                rule.fill.solid()
                rule.fill.fore_color.rgb = GOLD
                notes.append("gold rule (reused)")
            else:
                add_rule(slide, 0.6, RULE_TOP, slide_w - 1.2, RULE_H, GOLD)
                notes.append("gold rule (added)")
            add_logo(slide, logo, 0.6, FOOTER_LOGO_TOP, FOOTER_LOGO_W)
            notes.append("footer lockup (%s)" % ("knockout" if dark else "full-color"))
        report.append("slide %-2d %-6s | %-2d recolored | wordmark %s | %s"
                      % (n, "dark" if dark else "light", recolored,
                         "replaced" if stripped else "n/a", "; ".join(notes)))
    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    prs.save(out)
    return out, report


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--in", dest="src", required=True)
    ap.add_argument("--out", dest="out", required=True)
    ap.add_argument("--assets", required=True)
    a = ap.parse_args()
    brand(a.src, a.out,
          f"{a.assets}/visionblox-logo.png",
          f"{a.assets}/visionblox-logo-knockout.png")
    print("wrote:", a.out)
    ap.add_argument("--src", required=True)
    ap.add_argument("--out", default="branded_docs/VBX_Relian_Capabilities_External.pptx")
    ap.add_argument("--hero", default="1,12", help="1-based slide numbers treated as hero/dark title slides")
    a = ap.parse_args()
    hero = {int(x) - 1 for x in a.hero.split(",") if x.strip()}
    out, report = brand(a.src, a.out, hero)
    print("\n".join(report))
    print("wrote:", out)


if __name__ == "__main__":
    main()
