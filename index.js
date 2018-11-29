function createPost() {
    let title = document.getElementById('postTitle').value
    let author = document.getElementById('postAuthor').value
    let body = document.getElementById('postBody').value

    let pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);
    let postTemplateFn = _.template(document.getElementById('post-template').innerHTML)
 
	let templateHTML = postTemplateFn({'title': title, 'author': author, 'body': body})

	let page = pageTemplateFn()

 	let main = document.querySelector('main')
 	main.innerHTML += page
 	let postDiv = document.getElementById("post"); 
  	postDiv.innerHTML = templateHTML;
}

function postComment() {
	let author = document.getElementById('commentAuthor').value;
	let body = document.getElementById('commentBody').value;

	let commentsTemplateFN = _.template(document.getElementById('comments-template').innerHTML);
	let commentTemplateFN = _.template(document.getElementById('comment-template').innerHTML)

	let commentHTML = postTemplateFn({'author': author, 'body': body})
	let page = commentsTemplateFN()

	debugger

}