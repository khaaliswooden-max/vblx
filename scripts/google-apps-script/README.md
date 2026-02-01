# Google Apps Script - Assessment Leads

Receives POST submissions from Visionblox assessment/calculator forms and appends rows to the Leads sheet.

## Setup

1. Open the spreadsheet: https://docs.google.com/spreadsheets/d/1-CGWDlwAilR2Q_MKyE7tNrMP7Sf_PnrABonNDALzSXs/

2. **Extensions** → **Apps Script**

3. Replace the default `function myFunction()` with the contents of `Code.gs`

4. Create a sheet named **Leads** (or let the script create it from the active sheet) with headers:
   - A: Timestamp
   - B: Name
   - C: Email
   - D: Company
   - E: Role
   - F: Source
   - G: Score
   - H: Complexity
   - I: Engagement
   - J: Duration
   - K: Top Recommendations
   - L: All Scores
   - M: All Answers

5. **Deploy** → **New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone** (so the assessment sites can POST)
   - Deploy

6. Copy the web app URL and add to vblx `.env.local`:
   ```
   ASSESSMENT_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
   ```

7. Redeploy vblx (or restart dev server) to use the new webhook.
