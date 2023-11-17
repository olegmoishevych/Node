// const dns = require('dns');
//
// dns.lookup('example.com', (err, address, family) => {
//     console.log('Адрес:', address);
//     console.log('Семейство IP:', family);
// });

const dns = require('node:dns');

dns.resolve4('archive.org', (err, addresses) => {
    if (err) throw err;

    console.log(`addresses: ${JSON.stringify(addresses)}`);

    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
        });
    });
});
