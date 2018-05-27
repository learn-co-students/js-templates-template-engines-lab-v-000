function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  let postTemplate = document.getElementById("post-template").innerHTML;

  let postTitle = document.getElementById("postTitle").value;
  let postBody = document.getElementById("postBody").value;
  let postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  document.getElementsByTagName("main")[0].innerHTML += commentsTemplate();

  let templateFn = _.template(postTemplate);

  let postsDiv = document.getElementById("post");

  let templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor });

  postsDiv.innerHTML += templateHTML;
}

function postComment() {
  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenterName").value;

  let commentTemplate = document.getElementById("comment-template").innerHTML;

  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  let templateHTML = templateFn({ 'commentText': commentText, 'commenterName': commenterName });

  commentsDiv.innerHTML += templateHTML;
}
