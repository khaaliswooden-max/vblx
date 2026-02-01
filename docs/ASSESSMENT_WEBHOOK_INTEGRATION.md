# Assessment Webhook Integration

Assessment and calculator forms submit leads to Google Sheets via the Apps Script webhook.

## Configuration

| Item | Value |
|------|-------|
| **Google Sheet** | https://docs.google.com/spreadsheets/d/1HZea7VO6c-GUoqSpxKXUUYvnKdWW25cPxmTSGarcp4M/ |
| **Webhook URL** | `https://script.google.com/macros/s/AKfycbzw1j3VHH_gPHCt_9_GpltBXjDtTj5CrYduCMwr5T8FUiFCcI5SGvjj5GdR1VqPwHkcyQ/exec` |
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
   fetch('https://script.google.com/macros/s/AKfycbzw1j3VHH_gPHCt_9_GpltBXjDtTj5CrYduCMwr5T8FUiFCcI5SGvjj5GdR1VqPwHkcyQ/exec', {
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

## Google Apps Script

The webhook must implement `doPost(e)` to handle JSON POST requests. It should:

- Parse `e.postData.contents` as JSON
- Append a row to the target sheet (e.g. firstName, lastName, email, organization, role, source, submittedAt, assessmentData)
- Return a simple success response

Note: If you see "Script function not found: doGet", add and deploy a `doPost` function for form submissions.
