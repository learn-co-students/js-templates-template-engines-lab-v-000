function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  //post Values

  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody").value;
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML)
}
