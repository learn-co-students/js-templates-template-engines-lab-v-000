function createPost() {
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templatePost = _.template(postTemplate);
  var templateComments = _.template(commentsTemplate);
  var templatePage = _.template(pageTemplate);

  document.getElementsByTagName("main")[0].innerHTML += templatePage();
  var templateHTML = templatePost({ 'title': title, 'body': body, 'author': author });
  var postDiv = document.getElementById("post");
  postDiv.innerHTML += templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML += templateComments();
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);
  
  var commentsDiv = document.getElementById("comments");
  var templateHTML = commentTemplateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}
