function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);


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
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;
  var commentsSection = document.getElementById("comments");
//  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
