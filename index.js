


// var postTemplate = document.getElementById('post-template').innerHTML;
// var commentsTemplate = document.getElementById('comments-template').innerHTML;
//
function createPost(){

  var pageTemplate = document.getElementById('page-template').innerHTML;
  var templateFn = _.template(pageTemplate);
  var postTemplate = document.getElementById('post-template').innerHTML;
  var templateFn = _.template(postTemplate);
}

function postComment(){
  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var templateFn = _.template(commentTemplate);
}
