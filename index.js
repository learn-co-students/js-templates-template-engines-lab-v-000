function createPost() {
	var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
	var postTemplate = _.template(document.getElementById("post-template").innerHTML);
	var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

	var ctitle = document.getElementById("commentTitle").value;
	var cbody = document.getElementById("commentBody").value;
	var cauthor = document.getElementById("commentAuthor").value;

	document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

	var blogSection = postTemplate({ 'ctitle': ctitle, 'cbody': cbody, 'cauthor': cauthor });
	var commentsSection = commentsTemplate();
	var postsDiv = document.getElementById("post");

	postsDiv.innerHTML = blogSection;
	postsDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
	var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

	var	commentText = document.getElementById("commentText").value;
	var commenterName = document.getElementById("commenter").value;

	var commentsSection = document.getElementById("comments");
	commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}