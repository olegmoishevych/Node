// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });
//
// // Запуск: node index.js option1 option2
// // Вывод:
// // 0: путь к исполняемому файлу node
// // 1: путь к файлу index.js
// // 2: option1
// // 3: option2

const args = process.argv.slice(2);
const operation = args[0];

console.log('operation', operation)

switch(operation) {
    case 'add':

        const numbers = args.slice(1).map(Number);
        const sum = numbers.reduce((a, b) => a + b, 0);
        console.log('Sum:', sum);
        break;

    case 'echo':
        const text = args.slice(1).join(' ');
        console.log('Echo:', text);
        break;

    default:
        console.log('Unknown operation:', operation);
}
