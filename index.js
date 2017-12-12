function createPost() {
  var pageTemplate = _.template(document)
  var pageTemplateFunction = _.template(document.getElementById("page-template").innerHTML);
  var postTemplateFunction = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplateFunction = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  var postHTML = postTemplateFunction({'title': postTitle,'post': post, 'author': postAuthor});

  var pageHTML = pageTemplateFunction();

  document.getElementsByTagName("main")[0].innerHTML +=pageHTML;

  var postDiv = document.getElementById("post");
  postDiv.innerHTML += (postHTML+commentsTemplateFunction());
}

function postComment() {
	var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
	var commentsDiv = document.getElementById("comments");

	var commenter = document.getElementById("commenterName").value;
	var comment = document.getElementById("commentText").value;

	commentsDiv.innerHTML += commentTemplate({'commentText': comment, 'commenterName': commenter});
}
