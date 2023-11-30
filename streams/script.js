const fs = require('fs');

// create readable stream
const readStream = fs.createReadStream('path/to/large/file.txt');

// create writable stream
const writeStream = fs.createWriteStream('path/to/destination.txt');

// from readStream to writeStream
readStream.pipe(writeStream);
