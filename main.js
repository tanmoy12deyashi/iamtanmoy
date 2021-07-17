// import express
const express = require('express');
//const app = express.Router();
const app = express();
// set port
const port = process.env.PORT || 3000;
// set system path
SYS_PATH = __dirname;
// import path
const path = require('path');

const mustacheExpress = require('mustache-express');
app.engine('html', mustacheExpress());
// set view engine
app.set('view engine', 'html'); 

// set view path
app.set('views', path.join(SYS_PATH, 'app', 'views'));

app.use(express.static(path.join(SYS_PATH, 'app', 'public')));

// redirect to index
app.get('/', (req, res) => res.redirect('/index'));

// set all routes
app.get('/?:route', function(req, res, next) {
    // get route
    let route = req.params.route;

    if(['index', 'about', 'contact', 'blog'].includes(route)) {
        require(`./app/controller/${route}.js`)['index'](req, res, next);
    }
    else next();    
});

// set all routes
app.get('/blog/?:blog_id', function(req, res, next) {
    // if blog id
    if(!isNaN(req.params.blog_id)) {
        require('./app/controller/blog.js')['blog'](req, res, next);
    }
    else next();    
});

app.use(function(req, res) {
    //console.log('error');
    res.send({
        msg: 'routes not found'
    });
});

app.listen(port);