const fs = require('fs');

const token    = process.env.VITE_AIRTABLE_TOKEN    || '';
const baseId   = process.env.VITE_AIRTABLE_BASE_ID   || '';
const password = process.env.VITE_DASHBOARD_PASSWORD || '';

if (!token || !baseId) {
  console.error('ERROR: VITE_AIRTABLE_TOKEN and VITE_AIRTABLE_BASE_ID must be set.');
  process.exit(1);
}

const content = `window.AIRTABLE_TOKEN = "${token}";\nwindow.AIRTABLE_BASE_ID = "${baseId}";\nwindow.DASHBOARD_PASSWORD = "${password}";\n`;
fs.writeFileSync('env-config.js', content);
console.log('env-config.js generated.');
