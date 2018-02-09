function createPost() {
  const pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  const postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  const commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  let postTitle = document.getElementById("postTitle").value;
  let post = document.getElementById("postBody").value;
  let postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  let blogSection = postTemplateFn({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  let commentsSection = commentsTemplateFn();
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
  
}

function postComment() {
  const commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);

  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenter").value;

  let commentsSection = document.getElementById("comments");
  
  commentsSection.innerHTML += commentTemplateFn({ 'commenter': commenterName, 'comment': commentText });
}