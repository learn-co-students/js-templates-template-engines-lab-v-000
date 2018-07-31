// function createPost() {
//   var post = document.getElementById('postText').value;
//   var poster = document.getElementById('posterName').value;
//
//   var postTemplate = document.getElementById("post-template").innerHTML;
//   var templateFn = _.template(postTemplate);
//   var postarea = document.getElementById('post')
//   var templateHTML = templateFn({ 'postContent': post, 'postAuthor': poster });
//   postarea.innerHTML += templateHTML;
// }
//
// function postComment() {
//
// }
//
function createPost() {
  // create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenterName").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenterName': commenterName, 'comment': commentText });
}
