function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;
  let commentTemplate = document.getElementById("comment-template").innerHTML;
  const templateFn = _.template(commentTemplate);
  let commentsDiv = document.getElementById("comments");

  const templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  // below creates template functions
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // below gets blog values
  let author = document.getElementById("postAuthor").value;
  let body = document.getElementById("postBody").value;
  let title = document.getElementById("postTitle").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  const blogSection = postTemplate({ 'author': author, 'body': body, 'title': title })
  const commentsSection = commentsTemplate();

  let post = document.getElementById("post");
  post.innerHTML = blogSection;
  post.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}
