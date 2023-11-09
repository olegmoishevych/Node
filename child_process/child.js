// const heavyComputation = () => {
//     let sum = 0;
//     for (let i = 0; i < 1e9; i++) {
//         sum += i;
//     };
//     return sum;
// };
//
// console.log('Начало тяжелой операции');
// setTimeout(() => {
//     console.log('Это сообщение будет показано после тяжелой операции');
// }, 0);
//
// const result = heavyComputation(); // Блокирующая операция
// console.log(`Результат: ${result}`);


const { fork } = require('child_process');

console.log('Начало тяжелой операции в child process');
const child = fork('./heavyComputation.js');

setTimeout(() => {
    console.log('Это сообщение показывается сразу же, не дожидаясь тяжелой операции');
}, 0);

child.on('message', (result) => {
    console.log(`Результат из child process: ${result}`);
});

child.on('exit', (code) => {
    console.log(`Child process вышел с кодом ${code}`);
});

