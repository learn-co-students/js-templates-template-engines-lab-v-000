
function createPost() {

  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  //create template strings
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  //create page template function
  var pageTemplateFn = _.template(pageTemplate);
  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
  var commentTemplateFn = _.template(commentsTemplate);

  var commentsSelection = commentTemplateFn();
  //var sidebarDiv = document.getElementById("sidebar");
  var postDiv = document.getElementById("post");

  //create post template function
  var postTemplateFn = _.template(postTemplate);
  var postSection = postTemplateFn({ 'title': title, 'body': body, 'author': author })
  postDiv.innerHTML = postSection;
  postHtml.getElementsByTagName("footer")[0].innerHTML = commentsSelection;
}

function postComment() {

  //create template function
  var templateFn = _.template(commentTemplate);

  //create template strings
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;

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
