const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('path/to/your/private.key'),
  cert: fs.readFileSync('path/to/your/certificate.crt')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello Secure World!\n');
}).listen(443);
