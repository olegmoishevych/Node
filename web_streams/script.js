const { Readable, Writable, Transform } = require('stream');

const readableStream = new Readable({
  read() {}
});

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

readableStream.push('hello');
readableStream.push('world');

readableStream.push(null);

readableStream.pipe(transformStream).pipe(writableStream);
