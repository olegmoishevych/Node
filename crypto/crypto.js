const crypto = require('crypto');

// function for hash password
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

const hashedPassword = hashPassword('password');
console.log(hashedPassword);
