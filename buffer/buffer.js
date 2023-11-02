// "use strict";
//
// const fs = require('fs');
//
// try {
//     const src = fs.readFileSync('1-readFileSync.js', 'utf8');
//     const lines = src.split('\n').filter(line => line.trim().length > 0);
//     fs.writeFileSync('1-readFileSync.txt', lines.join('\n'));
// } catch (error) {
//     console.error('Произошла ошибка при чтении или записи файла:', error);
// }

// const { Buffer } = require('node:buffer');
//
// const buf = Buffer.from([1, 2, 3, 4]);
// const uint32array = new Uint32Array(buf);
//
// console.log(uint32array);

// Prints: Uint32Array(4) [ 1, 2, 3, 4 ]

'use strict'

const b1 = Buffer.alloc(1024)
// console.log(b1)

const b2 = Buffer.from('Marcus Aurelius (Марк Твен)')
console.log(b2.toString('hex'))
console.log(b2.toString('base64'))
console.log(b2.toString('utf8'))
console.log(b2.toString('binary'))
