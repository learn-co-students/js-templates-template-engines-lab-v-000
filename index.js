
function createPost(){
  let post = document.querySelector('#commentText').value;
  let poster = document.querySelector('#commenterName').value;
  let posts = document.querySelector('#posts');
  let postTemplate = document.getElementById('post-template').innerHTML;
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let postFn = _.template(postTemplate);
  let pageFn = _.template(pageTemplate);
  posts.innerHTML += pageFn({post: post, poster: poster});
}

function postComment(){
  let commentTemplate = document.querySelector('#comment-template').innerHTML;
  let commentFn = _.template(commentTemplate);
}
