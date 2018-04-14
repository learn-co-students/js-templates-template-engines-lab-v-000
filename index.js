function createPost() {
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author =document.getElementById("postAuthor").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(pageTemplate);

//  var start = document.getElementById("comments");

  var templateHTML = templateFn();
//  debugger

  document.getElementById("start").innerHTML = templateHTML;

  templateFn = _.template(postTemplate);

  templateHTML = templateFn({ 'title': title, 'body': body,'author': author });

//  debugger

  document.getElementById("start").innerHTML += templateHTML;

  templateFn = _.template(commentsTemplate);

  templateHTML = templateFn();

  document.getElementById("start").innerHTML += templateHTML;

}
function postComment(){
  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var templateHTML = templateFn({'comment':comment, 'commenter':commenter});

  document.getElementById("comments").innerHTML += templateHTML;

}
