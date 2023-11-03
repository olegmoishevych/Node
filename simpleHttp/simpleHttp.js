const http = require('http');

const library = {
    get(url, callback) {
        http.get(url, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                callback(null, data);
            });

        }).on("error", (err) => {
            callback(err, null);
        });
    },

    post(url, data, callback) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        const req = http.request(url, options, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                callback(null, data);
            });
        });

        req.on('error', (e) => {
            callback(e, null);
        });

        req.write(data);
        req.end();
    }
};

module.exports = library;
