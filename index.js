function createPost() {
  // set up templates
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // store post values from form
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  // append page template to main
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // fill in post template and create HTML for each post
  var postSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var postElement = document.getElementById("post");
  postElement.innerHTML = postSection;

  // set up comments template and HTML for comments section
  var commentsSection = commentsTemplate();
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
