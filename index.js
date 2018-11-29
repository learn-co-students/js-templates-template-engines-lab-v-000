function createPost() {
  let pageTemplate     = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate     = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  let postTitle  = document.getElementById("post-title").value;
  let postBody   = document.getElementById("post-body").value;
  let postAuthor = document.getElementById("post-author").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let postHTML     = postTemplate({ 'title': postTitle, 'body': postBody, 'author': postAuthor });
  let commentsHTML = commentsTemplate();
  let postElement  = document.getElementById("post");
  let footers      = postElement.getElementsByTagName("footer")

  postElement.innerHTML += postHTML;
  footers[footers.length - 1].innerHTML += commentsHTML;
}

function postComment() {
  let commentTemplate  = _.template(document.getElementById("comment-template").innerHTML);

  let commenterName    = document.getElementById("commenter-name").value;
  let commenterComment = document.getElementById("commenter-comment").value;

  let commentsHTML     = document.getElementById("comments");
  commentsHTML.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commenterComment });
}
