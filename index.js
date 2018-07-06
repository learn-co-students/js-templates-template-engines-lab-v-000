function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postContent = document.getElementById("postContent").value;

  var pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);
  var postTemplateFn = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  var post = postTemplateFn({ 'title': postTitle, 'author': postAuthor, 'content': postContent })
  document.getElementById("post").innerHTML = post;

  var comments = commentsTemplateFn();
  document.getElementById("post").innerHTML += comments;
}

function postComment() {
  var commenter = document.getElementById("commenter".value);
  var comment = document.getElementById("commentText".value);

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate)

  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}
