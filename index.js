function postComment() {
var commenter = document.getElementById("commenterName").value;
var comment = document.getElementById("commentText").value;

var commentTemplate = document.getElementById("comment-template").innerHTML;
//create template function
var templateFn = _.template(commentTemplate);
//locate existing comments to append
var commentsDiv = document.getElementById("comments");
//execute template function with JSON object for the interpolated values
var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
//append rather than replace!
commentsDiv.innerHTML += templateHTML;
}


function createPost() {
  // create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': title, 'body': body, 'poster': author });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}
