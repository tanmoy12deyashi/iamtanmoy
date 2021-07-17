window.onload = function() {
  getAllPost();
}

// get all post
function getAllPost() {
  // set options
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    //body: JSON.stringify(user)
  }

  // fetch all post
  let allPost = fetch("/blog", options);

  // get all post
  allPost.then(res =>res.json())
    .then(posts => {
      console.log(posts);
      console.log(dateTimeFormat("02-02-2021", "MMMM dd, yyyy"));
      // if post found
      if(posts.length) {
        // set degault html
        let html = '', counter = 1;

        // loop posts
        posts.forEach(post => {
          // update html
          html += `<div class="post-preview">
                    <a href="blog/${post.id}">
                        <h2 class="post-title">${post.title}</h2>
                        <h3 class="post-subtitle">${post.sub_title}</h3>
                    </a>
                    <p class="post-meta">
                        Posted by
                        <a href="/about">${post.created_by}</a>
                        on ${dateTimeFormat(post.create_date, "MMMM dd, yyyy")}
                    </p>
                  </div>
                  <hr class="my-4" />`;
          // update counter
          counter++;

          // if last post
          if(counter == posts.length) {
            setTimeout(function() {
              // hide loader
              document.querySelectorAll('.loader')[0].classList.add('d-none');

              // Get the reference node
              var postNode = document.querySelector('#all-post');

              // Insert new html to the node
              postNode.innerHTML = html;
            }, 500);
            
          }
        });
      } else {
        console.log('no post found')
      }
    }
  )
}