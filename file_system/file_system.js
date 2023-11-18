const fs = require('fs');

fs.writeFile('example.txt', 'Привет, мир!', (err) => {
    if (err) {
        console.error('Ошибка при записи файла:', err);
        return;
    }
    console.log('Файл успешно записан.');

    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            return;
        }
        console.log('Содержимое файла:', data);

        fs.unlink('example.txt', (err) => {
            if (err) {
                console.error('Ошибка при удалении файла:', err);
                return;
            }
            console.log('Файл успешно удален.');
        });
    });
});
