function createPost() {
	var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
	var postTemplate = _.template(document.getElementById('post-template').innerHTML);
	var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
	// get post information
	var	postTitle = document.getElementById('postTitle').value;
	var postBody = document.getElementById('postBody').value;
	var postAuthor = document.getElementById('postAuthor').value;
	
	var elMain = document.getElementById('main');
	elMain.innerHTML += pageTemplate();

	var postSection = postTemplate({title: postTitle, post: postBody, author: postAuthor})
	var commentSection = commentsTemplate();

	var postElement = document.getElementById('post');
	postElement.innerHTML = postSection;

	var sidebarElement = document.getElementById('sidebar');
	sidebarElement.innerHTML += commentSection;
}

function postComment() {
	var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

	var commenter = document.getElementById('commenterName').value;
	var comment = document.getElementById('commenterText').value;

	var commentSection = commentTemplate({comment: comment, commenter: commenter});

	var postSection = document.getElementById('post');
	postSection.innerHTML += commentSection;
}

