function createPost(){
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var templateHTML = postTemplate({'title' : postTitle, 'post' : postBody, 'author' : postAuthor});
  var postDiv = document.getElementById("post");

  postDiv.innerHTML += templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML += commentsTemplate();
}


function postComment(){
  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplate({'comment' : comment, 'commenter' : commenter});
}
