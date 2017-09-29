function createPost(){
	var postTitle = document.getElementById('title').value;
	var postBody = document.getElementById('body').value;
	var postAuthor = document.getElementById('author').value;

	var postTemplate = document.getElementById('post-template').innerHTML;
	var pageTemplate = document.getElementById('page-template').innerHTML;
	var commentsTemplate = document.getElementById('comments-template').innerHTML;

	var pageTemplateFn = _.template(pageTemplate)
	var postTemplateFn = _.template(postTemplate);
	var commentsTemplateFn = _.template(commentsTemplate)

	document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
	document.getElementsByTagName("main")[0].innerHTML += commentsTemplateFn();

	var postArticle = document.getElementById('post')

	var postTemplateHTML = postTemplateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor });

	postArticle.innerHTML += postTemplateHTML;
}	

function postComment(){
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  
  var commentTemplate = document.getElementById("comment-template").innerHTML;
 
  var templateFn = _.template(commentTemplate);
 
  var commentsDiv = document.getElementById("comments");
 
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 
  commentsDiv.innerHTML += templateHTML;
}