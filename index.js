

function createPost() {
  var pageTemplate = document.getElementById('page-template').innerHTML
  var postTemplate = document.getElementById('post-template').innerHTML

  _.template(pageTemplate);

  _.template(postTemplate);
}


function postComment() {
  var commentTemplate = document.getElementById('comment-template').innerHTML

  _.template(commentTemplate)
}