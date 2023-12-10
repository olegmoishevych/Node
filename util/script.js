const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

readFile('example.txt', 'utf8')
  .then(text => {
    console.log(text);
  })
  .catch(err => {
    console.error('Error', err);
  });
