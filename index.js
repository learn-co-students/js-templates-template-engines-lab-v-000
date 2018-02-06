
function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var templateFn = _.template(commentTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);

  var commentDiv = document.getElementById("comment");
  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  var commentsTemplateHTML = commentsTemplateFn(templateFn({ 'comment': comment, 'commenter': commenter }));

  commentDiv.innerHTML += templateHTML;
  commentsDiv.innerHTML += commentsTemplateHTML;
};

function createPost() {
	var title = document.getElementById("postTitle").value;
	var content = document.getElementById("postContent").value;
	var author = document.getElementById("postAuthor").value;

	var pageTemplate = document.getElementById("page-template").innerHTML;

	var postTemplate = document.getElementById("post-template").innerHTML;

	var pageTemplateFn = _.template(pageTemplate);

	var postTemplateFn = _.template(postTemplate);

	var pageDiv = document.getElementById("page");

	var postDiv = document.getElementById("post");

	var postTemplateHTML = postTemplateFn( { 'title': title, 'content': content, 'author': author } );

	var pageTemplateHTML = pageTemplateFn(postTemplateFn( { 'title': title, 'content': content, 'author': author } ));

	postDiv.innerHTML += postTemplateHTML;
	pageDiv.innerHTML += pageTemplateHTML;
}
