# Assessment Webhook Integration

Assessment and calculator forms submit leads to Google Sheets via the Apps Script webhook.

## Configuration

| Item | Value |
|------|-------|
| **Google Sheet** | https://docs.google.com/spreadsheets/d/1HZea7VO6c-GUoqSpxKXUUYvnKdWW25cPxmTSGarcp4M/ |
| **Webhook URL** | `https://script.google.com/macros/s/AKfycbzk8BDxbTzljYfK9OlL1ly6f533mmC6ihG8M9CGPrufAT7-1mpyQgd4tIH5mwKM7bygeg/exec` |
| **Env override** | `ASSESSMENT_WEBHOOK_URL` (optional) |

## Connected Assessments

| Tool | URL | Source ID |
|------|-----|-----------|
| DoD Compliance Readiness | https://eloquent-churros-6a929a.netlify.app/ | `dod-compliance` |
| SAP S/4HANA Migration ROI | https://nimble-daffodil-ff9878.netlify.app/ | `sap-s4hana-roi` |
| Digital Transformation Readiness | https://luminous-cheesecake-d7c9dd.netlify.app/ | `digital-transformation` |

## Wiring Forms

Each assessment’s lead capture form should POST to either:

1. **Direct webhook** (client-side):
   ```javascript
   fetch('https://script.google.com/macros/s/AKfycbzk8BDxbTzljYfK9OlL1ly6f533mmC6ihG8M9CGPrufAT7-1mpyQgd4tIH5mwKM7bygeg/exec', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       firstName,
       lastName,
       email,
       organization,
       role,
       source: 'dod-compliance' | 'sap-s4hana-roi' | 'digital-transformation',
       assessmentData: { /* scores, answers, etc. */ },
     }),
   });
   ```

2. **VBLX API proxy** (if running from visionblox domain):
   ```
   POST https://visionblox.org/api/assessment/submit
   ```

## Google Apps Script Payload Format

The webhook expects this JSON structure (bound to a sheet named `Leads`):

| Field    | Type   | Description                                  |
|----------|--------|----------------------------------------------|
| `name`   | string | Full name                                    |
| `email`  | string | Email address                                |
| `company`| string | Organization name                            |
| `role`   | string | Job title/role                               |
| `source` | string | Assessment name (e.g. "DoD Compliance Readiness Assessment") |
| `score`  | string/number | Top score or summary               |
| `details`| string | JSON string with: `percentages`, `topRecommendations`, `complexity`, `engagement`, `duration`, `answers` |

**VBLX API** (`/api/assessment/submit`) accepts `firstName`, `lastName`, `organization`, `assessmentData`, etc. and transforms to this format before forwarding.
