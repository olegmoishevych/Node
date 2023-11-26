const net = require('net');

const server = net.createServer((socket) => {
  console.log('Клиент подключился');

  socket.end('Hello World\n');

  socket.on('end', () => {
    console.log('Клиент отключился');
  });
});

server.on('error', (err) => {
  throw err;
});

server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
