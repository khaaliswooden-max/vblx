# Capability statements (v2)

Rebuilt Visionblox capability statements: corrected content and the visionblox.com
design system. Same treatment as `../cutsheets/`.

| File | What it is |
|---|---|
| `VBX_CapStatement_HC_IT_v2.html` / `.pdf` | Healthcare IT capability statement — US Letter, 1 page |
| `VBX_CapStatement_GEN_IT_v2.html` / `.pdf` | IT Services capability statement — US Letter, 1 page |
| `src/` | Reproducible pipeline |

The HTML files are self-contained: inline CSS, base64 fonts, base64 logo. They render
with no network access.

## Rebuilding

```sh
python3 capstatements/src/assemble.py    # inline fonts + logo -> the two HTML files
node    capstatements/src/print.js       # Playwright/Chromium -> the two PDFs
```

Fonts are shared with the cut sheets — `src/assemble.py` reads them from
`../cutsheets/src/fonts/` rather than keeping a second copy.

## Published to

- `public/CapStatement_Visionblox_HC_v2.pdf` and the repo-root copy ← HC
- `public/VBX_CapStatement_IT.pdf` ← IT Services

Both are linked from the capability card at `/quick-facts` and `/card`, and the IT one
from `components/pages/LegacyIT.tsx`.

See `../cutsheets/HUMAN_CHECK.md` — the open items apply to these documents too.
