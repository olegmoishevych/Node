// const util = require('util');
//
// console.log(util.inspect(process.memoryUsage(), { depth: 0 }));
//

const os = require('os');

console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Free Memory: ${os.freemem()}`);
