const HEADERS = [
  'submitted_at',
  'source',
  'name',
  'company',
  'email',
  'phone',
  'projectType',
  'message',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid'
];

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || '{}');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow(HEADERS.map((header) => payload[header] || ''));
    return respond({ ok: true });
  } catch (error) {
    return respond({ ok: false, error: String(error) });
  }
}

function doGet() {
  return respond({ ok: true, service: 'trailsoft-contact-sheet' });
}

function respond(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
