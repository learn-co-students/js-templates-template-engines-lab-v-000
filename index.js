function createPost() {
  var author = document.getElementById("authorName").value;
  var content = document.getElementById("postContent").value;
  var title = document.getElementById("postTitle").value;

  var postTemplate = document.getElementById("post-template").innerHTML;

 var templateFn = _.template(postTemplate);

 var postsDiv = document.getElementById("posts");

 //execute template function with JSON object for the interpolated values
 var templateHTML = templateFn({ 'body': content, 'poster': author, 'title': title });

 //append rather than replace!
 postsDiv.innerHTML += templateHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}
