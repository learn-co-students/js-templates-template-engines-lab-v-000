function createPost() {
	// Template functions
	var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
	var postTemplate = _.template(document.getElementById("post-template").innerHTML);
	var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
	
	// Blog values
	var postTitle = document.getElementById("postTitle").value;
	var postAuthor = document.getElementById("postAuthor").value;
	var postContent = document.getElementById("postContent").value;

	// append, not replace!
	document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

	const blogSection = postTemplate({"title": postTitle, "content": postContent, "author": postAuthor});
	const commentsSection = commentsTemplate();
	const postElement = document.getElementById("post");

	postElement.innerHTML = blogSection;
	postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
	var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
	var commentText = document.getElementById("commentText").value;
	var commenterName = document.getElementById("commenter").value;
	var commentsSection = document.getElementById("comments");
	commentsSection.innerHTML += commentTemplate({"commenter": commenterName, "comment": commentText})
}


