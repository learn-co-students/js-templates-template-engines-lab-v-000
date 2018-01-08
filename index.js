function postComment() {
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate)
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  var title = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  var poster = document.getElementById("postAuthor").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentTemplate = document.getElementById("comments-template").innerHTML;

  var pageFn = _.template(pageTemplate);
  var postFn = _.template(postTemplate);
  var commentsFn = _.template(commentTemplate);

  document.getElementsByTagName("main")[0].innerHTML += pageFn();
  var commentsSection = commentsFn();
  var postDiv = document.getElementById("post");
  var blogPost = postFn({ 'title': title, 'post': post, 'author': poster });
  postDiv.innerHTML += blogPost;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
  debugger;
}
