function createPost(){
  let post = document.querySelector('#postinput').value;
  // let postBody = document.querySelector('#page-template').innerHTML;
  let postsDiv = document.querySelector('#post');
  let postTemplate = document.getElementById('post-template').innerHTML;
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let postFn = _.template(postTemplate);
  let pageFn = _.template(pageTemplate);
  let templateHTML = postFn({post: post});
  // postsDiv.innerHTML += templateHTML;
}

function postComment(){
  let commentTemplate = document.querySelector('#comment-template').innerHTML;
  let commentFn = _.template(commentTemplate);
}
