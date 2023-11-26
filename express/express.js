const express = require('express');
const app = express();

app.use(express.json());

app.post('/logging', (req, res) => {
    console.log('Received log:', req.body);
    res.status(200).send('Log received');
});

const PORT = 8765;
app.listen(PORT, () => {
    console.log(`Logging server listening on http://localhost:${PORT}`);
});
