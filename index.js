function createPost() {
  var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  var postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementById("page").innerHTML += pageTemplateFn()

  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  document.getElementById("post").innerHTML += postTemplateFn({ 'title': title, 'body': body, 'author': author})
  document.getElementById("sidebar").innerHTML += commentsTemplateFn()
}

function postComment() {
  var name = document.getElementById("commentName").value;
  var body = document.getElementById("commentBody").value;

  var commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);

  document.getElementById("comments").innerHTML += commentTemplateFn({'name': name, 'body': body})
}
