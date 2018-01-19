function addPageTemplate() {
		const main = document.getElementById('main'),
	      pageTemplate = document.getElementById('page-template').innerHTML;
		var templateFn = _.template(pageTemplate);

		main.innerHTML += templateFn();
}

function getPostTemplateHTML(title, body, author) {
	const post = document.getElementById('post'),
				postTemplate = document.getElementById('post-template').innerHTML;
				
	var postTemplateFn = _.template(postTemplate);
	var postTemplateHTML = postTemplateFn({'title': title, 'body': body, 'author': author});
	return postTemplateHTML;
}

function getCommentsTemplateHTML() {
	const commentsTemplate = document.getElementById('comments-template').innerHTML;

	return _.template(commentsTemplate)();
}

function createPost() {
	const title = document.getElementById('title').value, 
				body = document.getElementById('body').value, 
				author = document.getElementById('author').value;

	addPageTemplate(); //add div#post to page

	//get post template HTML
	postTemplateHTML = getPostTemplateHTML(title, body, author);
	
	postTemplateHTML += getCommentsTemplateHTML();

	post.innerHTML += postTemplateHTML;
}

function postComment() {
	const commentsDiv = document.getElementById('comments'), 
				commentTemplate = document.getElementById('comment-template').innerHTML;

	const name = document.getElementById('commenter').value, 
				comment = document.getElementById('commentBody').value;
	
	commentTemplateFn = _.template(commentTemplate);
	commentTemplateHTML = commentTemplateFn({'commenter': name, 'comment': comment});

	commentsDiv.innerHTML += commentTemplateHTML;
}