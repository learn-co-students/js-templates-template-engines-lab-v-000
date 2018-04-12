function createPost() {
  var postAuthor = document.getElementById("postAuthor").value;
  var postTitle = document.getElementById("postTitle").value;
  var postText = document.getElementById("postText").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate;

  var postTemplateHTML = postTemplateFn({ 'postText': postText, 'postAuthor': postAuthor, 'postTitle': postTitle });
  var postDiv = document.getElementById("post");
  postDiv.innerHTML += postTemplateHTML;

  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);
  var commentsDiv = document.getElementById("comments-form");
  commentsDiv.innerHTML += commentsTemplate;

}

function postComment() {
  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenterName").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  var commentTemplateHTML = commentTemplateFn({ 'commentText': commentText, 'commenterName': commenterName });
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplateHTML;
}
