function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  //these now are called with ();

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  var postSection = postTemplate({'title': postTitle, 'body': postBody, 'poster': postAuthor});
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({'commenter': commenter, 'comment': comment});
}
