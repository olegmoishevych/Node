const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem')
});

server.on('stream', (stream, headers) => {
    // Stream - это Duplex
    stream.respond({
        'content-type': 'text/html; charset=utf-8',
        ':status': 200
    });
    stream.end('<h1>Hello World</h1>');
});

server.listen(8443);
