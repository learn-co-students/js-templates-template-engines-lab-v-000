function createPost() {
	var postTemplate = document.getElementById('post-template').innerHTML;
	var postTemplateFn = _.template(postTemplate);

	// var postsDiv = document.getElementById('page-template')
	var pageTemplate = document.getElementById('page-template').innerHTML;
	var pageTemplateFn = _.template(pageTemplate)

	var commentsTemplate = document.getElementById('comments-template').innerHTML;
	var commentsTemplateFn = _.template(commentsTemplate)

	var title = document.getElementById('postTitle').value;
	var body = document.getElementById('postBody').value;
	var author = document.getElementById('postAuthor').value;

	document.getElementsByTagName('main')[0].innerHTML += pageTemplateFn()
	

	var templateHTML = postTemplateFn({'title': title, 'body': body, 'author': author});
	var postElement = document.getElementById("post")

	postElement.innerHTML += templateHTML;

	document.getElementsByTagName('article')[0].innerHTML += commentsTemplateFn()
}

function postComment() {
	var commenter = document.getElementById('commenterName').value;
	var comment = document.getElementById('commentText').value;

	var commentTemplate = document.getElementById('comment-template').innerHTML;
	var templateFn = _.template(commentTemplate);

	var commentsDiv = document.getElementById("comments");

	var templateHTML = templateFn({'comment': comment, 'commenter': commenter});

	commentsDiv.innerHTML += templateHTML;
}