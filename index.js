function createPost() {
  const pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  const postTemplate = _.template(document.getElementById('post-template').innerHTML);
  const commentsTemplate = _.template(document.getElementById('comments-template'));
}

function postComment() {
  const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
}