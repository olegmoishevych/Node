const diagnostics_channel = require('diagnostics_channel');
const channel = diagnostics_channel.channel('my-channel');

channel.subscribe((message, name) => {
    console.log(`Получено сообщение из ${name}:`, message);
});

channel.publish({ foo: 'bar' });
