# Branding Word (.docx)

**Eligibility first** — run the `../SKILL.md` §0 guardrail. Do not brand
solicitation responses, gov forms, whitepapers, CPARS, or legal/teaming docs.

## Treatment

- **Running header (every page):** `visionblox` logo + wordmark top-left
  (~1.7" wide), with the document descriptor (navy, 8pt bold) and the
  `BUILD WHAT DOESN'T EXIST YET` tagline (teal, ~6.5pt, letter-spaced)
  right-aligned, over a **teal divider rule**. Built as a borderless 1×2 header
  table so the logo and text sit side-by-side.
- **Footer (every page):** keep the existing CAGE/UEI/confidential + page-number
  line and **preserve its `PAGE`/`NUMPAGES` fields** — only add a **gold top
  rule** and set the text muted/navy. Never rebuild the footer paragraph from
  scratch (it destroys the page-number field).
- **Body:** leave content as authored. VBX docs are usually already on-brand at
  the text level (Arial; navy `#232D5A` headings; teal `#2EA891` subtitles;
  navy-shaded table header rows). Only fix structural accents if off-brand.
- **Disallowed strings:** remove on request (e.g. a GSA MAS SIN). Strip at the
  run level so fields survive; also remove the adjacent `  |  ` separator.

## Run it

```
python .claude/skills/vbx-branding/scripts/brand_docx.py IN.docx OUT.docx \
  --descriptor "US-Only Delivery Roster  —  Montana Master AI" \
  --strip "GSA MAS SIN 54151HEAL"
```

`--logo` defaults to `assets/visionblox-logo.png`. `--strip` is repeatable.

## Verify (no Word/LibreOffice-Writer renderer in this env)

- Structural: `len(header.tables) == 1`; `a:blip` present in header XML (logo
  embedded, a `word/media/image1.png` part exists); tagline + teal rule present;
  footer has the gold rule and still contains `PAGE`/`NUMPAGES`; stripped strings
  gone from the whole document (body + tables + header + footer).
- Proof: pixel-mock the header band with Pillow + Liberation Sans (Arial-metric)
  if you want a visual — see the repo history for the mock approach.
- **Pagination is not verifiable here** — tell the user to open it in Word,
  especially for one-page layouts where a header/logo can push content over.
