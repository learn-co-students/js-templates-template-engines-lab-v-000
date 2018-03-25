function createPost() {
  // create template functions
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("authorName").value;
  let post = document.getElementById("postText").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let blogSection = postTemplate({ 'title': postTitle, 'post': post, 'author': postAuthor });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenterName").value;

  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
