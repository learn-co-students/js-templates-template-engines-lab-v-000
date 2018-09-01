function createPost() {

  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var templateHTML = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postDiv = document.getElementById("post");

  postDiv.innerHTML = templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;

}

function postComment() {

  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("comment").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsDiv = document.getElementById("comments");
   commentsDiv.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });
}
