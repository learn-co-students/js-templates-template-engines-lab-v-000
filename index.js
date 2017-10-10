function createPost() {
	// event.preventDefault();
	var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  var postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  // var sidebar = 
  var postHTML = postTemplateFn({'title': postTitle,'post': post, 'author': postAuthor});

  var pageHTML = pageTemplateFn();

  document.getElementsByTagName("main")[0].innerHTML +=pageHTML;

  var postDiv = document.getElementById("post");
  postDiv.innerHTML += (postHTML+commentsTemplateFn());
}


function postComment(){
	// event.preventDefault();
	var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
	var commentsDiv = document.getElementById("comments");

	var commenter = document.getElementById("commenterName").value;
	var comment = document.getElementById("commentText").value;

	commentsDiv.innerHTML += commentTemplate({'commentText': comment, 'commenterName': commenter});
	
}