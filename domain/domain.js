const domain = require('domain');
const d = domain.create();

d.on('error', (err) => {
    console.log('Домен перехватил ошибку:', err);
});

d.run(() => {
    setTimeout(() => {
        throw new Error('Ошибка в асинхронной операции');
    }, 100);
});
