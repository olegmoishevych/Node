const punycode = require('punycode');

const unicodeDomain = 'пример.рф';
const asciiDomain = punycode.toASCII(unicodeDomain);
console.log(asciiDomain); // xn--e1afmkfd.xn--p1ai

const decodedDomain = punycode.toUnicode(asciiDomain);
console.log(decodedDomain); // пример.рф
