const vm = require('vm');
const sandbox = { x: 2 };


vm.createContext(sandbox);
const code = 'x += 40; var y = 17;';

vm.runInContext(code, sandbox);
console.log(sandbox.x); // 42
console.log(sandbox.y); // 17
