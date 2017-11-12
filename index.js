function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postText = document.getElementById("postText").value;
  var postAuthor = document.getElementById("postAuthor").value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);


  var commentsHTML = commentsTemplate();
  var pageHTML = pageTemplate();
  var postHTML = postTemplate({ 'postTitle': postTitle, 'postAuthor': postAuthor, 'postText': postText });

  var mainDiv = document.getElementsByTagName("main")[0];
  mainDiv.innerHTML += pageHTML;
  mainDiv.innerHTML += commentsHTML;
  var postDiv = document.getElementById("post");
  postDiv.innerHTML += postHTML;
}

function postComment() {
  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentHTML = commentTemplate({ 'commentText': commentText, 'commenterName': commenterName});
  var mainDiv = document.getElementsByTagName("main")[0];
  mainDiv.innerHTML += commentHTML;
}
