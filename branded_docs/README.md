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

---

# VBX-Branded Internal Docs — MAPS / Relian (August 2026)

Three internal Montana Master AI documents given the standard VBX `.docx`
treatment. Body content left as authored; the originals shipped with empty
headers/footers, so the standard VBX footer was added (gold rule +
`VISIONBLOX LLC | INTERNAL — CONFIDENTIAL | Page X of Y` with live
`PAGE`/`NUMPAGES` fields) alongside the running logo header.

## Files

- `VBX_MAPSKickoffBrief_MontanaMasterAI_20260808.docx` — MAPS awardee kickoff
  brief (descriptor: *MAPS Awardee Kickoff Brief — Montana Master AI*)
- `VBX_RelianContractReconciliation_SPB260608GW_v1_1_20260808.docx` — internal
  contract reconciliation, v1.1 (descriptor: *Relian Contract Reconciliation —
  SPB26-0608GW-VSNBLX*)
- `VBX_RelianBuildHandoff_CurrentVsDesired_v1_0_20260808.docx` — build-team
  handoff, v1.0 (descriptor: *Relian Build Handoff — Current vs. Desired State*)
- `source/` — the unbranded originals

Reproduce with `.claude/skills/vbx-branding/scripts/brand_docx.py` (plus a
footer build for docs whose footers start empty).

---

# VBX-Branded SEWP VI Collateral — TES Partner Package (August 2026)

Two externally-supplied `.docx` files for the TES SEWP VI pursuit, **fully
redesigned** (not just header/footer-stamped). The originals used flat gray
`#F0F0F0` boxes with weak hierarchy; these were rebuilt from the content up on
the VBX design system — a navy hero band with the knockout logo + tagline, a
gold hero seam, teal-tint capability cards with teal top-accents, navy table
header rows, gold-accented value figures, hairline row separators, and a
gold-ruled navy footer band.

## What was applied

- **Hero band:** navy (`#232D5A`) with the knockout `visionblox` logo, the
  `BUILD WHAT DOESN'T EXIST YET` tagline (light-teal), and a right-aligned
  descriptor + CAGE/UEI over a gold (`#F7B801`) rule.
- **Sections:** teal (`#2EA891`) letter-spaced eyebrow headers over a teal rule.
- **Cards / tables:** teal-tint (`#E7F5F1`) card grid with teal top-accents;
  navy header rows with white caps; alternating tint rows; gold value accents.
- **Footer band:** navy strip over a gold rule carrying credentials + contact.
- **Content:** preserved verbatim — on the Partner Profile every capability
  keyword string is byte-for-byte identical for the TES catalog ingestion engine.

## Files

- `CapabilityStatement_Visionblox_v3.1_2026-08.docx` — 1-page capability
  statement (+ `.pdf` render preview)
- `Visionblox_SEWPVI_PartnerProfile_v1.0_2026-08.docx` — 2-page SEWP VI partner
  profile, keywords + company information (+ `.pdf` render preview)
- `source/CapabilityStatement_Visionblox_v3.1_2026-08_ORIGINAL.docx` — original
- `source/Visionblox_SEWPVI_PartnerProfile_v1.0_2026-08_ORIGINAL.docx` — original

The `.pdf` previews were rendered with LibreOffice; confirm pagination in Word
before sending (Word and LibreOffice line-break slightly differently).

---

# VBX-Branded Relian™ Capabilities Deck (External)

`Relian_Capabilities_External.pptx` — the 13-slide external capabilities deck for
Relian™ — re-styled so **every slide carries the real `visionblox` logo +
wordmark**. The deck already used the VBX palette, but the lockup was faked: a
four-square placeholder drawn from autoshapes next to a *typed* "VISIONBLOX".
Typing the wordmark is not allowed by the brand system; it is now the real
embedded lockup on all 13 slides.

## What was applied

- **Dark hero slides (1 title, 12 closing):** the drawn placeholder mark and the
  typed `VISIONBLOX` are removed and replaced with the real **knockout** lockup
  (off-white wordmark) top-left at 2.2". The
  `BUILD WHAT DOESN'T EXIST YET` tagline sits top-right in teal (`#2EA891`),
  letter-spaced — moved out from under the lockup on slide 1, added on slide 12.
- **Light content slides (2, 4, 5, 7–11):** the drawn footer mark + typed
  wordmark are replaced with the real **full-color** lockup bottom-left, over
  the footer accent rule thickened and set to gold (`#F7B801`). Page numbers and
  the `Relian™ · Visionblox LLC` footer line are preserved.
- **Dark content slides (3, 6) and references (13):** carried no footer in the
  source; each now gets the same gold rule + lockup (knockout on navy,
  full-color on white) so no slide is unmarked.
- **Color normalization:** `#1B2247` → `#1B2347` (navy-dark) on the dark
  backgrounds; `#5A6373` → `#8892A4` (vbx-muted) on secondary text and the
  comparison table's left-hand column. All other colors were already on-token.
- **Content:** unchanged — no copy, figure, citation, or contact detail edited.

## Speaker notes

The source deck shipped 13 notes slides that were empty scaffolding — a notes
body placeholder holding a single empty run, plus the slide-number field — so
the speaker notes only ever existed as prose outside the file. All 13 are now
written into the Notes pane (Arial 12), verbatim from the markdown source of
truth, which stays readable for an email, a run-of-show doc, or a teleprompter.

## Files

- `VBX_Relian_Capabilities_External.pptx` — branded deck (13 slides, with notes)
- `VBX_Relian_Capabilities_External.pdf` — LibreOffice render preview.
  **Predates the Relian mark swap** — it still shows the old shield placeholder
  on slide 1. Re-render it where LibreOffice is available.
- `source/Relian_Capabilities_External.pptx` — original, unbranded
- `source/Relian_Capabilities_External_SpeakerNotes.md` — speaker notes source

Reproduce with `scripts/brand_relian_deck.py --src <deck>.pptx --out <out>.pptx`
then `scripts/add_relian_speaker_notes.py`.

---

# VBX-Branded Relian Substrate Briefing (Internal)

`Relian_Substrate_Briefing.pptx` — the 8-slide internal technical briefing on why
Relian is a substrate rather than a SaaS — re-styled onto the VBX brand system.
Unlike the external capabilities deck, this one shipped on a *generic* navy/teal
palette in Cambria/Calibri, so the work was a palette remap plus a type change,
not just a lockup swap.

## What was applied

- **Dark slides (1 title, 7 closing):** the real **knockout** lockup (off-white
  wordmark) — top-left at 1.85" on the title slide, top-right at 2.0" on the
  closing slide, where the title occupies the left. The
  `BUILD WHAT DOESN'T EXIST YET` tagline sits top-right in teal on the title
  slide and footer-right on the closing slide.
- **Content slides (2–6, 8):** the **full-color** lockup bottom-left over a gold
  (`#F7B801`) footer accent rule, with a muted `INTERNAL · n / 8` mark at the
  right. Bottom kicker captions are lifted clear of the new footer band.
- **Palette remap:** `#14213D`→`#232D5A` (navy), `#1F2A44`→`#2A3560` (body ink),
  `#0F8B8D`→`#26957F` on white / `#7FD4C1` light-teal on navy, `#5B6B85` and
  `#8FA0C4`→`#8892A4` (muted), `#F3F6FC` and `#E4F3F2`→`#E7F5F1` (teal-tint),
  `#0E1730`→`#1B2347` (navy-dark), `#9AA6BE`→`#8892A4` (shadows). Split by role
  (fill / line / text) and by light vs. dark slide so contrast holds.
- **Semantic layer preserved:** the Trutina `● MEASURED` / `● PARTIAL` /
  `● PLAUSIBLE` chips keep their green and amber. The same green used
  *decoratively* on the navy slides (the "Deterministic" chip, the `Q` markers)
  became VBX gold instead.
- **Typography:** Cambria/Calibri → Arial throughout.
- **Content:** unchanged — no copy, figure, citation or attribution edited.

## Files

- `VBX_Relian_Substrate_Briefing.pptx` — branded deck (8 slides)
- `VBX_Relian_Briefing_proof.png` — 8-slide proof contact sheet
- `source/Relian_Substrate_Briefing.pptx` — original, unbranded

## Reproduce

```
python scripts/brand_relian_briefing_deck.py \
  --in branded_docs/source/Relian_Substrate_Briefing.pptx \
  --out branded_docs/VBX_Relian_Substrate_Briefing.pptx \
  --assets .claude/skills/vbx-branding/assets
```

LibreOffice could not load `.pptx` in the session that produced this deck, so the
proof sheet was rendered with `scripts/pptx_to_html.py` + headless Chromium
instead. Arial is wider than Calibri, so confirm line breaks in PowerPoint before
external use.

---

# Relian™ Product Mark ("Ledger Mark")

Both Relian decks originally opened on a teal disc with a generic stock glyph
dropped in it — a layers icon on the Substrate Briefing, a shield on the external
capabilities deck — standing in for a product mark that did not exist yet. Those
placeholders are replaced on each deck's title slide with the real Relian mark:
the `R` letterform over a teal baseline with a gold check.

The disc and the glyph are both removed, and the mark sits on the navy background
in their footprint — left-aligned to the slide's 0.60" margin, scaled so its ink
is as tall as the disc it replaced. The generic glyph's relationship is dropped
too, so the placeholder is no longer carried inside the `.pptx`.

The mark is a *product* mark and does not displace the VisionBlox lockup: on both
title slides the VBX knockout lockup still sits top-left, with the Relian mark
below it and the product name below that.

## Assets (`assets/relian/`)

| File | |
|---|---|
| `relian_mark_dark.svg` / `.png` | off-white `R`, light-teal `#7FD4C1` rule, gold check — for navy backgrounds |
| `relian_mark_light.svg` / `.png` | navy `R`, teal `#2EA891` rule, gold check — for light backgrounds |
| `relian_mark_mono.svg` | single-color navy, for stamps and faxable output |
| `relian_lockup_{dark,light,mono}.svg` | mark + `Relian` wordmark |

The `.png` files are the SVGs rendered at 1600px and cropped to their ink bounds,
which is what `scripts/swap_relian_mark.py` places (python-pptx cannot embed SVG).

## Reproduce

```
python scripts/swap_relian_mark.py \
  --deck branded_docs/VBX_Relian_Substrate_Briefing.pptx \
  --mark branded_docs/assets/relian/relian_mark_dark.png
```

The script locates the disc and glyph structurally — a square teal-filled shape in
the upper left, plus the picture inside its bounds — and fails loudly rather than
guessing if a deck's title slide is not shaped that way.
