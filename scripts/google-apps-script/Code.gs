/**
 * Visionblox Assessment Leads - Google Apps Script
 * Bound to: https://docs.google.com/spreadsheets/d/1-CGWDlwAilR2Q_MKyE7tNrMP7Sf_PnrABonNDALzSXs/
 *
 * SETUP:
 * 1. Open the spreadsheet above
 * 2. Extensions > Apps Script
 * 3. Paste this code (replace any existing)
 * 4. Save, then Deploy > New deployment
 * 5. Type: Web app, Execute as: Me, Who has access: Anyone
 * 6. Copy the web app URL and set ASSESSMENT_WEBHOOK_URL in vblx
 *
 * SHEET: Create a sheet named "Leads" with headers in row 1:
 * A: Timestamp | B: Name | C: Email | D: Company | E: Role | F: Source | G: Score | H: Complexity | I: Engagement | J: Duration | K: Top Recommendations | L: All Scores | M: All Answers
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      sheet.setName('Leads');
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Company', 'Role', 'Source', 'Score', 'Complexity', 'Engagement', 'Duration', 'Top Recommendations', 'All Scores', 'All Answers']);
    }

    var data = JSON.parse(e.postData.contents);

    // Parse the details JSON if present
    var details = {};
    try {
      if (data.details) {
        details = typeof data.details === 'string' ? JSON.parse(data.details) : data.details;
      }
    } catch (err) {
      details = {};
    }

    // Extract key info from details
    var topCategory = details.percentages && typeof details.percentages === 'object'
      ? Object.entries(details.percentages).sort(function(a, b) { return (b[1] || 0) - (a[1] || 0); })[0]
      : ['N/A', 0];
    var recommendations = details.topRecommendations && Array.isArray(details.topRecommendations)
      ? details.topRecommendations.join(', ')
      : '';

    // Append row with all assessment data
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.role || '',
      data.source || 'Visionblox Services Assessment',
      data.score !== undefined && data.score !== null ? String(data.score) : '',
      details.complexity || '',
      details.engagement || '',
      details.duration || '',
      recommendations,
      details.percentages ? JSON.stringify(details.percentages) : '{}',
      details.answers ? JSON.stringify(details.answers) : '{}'
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
