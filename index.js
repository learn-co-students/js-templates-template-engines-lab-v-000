function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'author': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
};

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter });
};
