# VBX-Branded Proposal Documents

Five FedSLED / Montana Master AI documents re-styled with the VisionBlox / VBX
brand system so each `.docx` layout carries the logo+wordmark and color scheme,
matching the VBX PNG deck.

## What was applied

- **Running header (every page):** `visionblox` logo + wordmark, top-left (1.7"),
  with the document descriptor and the `BUILD WHAT DOESN'T EXIST YET` tagline
  right-aligned, over a teal (`#2EA891`) divider rule.
- **Footer (every page):** existing `CAGE 9Z4X2 | UEI … | CONFIDENTIAL …`
  + page-number line, preserved and set over a gold (`#F7B801`) accent rule.
- **Body:** left as authored — already on-brand (Arial, Navy `#232D5A` headings,
  Teal `#2EA891` subtitles, Navy-shaded table header rows). Content unchanged.

## VBX palette (from `tailwind.config.ts`)

| Token | Hex |
|-------|-----|
| Navy | `#232D5A` |
| Teal | `#2EA891` |
| Gold | `#F7B801` |
| Muted | `#8892A4` |

## Files

- `VBX_ResumeTemplate_FedSLED_v2_20260629.docx`
- `VBX_TaskOrderPricingPlaybook_v2_20260629.docx`
- `VBX_USOnlyDeliveryRoster_MontanaMasterAI_v2_20260629.docx`
- `VBX_AIVendorStackAudit_MontanaMasterAI_v2_20260629.docx`
- `VBX_CloudArchitectureUSOnlyPostureMemo_MontanaMasterAI_v2_20260629.docx`
- `VBX_AwardCaptureBrief_Montana_MasterAI_20260629.docx`

---

# VBX-Branded SQ-OS Pitch Decks

The two SQ-OS pitch decks (`.pptx`) re-styled so **every slide layout carries the
real `visionblox` logo + wordmark** and the VBX color scheme. The decks already
used the VBX palette; what was missing was the actual logo — "VISIONBLOX" was
only ever typed text. That is now the real logo mark + wordmark on each layout.

## What was applied

- **Title / closing (dark navy) slides:** the typed `VISIONBLOX` wordmark is
  replaced with the real logo + wordmark, top-left, in a **knockout** variant —
  the geometric mark and its teal accent are kept, the dark slate wordmark is
  recolored off-white (`#F5F5F0`) so it reads on navy. The
  `BUILD WHAT DOESN'T EXIST YET` tagline sits top-right in teal.
- **Content slides:** the full-color logo + wordmark is placed bottom-left in the
  footer over a **gold (`#F7B801`) accent rule**, mirroring the docx footer
  convention. Page numbers and the `INTERNAL — CONFIDENTIAL / PRE-DECISION`
  banners are preserved; bottom captions are lifted clear of the footer band.
- **Body:** left as authored — already on-brand (Arial; Navy `#232D5A` headings;
  Teal `#2EA891` eyebrows; Gold `#F7B801` stat figures). Content unchanged.

## Files

- `VBX_SQ-OS_External.pptx` — investor / partner-facing deck (8 slides)
- `VBX_SQ-OS_Internal.pptx` — internal pre-decision review deck (10 slides)
- `visionblox-logo-knockout.png` — light-wordmark logo variant for dark slides
- `source/` — original decks + `SQ-OS_Pitch_30-60-90.md` speaking notes

## Reproduce

```
python scripts/brand_sqos_decks.py \
  --logo visionblox-logo.png \
  --external branded_docs/source/SQ-OS_External.pptx \
  --internal branded_docs/source/SQ-OS_Internal.pptx \
  --outdir branded_docs
```

Requires `python-pptx` and `Pillow`.

---

# VBX-Branded SQ-OS One-Pager (ZUUP Innovation Lab)

A designed one-pager delivered in three linked formats. Its original palette
was a generic blue (`#1F4FD8`) on near-black (`#0D1117`); it was remapped to the
VBX palette and given a logo brand strip, keeping the HTML as the master and
re-rendering the PDF from it (headless Chromium, A4).

- `SQOS_OnePager.html` — master; VBX palette + white logo brand strip with teal rule.
- `SQOS_OnePager.pdf` — re-rendered from the HTML (single A4 page).
- `SQOS_OnePager.docx` — Word version; cell shading, fonts and borders remapped to
  the VBX palette, with the logo strip added at the top.

Palette remap: `#0D1117`→`#232D5A` (navy), `#1F4FD8`→`#2EA891` (teal),
`#7EA0FF`→`#7FD4C1` (light teal), `#EEF2FF`→`#E7F5F1` (teal-tint),
`#243044`→`#2A3560`, `#5B6673`→`#8892A4`.
