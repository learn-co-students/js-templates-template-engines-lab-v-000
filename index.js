function createPost(){
	const postTitle = document.getElementById('postTitle').value
	const postAuthor = document.getElementById('postAuthor').value
	const postBody = document.getElementById('postBody').value
	const postTemplate = document.getElementById('post-template').innerHTML
	const postTemplateFn = _.template(postTemplate)

	const pageTemplate = document.getElementById('page-template').innerHTML
	const pageTemplateFn = _.template(pageTemplate)

	const commentsTemplate = document.getElementById('comments-template').innerHTML
	const commentsTemplateFn = _.template(commentsTemplate)

	const commentsHTML = commentsTemplateFn()
	const postHTML = postTemplateFn({'postBody': postBody, 'postTitle': postTitle, 'postAuthor': postAuthor})
	const pageHTML = pageTemplateFn({'blogPost': postHTML, 'comments': commentsHTML})

	document.getElementById('main').innerHTML += pageHTML
	
}

function postComment(){
	
	const commenter = document.getElementById('commenterName').value
	const comment = document.getElementById('commentText').value
	const commentTemplate = document.getElementById('comment-template').innerHTML
	const commentTemplateFn = _.template(commentTemplate)

	const commentHTML = commentTemplateFn({'commenter': commenter, 'comment': comment})
	const commentsDiv = document.getElementById('comments')

	commentsDiv.innerHTML += commentHTML

}