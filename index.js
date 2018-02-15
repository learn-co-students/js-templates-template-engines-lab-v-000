
function createPost() {

  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;
  debugger;
  //create template strings
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;

  //create page template function
  var pageTemplateFn = _.template(pageTemplate);
  var sidebarDiv = document.getElementById("sidebar");
  var postDiv = document.getElementById("post");

  //create post template function
  var postTemplateFn = _.template(postTemplate);

}

function postComment() {

  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  debugger;
  //create template strings
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;

}


//execute template function with JSON object for the interpolated values
//var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

//append rather than replace!
//commentsDiv.innerHTML += templateHTML;
