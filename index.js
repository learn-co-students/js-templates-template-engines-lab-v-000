function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);


  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var post = document.getElementById("post").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogPost = postTemplate({ 'title': title, 'post': post, 'author': author });
  var comments = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogPost;
  postElement.getElementsByTagName("footer")[0].innerHTML = comments;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var comment = document.getElementById("comment").value;
  var commentAuthor = document.getElementById("commenter").value;

  var comments = document.getElementById("comments");
  comments.innerHTML += commentTemplate({ 'commenter': commentAuthor, 'comment': comment });
}
