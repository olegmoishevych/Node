"use strict";

const fs = require('fs');

try {
    const src = fs.readFileSync('1-readFileSync.js', 'utf8');
    const lines = src.split('\n').filter(line => line.trim().length > 0);
    fs.writeFileSync('1-readFileSync.txt', lines.join('\n'));
} catch (error) {
    console.error('Произошла ошибка при чтении или записи файла:', error);
}
