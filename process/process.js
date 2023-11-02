const util = require('util');

console.log(util.inspect(process.memoryUsage(), { depth: 0 }));
