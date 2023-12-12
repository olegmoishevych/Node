const zlib = require('zlib');

const input = 'Пример строки для сжатия';

zlib.gzip(input, (err, buffer) => {
  if (!err) {
    console.log('Сжатый текст:', buffer.toString('base64'));

    zlib.gunzip(buffer, (err, decompressed) => {
      if (!err) {
        console.log('Распакованный текст:', decompressed.toString());
      }
    });
  }
});
