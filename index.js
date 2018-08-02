function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);
  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor });
  postsDiv.innerHTML += templateHTML;
  //var commenter = document.getElementById("commenterName").value;
  //var comment = document.getElementById("commentText").value;

  //var pageTemplate = document.getElementById("page-template").innerHTML;
  //var templateFn = _.template(pageTemplate);

  //var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  //commentsDiv.innerHTML += templateHTML;
}
