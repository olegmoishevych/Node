const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: process.stdout.isTTY
});
console.log('rl', rl)
rl.question('Как вас зовут? ', (name) => {
  console.log('rl', rl)
  console.log(`Привет, ${name}!`);
  rl.close();
});
