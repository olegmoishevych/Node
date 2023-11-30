const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const buffers = [Buffer.from([0xE2]), Buffer.from([0x82]), Buffer.from([0xAC])];

buffers.forEach((buf) => {
  console.log(decoder.write(buf));
});

console.log(decoder.end());

// const buf = Buffer.from('hello world', 'utf8');
//
//
// console.log(buf.toString()); // 'hello world'
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));
