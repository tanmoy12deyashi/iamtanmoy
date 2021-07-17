// exports file module
const fs = require('fs');

// exports blog module
const $blog = module.exports = {
    index: function (req, res) {
        // get all blogs
        let blogs = fs.readFileSync(`${SYS_PATH}/app/blog_content/blog.json`, 'utf8');

        // get result blog
        res.send(blogs);
    },
    blog: function (req, res) {
        // get all blogs
        let blogs = require(`${SYS_PATH}/app/blog_content/blog.json`);

        // get result blog
        blogs = $blog.search('id', req.params.blog_id, blogs);

        // if blog not exists
        if(typeof blogs == 'undefined' || !fs.existsSync(`${SYS_PATH}/app/blog_content/${req.params.blog_id}.html`))
            return res.send({sts: 'Blog not found'});

        // get blog content
        let blogContent = fs.readFileSync(`${SYS_PATH}/app/blog_content/${req.params.blog_id}.html`);

        // render b.log
        res.render('blog', {blogs: blogs, blogContent: blogContent});
    },
    search: function(key, val, arr) {
        // loop array
        for (var i=0; i < arr.length; i++) {
            // check key value
            if (arr[i][key] == val) {
                // return result
                return arr[i];
            }
        }
    }
}