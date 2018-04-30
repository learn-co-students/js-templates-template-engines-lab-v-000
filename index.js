function postComment() {
  const commenter = document.getElementById("commenterName").value;
  const comment = document.getElementById("commentText").value;

  const commentTemplate = document.getElementById("comment-template").innerHTML;

  const templateFn = _.template(commentTemplate);

  const commentsDiv = document.getElementById("comments");

  const templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  const postTitle = document.getElementById("postTitle").value;
  const posterName = document.getElementById("posterName").value;
  const postBody = document.getElementById("postBody").value;

  const postTemplate = _.template(document.getElementById("post-template").innerHTML);
  const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  const templateHTML = postTemplate({ 'postTitle': postTitle, 'postBody': postBody, 'posterName': posterName });
  const commentsSection = commentsTemplate();
  const postDiv = document.getElementById("post");

  postDiv.innerHTML = templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;

}
