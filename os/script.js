const os = require('os');

console.log("ОС: " + os.platform());
console.log("Всего памяти: " + os.totalmem());
console.log("Свободно памяти: " + os.freemem());
console.log("Текущий пользователь: ", os.userInfo());
