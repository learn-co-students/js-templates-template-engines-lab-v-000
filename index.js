function createPost {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postSection = postTemplate({'title': postTitle, 'body': postBody, 'author': postAuthor});
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentContent = document.getElementById("commentContent").value;
  var commentAuthor = document.getElementById("commentAuthor").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({'author': commentAuthor, 'content': commentContent});
}
