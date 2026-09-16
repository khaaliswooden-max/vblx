# Cut sheets (v2)

Rebuilt Visionblox cut sheets: corrected content and the visionblox.com design system.

| File | What it is |
|---|---|
| `VBX_CutSheet_HC_IT_v2.html` / `.pdf` | Healthcare IT cut sheet — US Letter, 1 page |
| `VBX_CutSheet_GEN_IT_v2.html` / `.pdf` | General IT cut sheet — US Letter, 1 page |
| `CHANGELOG.md` | Every content change, old → new, plus the live-site token audit |
| `HUMAN_CHECK.md` | **Read this** — claims only a person can confirm before these ship |
| `src/` | Reproducible pipeline (see below) |

The HTML files are self-contained: inline CSS, base64 fonts, base64 logo. They render
with no network access.

## Rebuilding

```sh
python3 cutsheets/src/assemble.py    # inline fonts + logo -> the two HTML files
node    cutsheets/src/print.js       # Playwright/Chromium -> the two PDFs
```

`print.js` needs `playwright` on `NODE_PATH` and points at the container's preinstalled
Chromium; change `executablePath` if yours lives elsewhere.

`src/fonts/` holds static DM Sans (400/500/600/700) and JetBrains Mono (400/500)
instances cut from the Google Fonts latin-subset variable files, so the build needs no
network either. See CHANGELOG.md for why static rather than variable.

## Status

Not yet published. The originals in `public/` and `branded_docs/` are untouched — replace
them only after the HUMAN_CHECK items are cleared.
