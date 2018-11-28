function createPost() {
  let pageTemplate     = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate     = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  let postTitle  = document.getElementById("post-title").value;
  let postBody   = document.getElementById("post-body").value;
  let postAuthor = document.getElementById("post-author").value;
}

function postComment() {
  let commentTemplate  = _.template(document.getElementById("comment-template").innerHTML);
}
