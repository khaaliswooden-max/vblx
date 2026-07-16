# VBX Palette & Brand Tokens

Source of truth: `tailwind.config.ts` (`vbx-*` tokens) in the repo root.

## Core palette

| Token | Hex | RGB | Use |
|-------|-----|-----|-----|
| `vbx-navy` | `#232D5A` | 35,45,90 | headings, dark bands, primary brand color |
| `vbx-teal` | `#2EA891` | 46,168,145 | accents, rules, eyebrows, emphasis |
| `vbx-gold` | `#F7B801` | 247,184,1 | accent rules, stat figures, highlight |
| `vbx-muted` | `#8892A4` | 136,146,164 | secondary / footer text |
| `vbx-charcoal` | `#2E2E2E` | 46,46,46 | body text on white (alt) |
| `vbx-white` | `#F5F5F0` | 245,245,240 | off-white / knockout wordmark on dark |
| `vbx-gray` | `#F0F0F0` | 240,240,240 | light neutral surface |

## Surface / accent variants (extended)

| Token | Hex | Use |
|-------|-----|-----|
| navy-light | `#2A3560` | secondary dark surface / body ink |
| navy-dark | `#1B2347` | deepest navy |
| light-teal | `#7FD4C1` | teal accents **on** navy backgrounds (where full teal is too dark) |
| teal-tint | `#E7F5F1` | soft panel / callout fills |
| teal-hover | `#26957F` | interactive hover |

## Status colors

`success #10B981` · `warning #F59E0B` · `error #EF4444` · `info #3B82F6`.
Semantic reds/greens already in a document (e.g. a "bad" stat figure) may be
kept — brand accents are teal/gold/navy, not the semantic layer.

## Remapping an OFF-brand palette

When a deliverable uses a generic palette, map old → VBX. Reference mapping used
for the SQ-OS one-pager (generic blue on near-black):

| Old | New | Meaning |
|-----|-----|---------|
| `#0D1117` near-black | `#232D5A` navy | dark bands / headings |
| `#1F4FD8` blue | `#2EA891` teal | accents |
| `#7EA0FF` light blue | `#7FD4C1` light-teal | accents on dark |
| `#EEF2FF` blue-tint | `#E7F5F1` teal-tint | soft fills |
| `#243044` | `#2A3560` navy-light | secondary ink |
| `#5B6673` | `#8892A4` muted | muted text |

Keep neutral grays, whites, and semantic red/green. Split **fills** vs **text**
when the same hex is used for both (a bg tint vs. light-on-dark text).

## Logo lockups (`../assets/`)

- `visionblox-logo.png` — full color (2.37:1, transparent bg). Mark + navy
  wordmark. Use on **light** backgrounds. Header width ~1.7" in docs.
- `visionblox-logo-knockout.png` — light-wordmark variant. Use on **navy/dark**
  backgrounds so the wordmark stays legible.

## Tagline & type

- Tagline: `BUILD WHAT DOESN'T EXIST YET` — teal, uppercase, letter-spaced
  (~6.5pt in a doc header, tracking ~0.15em).
- Fonts: Arial (Office docs) · DM Sans / Instrument Sans (web) · JetBrains Mono
  (code). Navy headings, teal subheads.
- Corner radius: max 4px. No large rounded corners.
