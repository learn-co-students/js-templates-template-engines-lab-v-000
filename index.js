function createPost () {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
}
