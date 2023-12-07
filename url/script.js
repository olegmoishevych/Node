const url = require('url');

const myUrl = new URL('http://example.com:8000/path/name?query=string#hash');

console.log(myUrl.href);
console.log(myUrl.protocol);
console.log(myUrl.host);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.hash);
console.log(myUrl.origin);


myUrl.pathname = '/newPath';
console.log(myUrl.href);
