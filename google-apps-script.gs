/**
 * Tuff Road Rugs — order form handler
 * Paste this into Extensions → Apps Script on the order Google Sheet.
 * Then Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 *
 * It appends one row per submission and saves any uploaded inspiration
 * image to a Drive folder, dropping a clickable link in the row.
 */

// Name of the Drive folder where inspiration images get saved.
// It will be created automatically the first time if it doesn't exist.
var DRIVE_FOLDER_NAME = 'Tuff Road Rugs — Inspiration Images';

// OPTIONAL: set to an email address to get notified on each submission.
// Leave as '' to disable email notifications.
var NOTIFY_EMAIL = '';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Add header row once.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Name', 'Email', 'Phone', 'Instagram',
        'Rug Size', 'Design Style', 'Vision', 'How They Heard', 'Inspiration Image'
      ]);
    }

    // Save the uploaded image to Drive, if present.
    var imageLink = '';
    if (data.fileData && data.fileName) {
      var folder = getOrCreateFolder_(DRIVE_FOLDER_NAME);
      var contentType = data.fileData.substring(5, data.fileData.indexOf(';'));
      var bytes = Utilities.base64Decode(data.fileData.split(',')[1]);
      var blob = Utilities.newBlob(bytes, contentType, data.fileName);
      var file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      imageLink = file.getUrl();
    }

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.instagram || '',
      data.size || '',
      data.style || '',
      data.vision || '',
      data.hear || '',
      imageLink
    ]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        'New rug request from ' + (data.name || 'someone'),
        'Size: ' + data.size + '\nStyle: ' + data.style +
        '\nVision: ' + data.vision +
        '\nEmail: ' + data.email + '\nPhone: ' + data.phone +
        '\nImage: ' + (imageLink || 'none')
      );
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateFolder_(name) {
  var existing = DriveApp.getFoldersByName(name);
  return existing.hasNext() ? existing.next() : DriveApp.createFolder(name);
}
