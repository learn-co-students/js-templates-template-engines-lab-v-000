function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  var pageDiv = document.getElementById("page");
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  var pageTemplateHTML = pageTemplateFn();
  pageDiv.innerHTML = pageTemplateHTML;

  var postsDiv = document.getElementById("post");
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var postTemplateHTML = postTemplateFn({ 'title': postTitle, 'author': postAuthor, 'post': postBody });
  postsDiv.innerHTML = postTemplateHTML;

  var commentFormDiv = document.getElementById("comment-form");
  var commentFormTemplate = document.getElementById("comments-template").innerHTML;
  var commentFormTemplateFn = _.template(commentFormTemplate);
  var commentFormTemplateHTML = commentFormTemplateFn();
  commentFormDiv.innerHTML = commentFormTemplateHTML;

}


function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentsDiv = document.getElementById("comments");
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  var commentTemplateHTML = commentTemplateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += commentTemplateHTML;
}
