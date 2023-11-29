const report = require('node:diagnostics_channel').report;

if (report && report.createReport) {
  const diagReport = report.createReport();
  console.log(diagReport);
}
