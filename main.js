const express = require('express');
//const app = express.Router();
const app = express();

// set port
const port = process.env.PORT || 3000

app.get('/', function(req, res, next) {
    res.send({
        name: 'tanmoy'
    });
});

app.get('/about', function(req, res, next) {
    res.send({
        page: 'about'
    });
});

app.get('/contact', function(req, res, next) {
    res.send({
        page: 'contact'
    });
});

app.listen(port);