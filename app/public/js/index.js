window.onload = function() {
  getAllPost();
}

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
    .then(post => {
      console.log(post);
    }
  )
}