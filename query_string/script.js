const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('response: ' + JSON.stringify(queryObject));
}).listen(8080);

console.log('Server started on http://localhost:8080');
