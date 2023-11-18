const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('path/to/your/key.pem'),
    cert: fs.readFileSync('path/to/your/cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(443);
