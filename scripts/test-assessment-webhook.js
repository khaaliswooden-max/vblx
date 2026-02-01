/**
 * Test assessment → Google Sheets pipeline
 *
 * Usage:
 *   node scripts/test-assessment-webhook.js
 *
 * Sends a test lead to the vblx API (POST /api/assessment/submit), which forwards
 * to the Google Apps Script webhook. Open the Leads sheet to confirm a new row.
 *
 * Set BASE_URL for production: BASE_URL=https://visionblox.org node scripts/test-assessment-webhook.js
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

const payload = {
  firstName: 'Webhook',
  lastName: 'Test',
  email: 'webhook-test@visionblox.org',
  organization: 'Visionblox Test',
  role: 'Tester',
  source: 'digital-transformation',
  assessmentData: {
    score: 85,
    percentages: { Strategy: 80, Operations: 75 },
    topRecommendations: ['Rec A', 'Rec B'],
    complexity: 'Medium',
    engagement: 'High',
    duration: '2 min',
    answers: {},
  },
}

async function main() {
  const url = `${BASE_URL}/api/assessment/submit`
  console.log('POST', url)
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  console.log('Status:', res.status)
  console.log('Body:', JSON.stringify(data, null, 2))
  if (res.ok && (data.success !== false)) {
    console.log('\nIf the sheet has "Anyone" access for the Apps Script, check the Leads sheet for the new row.')
  } else {
    console.log('\nIf 403 from sheet: redeploy Apps Script with "Who has access: Anyone".')
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
