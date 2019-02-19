function createPost() {
// create template functions for execution
var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
var postTemplate = _.template(document.getElementById("post-template").innerHTML);
var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

//get and assign blog values

var postTitle = document.getElementById("postTitle").value;
var postAuthor = document.getElementById("postAuthor").value;
var post = document.getElementById("postBody").value;

document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

const blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
const commentsSection = commentsTemplate();
const postElement = document.getElementById("post");

postElement.innerHTML = blogSection;
postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let comment = document.getElementById("comment").value;
  let commenter = document.getElementById("commenter").value;
  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment});
}
