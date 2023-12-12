const crypto = require('crypto');

const data = 'Example';

const hash = crypto.createHash('sha256').update(data).digest('hex');

console.log(hash);
