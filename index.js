function createPost() {
  var title = document.getElementById('postTitle').value;
  var author = document.getElementById('postAuthor').value;
  var body = document.getElementById('postBody').value;
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commenterName = document.getElementById("commenter").value;
  var commentText = document.getElementById("commentText").value;
  var commentsSection = document.getElementById("comments");
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
