function createPost() {
   var title = document.getElementById("title").value;
   var postContent = document.getElementById("postContent").value;
   var author = document.getElementById("author").value;

   var postTemplate = document.getElementById("post-template").innerHTML;

   //create template function
   var templateFn = _.template(postTemplate);

   var postsDiv = document.getElementById("post").innerHTML;

   var pageTemplateFn = _.template(postsDiv);

   //execute template function with JSON object for the interpolated values
   var templateHTML = templateFn({ 'title': title, 'post': postContent, 'author': author });

   //append rather than replace!
   postsDiv += templateHTML;
}

function postComment() {
  var comment = document.getElementById("comment").value;
  var commenter = document.getElementById("commenter").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
