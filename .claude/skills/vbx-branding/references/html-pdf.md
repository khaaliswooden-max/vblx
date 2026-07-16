# Branding HTML / PDF

**Eligibility first** — run the `../SKILL.md` §0 guardrail.

The HTML is the **master**; the PDF is re-rendered from it. Never hand-edit the
PDF — change the HTML and re-render.

## Treatment

1. **Remap the palette to VBX.** Prefer editing CSS custom properties in `:root`
   (one edit propagates). Map any off-brand hexes per `palette.md` → VBX. Handle
   the same hex used as both a **fill** and **text** color separately. Replace
   literal color values too (e.g. an inline `#7ea0ff`).
2. **Add the logo brand strip.** A white bar at the very top: `visionblox` logo
   (full-color lockup) left, `BUILD WHAT DOESN'T EXIST YET` tagline (teal) right,
   over a **teal bottom rule**. Embed the logo as a self-contained
   `data:image/png;base64,…` URI so the file stays portable. Remove any now
   redundant typed "VISIONBLOX" text tag.
3. **Print fidelity.** Add `-webkit-print-color-adjust:exact; print-color-adjust:
   exact;` to `body` so navy/teal bands print.

## Re-render the PDF (headless Chromium — pre-installed)

```
CHROME=/opt/pw-browsers/chromium-*/chrome-linux/chrome
$CHROME --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=out.pdf "file:///abs/path/page.html"
# PNG proof:
$CHROME --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=794,1123 \
  --screenshot=proof.png "file:///abs/path/page.html"
```

(`dbus` connection errors are harmless.)

## Verify page fit

- Page count: parse the PDF for `/Count N` and the `/Kids` list (Chromium PDFs
  keep these uncompressed). A one-pager must stay 1.
- If you add a brand strip, you add height — reclaim it elsewhere (trim a margin,
  tighten section gaps) so the intended page count holds.
- Measure rendered content height: screenshot tall, find the bottom-most
  non-background row; A4 = **1123px @ 96dpi** (297 mm). Letter = 1056px (11in).
- Send the user the PNG proof + the HTML and PDF.
