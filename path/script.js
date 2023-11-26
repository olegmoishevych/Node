const path = require('path');


const filePath = path.join('/folder', 'subfolder', 'file.txt');
console.log(filePath); // '/folder/subfolder/file.txt' на Unix, '\\folder\\subfolder\\file.txt' на Windows

console.log(path.basename(filePath)); // 'file.txt'

console.log(path.extname(filePath)); // '.txt'

console.log(path.resolve('folder', 'file.txt')); // '/current/working/directory/folder/file.txt' на Unix

console.log(path.parse(filePath));
/*
{
  root: '/',
  dir: '/folder/subfolder',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
