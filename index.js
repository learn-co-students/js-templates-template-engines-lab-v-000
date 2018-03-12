function createPost(){
  // read the the post values from the form
  var title = document.getElementById('postTitle').value;
  var author = document.getElementById('postAuthor').value;
  var body = document.getElementById('postBody').value;

  // load the page template with divs for posts and sidebar
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);

  // setup main using the page template we just loaded
  document.getElementById("main").innerHTML += pageTemplate();

  // create the new post HTML using the template
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  var postHTML = postTemplate({'title': title, 'author': author, 'body': body });

  // create the comments form using the template
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
  var commentsHTML = commentsTemplate()

  var postsDiv = document.getElementById('posts'); //grabs first post

  postsDiv.innerHTML = postHTML
  postsDiv.getElementsByTagName("footer")[0].innerHTML = commentsHTML
}

function postComment(){
  //comment values
	var commenter = document.getElementById('commenterName').value;
	var comment = document.getElementById('commentText').value;

  //create template string
  //create template function
  var commentTemplate = document.getElementById('comment-template').innerHTML;
	var commentTemplateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
	var commentHTML = commentTemplateFn({'commenter': commenter, 'comment': comment });

  //append
	commentsDiv.innerHTML += commentHTML;
}
