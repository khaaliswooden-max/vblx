# Branding PowerPoint (.pptx)

**Eligibility first** — run the `../SKILL.md` §0 guardrail.

Reference implementation: `scripts/brand_sqos_decks.py` in the repo root (built
for the SQ-OS decks). Reuse or adapt it.

## Treatment

- **Dark title / closing (navy) slides:** replace any typed `VISIONBLOX`
  wordmark with the **knockout** lockup (`assets/visionblox-logo-knockout.png`)
  top-left — the mark and its teal accent are kept; the wordmark is off-white
  (`#F5F5F0`) so it reads on navy. `BUILD WHAT DOESN'T EXIST YET` tagline
  top-right in teal.
- **Content slides:** place the **full-color** lockup (`visionblox-logo.png`)
  bottom-left in the footer over a **gold (`#F7B801`) accent rule**, mirroring
  the docx footer convention. Preserve page numbers and any
  `INTERNAL — CONFIDENTIAL / PRE-DECISION` banners; lift bottom captions clear of
  the footer band so they don't collide with the logo.
- **Body:** leave as authored if already on-brand (Arial; navy headings; teal
  eyebrows; gold stat figures).

## Run it (example)

```
python scripts/brand_sqos_decks.py \
  --logo visionblox-logo.png \
  --external branded_docs/source/SQ-OS_External.pptx \
  --internal branded_docs/source/SQ-OS_Internal.pptx \
  --outdir branded_docs
```

Requires `python-pptx` and `Pillow`. For a generic deck, adapt the script's
per-layout placement (it keys off slide layout / background darkness to choose
knockout vs. full-color and top vs. footer placement).

## Verify

- Each slide has a real logo **picture** (not typed text); dark slides use the
  knockout variant, light/content slides the full-color one.
- Export a couple of slides to PNG for a proof if a renderer is available;
  otherwise inspect shapes structurally and tell the user to open in PowerPoint.
