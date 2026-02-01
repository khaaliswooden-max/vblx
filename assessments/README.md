# Assessment Tools (Netlify)

These static HTML apps are deployed as separate Netlify sites from this repo. Each site is linked to [khaaliswooden-max/vblx](https://github.com/khaaliswooden-max/vblx) and uses a **Base directory** so Netlify serves only that app.

## Netlify site configuration

| Netlify site | Base directory | Live URL |
|--------------|----------------|----------|
| **eloquent-churros** (DoD Compliance) | `assessments/dod_compliance_assessment` | https://eloquent-churros-6a929a.netlify.app/ |
| **nimble-daffodil** (SAP S/4HANA ROI) | `assessments/sap_migration_roi_calculator` | https://nimble-daffodil-ff9878.netlify.app/ |
| **luminous-cheesecake** (Digital Transformation) | `assessments/digital_transformation` | https://luminous-cheesecake-d7c9dd.netlify.app/ |

## Setup in Netlify

For each site (Site settings → Build & deploy → Build settings):

1. **Repository:** `khaaliswooden-max/vblx`
2. **Base directory:** Set to the path in the table above (e.g. `assessments/dod_compliance_assessment`)
3. **Build command:** Leave empty (static HTML, no build)
4. **Publish directory:** `.` (or leave default; Netlify will use the base directory root)
5. **Branch:** `main`

After saving, trigger a deploy. Each site will serve its `index.html` and submissions will post to the Google Sheets webhook (see `scripts/google-apps-script/` and `docs/ASSESSMENT_WEBHOOK_INTEGRATION.md`).
