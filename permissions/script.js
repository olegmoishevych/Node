const fs = require('fs');

const filePath = '/path/to/your/file.txt';

fs.access(filePath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if (err) {
    console.error(`${filePath} не доступен для чтения/записи.`);
    console.error(err);
    return;
  }
  console.log(`${filePath} доступен для чтения и записи.`);
});
