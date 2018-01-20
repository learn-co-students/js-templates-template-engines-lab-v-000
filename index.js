function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
 
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
 
  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var commentsTemplate = document.getElementById("comments-template").innerHTML;
 
  //create template function
  var templateFn = _.template(commentTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);
 
  var commentDiv = document.getElementById("comment");
  var commentsDiv = document.getElementById("comments");
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  var commentsTemplateHTML = commentsTemplateFn(templateFn({ 'comment': comment, 'commenter': commenter }));
 
  //append rather than replace!
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