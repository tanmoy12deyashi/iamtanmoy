const fs = require('fs');

module.exports = {
    index: function(req, res) {
        //let blogs = fs.readFileSync(`${SYS_PATH}/app/blog_content/blog.json`, 'utf8');
        //users = ['geddy', 'neil', 'alex'];

        //console.log(blogs)
        //res.end('eee')
        res.render('index');
    }
}