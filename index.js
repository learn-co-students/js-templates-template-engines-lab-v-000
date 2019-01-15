function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({"title": postTitle, "body": postBody, "poster": postAuthor});
  var commentsSection = commentsTemplate();
  var postDiv = document.getElementById("post");

  postDiv.innerHTML = blogSection;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}


function postComment() {
  var commenterName = document.getElementById("commenter").value;
  var commentText = document.getElementById("commentText").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplate({ "commenter": commenterName, "comment": commentText });
}
