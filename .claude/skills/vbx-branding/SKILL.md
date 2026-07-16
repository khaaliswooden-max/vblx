---
name: vbx-branding
description: >-
  Apply the VisionBlox / VBX brand system (logo + wordmark lockup and the VBX
  color scheme) to company-authored media — Word (.docx), PowerPoint (.pptx),
  HTML/PDF one-pagers and web pages, and images/social. Use when the user wants
  to "brand", "add our logo", "apply the VBX scheme/colors", or "give this the
  same treatment" to a deliverable. INCLUDES A GUARDRAIL: it refuses to brand
  formal or third-party-governed documents (Sources Sought, RFI/RFP/RFQ
  responses, IEEE/academic whitepapers, government forms, CPARS/past-performance,
  teaming/legal instruments) without explicit confirmation.
---

# VBX Branding

Apply the VisionBlox / VBX brand system to company media so every deliverable
carries the **logo + wordmark** and the **VBX color scheme** consistently.

## 0. FIRST — classify the document (the guardrail)

Before branding anything, decide whether it is even eligible. VBX branding goes
on **company-authored, VBX-owned collateral**: capability statements, pitch
decks, one-pagers, internal briefs, playbooks, résumé *templates*, rosters,
audits, memos, marketing/social.

**NEVER brand these without stopping to confirm with the user first** — they are
formal, evaluated, or third-party-governed, and company branding is prohibited,
scored against you, or simply inappropriate:

- **Solicitation responses** — Sources Sought, RFI, RFP, RFQ, RFO responses.
- **IEEE / academic / standards whitepapers** and peer-reviewed submissions.
- **Government / state forms** — SF-330, SF-1449, SF-33, OF-347, and any
  agency-provided fillable template or layout you must not restyle.
- **Past-performance / CPARS** narratives and questionnaires submitted on a
  customer's template or into a government system.
- **Teaming / partner-governed** documents — teaming agreements, subcontracts,
  and anything where a prime's or partner's branding governs, not VBX's.
- **Legal & compliance instruments** — contracts, NDAs, SSPs and security
  attestations, certifications.

If a document looks like one of the above (by filename, header, or content),
**STOP and ask the user** whether to proceed — do not silently brand or silently
skip. Populated résumés submitted in a proposal follow the proposal's own
in-document standard, not this branding (the résumé *template* itself is fine to
brand). When in doubt, ask.

See `references/exclusions.md` for the detection heuristics and edge cases.

## 1. The brand system

Full detail in `references/palette.md`. The essentials:

| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#232D5A` | headings, dark bands, primary brand color |
| Teal | `#2EA891` | accents, rules, eyebrows, emphasis |
| Gold | `#F7B801` | accent rules, stat figures, highlight |
| Muted | `#8892A4` | secondary/footer text |
| Navy-light | `#2A3560` | secondary dark surfaces / body ink |
| Light-teal | `#7FD4C1` | teal accents **on** navy backgrounds |
| Teal-tint | `#E7F5F1` | soft panel fills |
| Off-white | `#F5F5F0` | knockout wordmark on dark |

- **Logo lockups** (in `assets/`):
  - `visionblox-logo.png` — full color (mark + navy wordmark). Use on **light**
    backgrounds.
  - `visionblox-logo-knockout.png` — light wordmark variant. Use on **dark /
    navy** backgrounds where the navy wordmark would disappear.
- **Tagline:** `BUILD WHAT DOESN'T EXIST YET` — teal, uppercase, letter-spaced.
- **Typography:** Arial (documents) / DM Sans / system sans. Navy headings, teal
  subheads/eyebrows. `borderRadius` max 4px (no large rounded corners).
- **Never** type "VISIONBLOX" as a substitute for the logo — use the real lockup.

## 2. Per-media recipes

Read the matching reference for the exact steps and a runnable script:

- **Word `.docx`** → `references/docx.md` + `scripts/brand_docx.py`
  Running header: logo top-left + descriptor + tagline over a **teal rule**;
  footer over a **gold rule**, preserving CAGE/UEI and page-number fields; body
  left as authored. Optionally strip disallowed strings (e.g. a SIN).
- **PowerPoint `.pptx`** → `references/pptx.md` + repo `scripts/brand_sqos_decks.py`
  Knockout logo top-left + teal tagline on dark title/closing slides; full-color
  logo bottom-left over a gold rule on content slides.
- **HTML / PDF** → `references/html-pdf.md`
  Remap any off-brand palette to VBX via CSS variables; add a white **logo brand
  strip** with a teal rule; re-render the PDF from the HTML with headless
  Chromium; keep the intended page count.
- **Images / social / other** → `references/palette.md`
  Apply the palette + place the correct logo lockup for the background; follow
  the `dataviz` skill for any charts.

## 3. Verify before delivering

- **Structure:** confirm the logo image is actually embedded (a media part /
  `a:blip`), colors are applied, and no disallowed strings remain.
- **Render a proof** when you can: HTML/PDF via Chromium
  (`/opt/pw-browsers/chromium-*/chrome-linux/chrome --headless=new
  --print-to-pdf` / `--screenshot`); pixel-mock a `.docx` header with
  Pillow + Liberation Sans (Arial-metric) since **this environment has no
  LibreOffice Writer** and cannot render `.docx`/`.pdf` to image.
- **Page fit:** for one-pagers, confirm the intended page count (Chromium PDF
  `/Count`, or measure rendered content height vs. 297 mm for A4).
- **Always** send the user a proof image plus the branded file(s), and flag
  anything you could not verify in-environment (e.g. `.docx` pagination — ask
  them to open it in Word).

## 4. Assets & scripts

- `assets/visionblox-logo.png`, `assets/visionblox-logo-knockout.png` — lockups.
- `scripts/brand_docx.py` — CLI docx brander (header/footer + optional strip).
- Repo `scripts/brand_sqos_decks.py` — pptx brander (reference implementation).
- Reference outputs live in the repo's `branded_docs/`.
