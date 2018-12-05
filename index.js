function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += templateFn({ 'commenter': commenterName, 'comment': commentText });
}

function createPost() {
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  var section = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var comments = commentsTemplate();
  var postElement = document.getElementById("post");
  postElement.innerHTML = section;
  postElement.getElementsByTagName("footer")[0].innerHTML = comments;
}
