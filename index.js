function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commenterName = document.getElementById("commenterName").value;
  let commentText = document.getElementById("commentText").value;
  let comments = document.getElementById("comments");
  comments.innerHTML += commentTemplate({ 'comment': commentText, 'commenter': commenterName });
}

function createPost() { 
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
	let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let body = document.getElementById("body").value;
	document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
	let postSection = postTemplate({"title": title, "body": body, "author": author});
  let commentsSection = commentsTemplate();
  let post = document.getElementById("post");
	post.innerHTML = postSection;
	post.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}