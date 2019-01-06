function createPost(){
	//get variables from post form
	const title = document.getElementById('postTitle').value;
	const author = document.getElementById('postAuthor').value;
	const body = document.getElementById('postBody').value;

	//post template functions
	const postTemplateFn = _.template(document.getElementById('post-template').innerHTML);
	const newPost = postTemplateFn({title: title, author: author, body: body});

	//comments template functions
	const commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);
	const newComments = commentsTemplateFn();

	//page template functions
	const pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
	document.querySelector('main').innerHTML += pageTemplateFn();
	
	let pageBody = document.getElementById('post');
	pageBody.innerHTML = newPost
	pageBody.querySelector('footer').innerHTML += newComments
}

function postComment(){
	const commenter = document.getElementById('commenterName').value;
    const comment = document.getElementById('commentText').value;	

    const commentTemplateFn = _.template(document.getElementById('comment-template').innerHTML);
    const newComment = commentTemplateFn({comment: comment, commenter: commenter})

    let commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML += newComment;
}




