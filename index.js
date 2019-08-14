function createPost() {
  var title = document.getElementById("post-title").value;
  var body = document.getElementById("post-body").value;
  var author = document.getElementById("post-author").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;

  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);

  var commentTemplate = document.getElementById("comments-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  var post = postTemplateFn({ 'title': title, 'body': body, 'author': author });
  var sidebar = commentTemplateFn({})
  var pageTemplateHTML = pageTemplateFn({ 'post': post, 'sidebar': sidebar });

  var page = document.getElementById("page");

  page.innerHTML = pageTemplateHTML;
};

function postComment() {
  var body = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentsDiv = document.getElementById("comments");

  var commentTemplateFn = _.template(commentTemplate);

  var commentHTML = commentTemplateFn({ 'body': body, 'commenter': commenter });

  commentsDiv.innerHTML += commentHTML;

}
