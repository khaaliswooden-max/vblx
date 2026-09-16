# Visionblox cut sheets — v2 rebuild changelog

Rebuilt from `branded_docs/source/VBX_CutSheet_HC_IT.html` and
`branded_docs/source/VBX_CutSheet_GEN_IT.html` (the original HTML sources, not
re-extracted from the PDFs). The original PDFs in `public/` and `branded_docs/`
were **not** modified.

Outputs: `VBX_CutSheet_HC_IT_v2.{html,pdf}`, `VBX_CutSheet_GEN_IT_v2.{html,pdf}`.

Legend: **HC** = Healthcare IT sheet · **GEN** = General IT sheet · **both** = both sheets.

---

## A1 — Removals

| Sheet | Old | New |
|---|---|---|
| both | Header tag: `GSA MAS HOLDER // MINORITY-OWNED SB` | `STATE OF MONTANA MAPS CONTRACT HOLDER // MINORITY-OWNED SB` |
| HC | CTA badge: `SIN 54151HEAL — HEALTH IT SERVICES` | `STATE OF MONTANA MAPS — SPB26-0608GW-VSNBLX` |
| GEN | CTA badge: `GSA MAS SPRINGBOARD — IT SERVICES` | `STATE OF MONTANA MAPS — SPB26-0608GW-VSNBLX` |
| both | Certification chip: `GSA MAS` | removed |
| GEN | Certification chip: `CMMC READY` | removed |
| GEN | CTA badge: `NIST 800-53 · STIG · CMMC READY` | `NIST 800-53 · STIG · FISMA-ALIGNED` |
| HC | `Compliance demonstrated, not self-attested.` | sentence deleted |
| both | Footer vehicle line (new element) | `STATE OF MONTANA MAPS — SPB26-0608GW-VSNBLX` |

No "nationwide" / multi-state / cooperative-use language appears anywhere in either
sheet. None was present in the originals and none was added. (See HUMAN_CHECK item 5 —
the live site *does* carry it.)

## A2 — Rewordings

| Sheet | Old | New |
|---|---|---|
| both | chip `HITRUST-AUDITED` | `HITRUST-AUDITED SECURITY STAFF` |
| HC | `Credentialed HITRUST audit execution — CISA, CISM, CRISC on staff.` | `HITRUST auditor on staff, with CISA, CISM, and CRISC credentials.` |
| both | `FEDRAMP-AWARE` (chip) | `FEDRAMP-ARCHITECTURE-AWARE` |
| HC | `FedRAMP-aware deployment` (body copy) | `FedRAMP-architecture-aware deployment` |
| HC | attribution `visionblox.org` | `visionblox.com` |
| HC | footer URL `VISIONBLOX.ORG` | `visionblox.com` |
| GEN | attribution `visionblox.org/legacy-it` | `visionblox.com` |
| GEN | footer URL `VISIONBLOX.ORG/LEGACY-IT` | `visionblox.com` |
| GEN | `evaluated against Fortune 500 SIs and national AI firms under public scoring` | `under public scoring — one of 12 firms selected on both tracks from 68 offerors` |
| GEN | `competitively awarded a statewide AI master contract against Fortune 500 systems integrators` | `competitively awarded a statewide AI master contract as one of 12 firms selected on both tracks from 68 offerors` |
| GEN | `Bring scope — we staff and execute.` | `Bring the scope. We integrate with your team and deliver to the SOW.` |

`visionblox.org/legacy-it` was **not** carried over as a sub-path: `curl -sI
https://visionblox.com/legacy-it` returns **404**, so per instruction both sheets
point at the bare `visionblox.com`.

## A3 — Client names → neutral descriptors

All numbers, dollar values and scope wording were preserved verbatim.

| Sheet | Old | New |
|---|---|---|
| HC | `Kaiser Permanente` (hero, capability proof, "Proven with" card, differentiator) | `Leading national integrated healthcare system` / `a leading national integrated health system` |
| HC | `Cigna` (hero, "Proven with" card) | `National health insurer` |
| HC | `California DHCS` | unchanged (already public on visionblox.com) |
| HC | stat `$3.3M CONTRACT PORTFOLIO VALUE` | `$3.3M DOCUMENTED HEALTHCARE PORTFOLIO` |
| GEN | `Meta` / `META` (hero, proof line, card, differentiator) | `Hyperscale technology company` / `HYPERSCALE TECH CLIENT` / `Hyperscale technology` |
| GEN | `BASF` | `Multinational chemical manufacturer` / `CHEMICAL MANUFACTURER` / `chemical manufacturing` |
| GEN | `Walmart` / `WALMART GLOBAL REPLENISHMENT SYSTEM` | `Fortune 1 global retailer` / `FORTUNE 1 GLOBAL RETAILER — GLOBAL REPLENISHMENT SYSTEM` |
| GEN | `SOLGENIE / HORIZON GLOBAL $650K` | `COMMERCIAL B2B/EDI CLIENT $650K` |
| GEN | `HCPSS` | unchanged (prime AJACE approved the reference) |
| GEN | stat label `META · BASF · WALMART` | `FORTUNE-SCALE CLIENTS` (numeral `F500` kept) |

## Dates and contract data

| Sheet | Old | New |
|---|---|---|
| HC | Kaiser engagement `$1.2M · 2019–2023` | `$1.2M · 2022–2023` |
| HC | DHCS engagement `$2.1M · 2022` | `$2.1M · 2021–2022` |
| GEN | `SPB-RFP-2026-0608GW · 2026–PRESENT` | `SPB26-0608GW-VSNBLX · FULLY EXECUTED, AUGUST 2026` |
| both | MAPS card date `2026–Present` | `FULLY EXECUTED, AUG 2026` |
| both | Technical POC `TECHNICAL DIRECTOR` / `Data engineering & AI/ML` | `Antony Jayaraj` / `Director, Data Engineering` |
| HC | Primary contact title `Director, Enterprise Capture & Compliance` | `Director of Enterprise Capture & Compliance` (matches GEN + Decisions block) |

## A4 — Verified unchanged

`100K+` · `99.8% SLA` · `96%` · `60%` · `$2M+ annual savings` · `50% runtime reduction` ·
`100K+ daily transactions` · `$1.2M` · `$2.1M` · `$3.5M` · `$2.4M` · `$550K` · `$650K` ·
`$3.3M` · `13 years` · `100+ years combined` · NAICS `541511 541512 541519 518210` ·
CAGE `9Z4X2` · UEI `H4X2Z7R9E3E3` · TAA · Section 889 · Section 508 · HIPAA · MITA ·
Cures Act · NIST 800-53 · both quote lines (attribution URL updated to `visionblox.com`
only).

---

## Part B — Layout

### Token verification against the live site

`curl -sL https://visionblox.com` → `/_next/static/css/4650f54b5997a227.css`. **All 12
specified `--vbx-*` tokens matched the live site byte for byte**, as did `--radius:2px`
and `--radius-lg:4px`. Differences found (live site wins, per instruction):

| Token | Spec in task | Live site | Used |
|---|---|---|---|
| `--font-sans` | `"DM Sans",Arial,Helvetica,sans-serif` | `"DM Sans",Arial,Helvetica,system-ui,sans-serif` | spec value — `system-ui` is meaningless in a print PDF and would risk a non-deterministic fallback |
| `--font-mono` | `"JetBrains Mono","Courier New",monospace` | `"JetBrains Mono",ui-monospace,"Courier New",monospace` | spec value — same reason |
| `--vbx-rule-dark` | not in spec | `hsla(60,20%,95%,.18)` | **added** — used for rules and chip outlines on the navy bands |

Font weights confirmed from the site's own Google Fonts link: DM Sans 400/500/600/700,
JetBrains Mono 400/500 — exactly as specified.

### Design changes from v1

- **Palette**: v1 used off-spec navy `#1E2749` and a solid teal `#2EA891` stat band with
  gold numerals. v2 uses the real site tokens: page `--vbx-offwhite`, body `--vbx-ink`,
  headings `--vbx-navy`.
- **Typography**: Liberation Sans / Liberation Mono → DM Sans + JetBrains Mono, embedded.
- **Top band**: hand-built SVG mark + letterspaced "VISIONBLOX" text → the real knockout
  lockup (`public/visionblox-logo-knockout.png`, whose wordmark is `#f5f5f0`, i.e.
  `--vbx-offwhite`). Mono ID line moved right per spec.
- **Stat row**: teal band with gold numerals → off-white row, navy DM Sans numerals, mono
  muted captions, 1px `--vbx-rule` separators. No shadows, no gradients.
- **Capability blocks**: gold-left-rule cards on `#FAFAF8` → 2×2 grid on `--vbx-teal-tint`,
  2px radius, 2px teal left rule. Proof line prefix `▸` → `→`.
- **"Proven with"**: centered navy-top-border cards → left-aligned 1px-rule cards with mono
  `PRIME` / `SUB` / sector tags. MAPS is the highlighted card (navy fill, gold top accent
  rule, contract number in mono gold).
- **Quote**: was reversed-out on a navy CTA band → large navy DM Sans on off-white, mono
  muted attribution, per spec.
- **Footer**: the separate light NAICS strip and navy contact bar are now one navy band
  carrying NAICS, outlined mono compliance chips, both contacts and `visionblox.com`.
- **Gold** is used only as accent: the section-label underline, the differentiator markers,
  the `→` proof arrow, the MAPS card rule and the MAPS badge outline. Never body text.
- Section order preserved: What we deliver → Proven with → Who we serve → Why Visionblox
  → Contacts.
- Page: US Letter, 0.4in margins, one page each. Fit was achieved by tightening spacing
  only — no metric, client or claim was dropped. One redundant label (`TARGET BUYERS`
  inside the "Who we serve" strip, duplicating the section header) was removed.

### Fonts

DM Sans and JetBrains Mono were downloaded from Google Fonts (latin subset), then static
400/500/600/700 and 400/500 instances were cut from the variable files with
`fontTools.varLib.instancer` and embedded as base64 woff2. Static instances make Chromium
emit real **CID TrueType** subsets rather than Type 3 glyph procedures, which matters for
print RIPs at the 6–7px mono sizes used here. The `→` proof arrow is an inline SVG, not a
glyph: U+2192 falls outside the Google latin subset and would otherwise have forced a
fallback font into the PDF.

The HTML files are fully self-contained — inline CSS, base64 fonts, base64 logo. They
render identically with no network access.

### Build

`cutsheets/src/` holds the reproducible pipeline: `style.css` (shared), `body_hc.html`
and `body_gen.html` (content), `assemble.py` (inlines fonts + logo) and `print.js`
(Playwright/Chromium print with `printBackground: true`).
