const express = require('express');
//const app = express.Router();
const app = express();

const port = process.env.PORT || 3000

app.get('/', function(req, res, next) {
    res.send({
        name: 'tanmoy'
    });
});

app.listen(port);