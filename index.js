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

// function postComment() {
//   var commenter = document.getElementById("comment").value;
//   var comment = document.getElementById("commentText").value;
//   var commentTemplate = document.getElementById("comment-template").innerHTML; // same as below
//   var templateFn = _.template(commentTemplate); //same
//   var commentsDiv = document.getElementById("comments"); //same as below
//   var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter }); //same as below
//   commentsDiv.innerHTML += templateHTML; //same
// }
function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;
  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
