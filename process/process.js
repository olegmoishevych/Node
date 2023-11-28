// // const util = require('util');
// //
// // console.log(util.inspect(process.memoryUsage(), { depth: 0 }));
// //
//
// const os = require('os');
//
// console.log(`Total Memory: ${os.totalmem()}`);
// console.log(`Free Memory: ${os.freemem()}`);

// Пример использования объекта process в Node.js

console.log("Процесс ID:", process.pid);
console.log("Версия Node.js:", process.version);
console.log("Платформа:", process.platform);
console.log("Путь выполнения:", process.execPath);
console.log("Аргументы командной строки:", process.argv);
console.log("Переменная среды PATH:", process.env.PATH);

process.on('exit', (code) => {
  console.log(`Процесс завершен с кодом: ${code}`);
});

setTimeout(() => {
  process.exit(0);
}, 5000);
