function createPost() {
  let title = document.getElementById("titleText").value;
  let author = document.getElementById("authorText").value;
  let post = document.getElementById("postContent").value;

  let pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  let postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  let blogSection = postTemplateFn({ 'title': title, 'body': post, 'author': author });
  let postDiv = document.getElementById("post");

  postDiv.innerHTML = blogSection;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplateFn();
}

function postComment() {
  let commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);

  let comment = document.getElementById("commentText").value;
  let commenter = document.getElementById("commenter").value;

  let commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplateFn({ 'commenter': commenter, 'comment': comment });
}
