function createPost() {
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);

  var postName = document.getElementById("postName").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  var blogSection = postTemplate({
    'title': postName,
    'body': postBody,
    'poster': postAuthor
  });
  var commentsDiv = commentsTemplate();
  var postElement = document.getElementById("post");
  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsDiv;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;

  var commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += commentTemplate({
    'commenter': commenterName,
    'comment': commentText
  });
};
