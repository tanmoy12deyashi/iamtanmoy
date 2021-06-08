const express = require('express');
//const app = express.Router();
const app = express();

app.get('/', function(req, res, next) {
    res.send({
        name: 'tanmoy'
    });
});

app.listen(5000);