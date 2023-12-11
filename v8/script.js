const v8 = require('v8');

const memoryUsage = v8.getHeapStatistics();

console.log('Statistic of memory:', memoryUsage);

// const v8 = require('v8');
// console.log(v8.getFlags());
// v8.setFlagsFromString('--max_old_space_size=4096');
// console.log(v8.getFlags());
