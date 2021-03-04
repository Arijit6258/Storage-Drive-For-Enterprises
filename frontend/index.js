const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './templates/index.html'));
});

app.listen(process.env.PORT);