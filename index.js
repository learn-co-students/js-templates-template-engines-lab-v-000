const pageTemplate = document.getElementById("page-template").innerHTML;
const postTemplate = document.getElementById("post-template").innerHTML;
const commentsTemplate = document.getElementById("comments-template").innerHTML;
const commentTemplate = document.getElementById("comment-template").innerHTML;
const main = document.querySelector("main");

function createPost() {
  let postTitle = document.getElementById("postTitle").value;
  let postContent = document.getElementById("postContent").value;

  let postFn = _.template(postTemplate)({ 'postTitle': postTitle, 'postContent': postContent });
  let pageFn = _.template(pageTemplate)({ 'post': postFn });

  main.innerHTML += pageFn;
  main.innerHTML += _.template(commentsTemplate);
}

function postComment() {
  let commenter = document.getElementById("commenter").value;
  let comment = document.getElementById("comment").value;

  let templateFn = _.template(commentTemplate)({ 'comment': comment, 'commenter': commenter });

  let commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += templateFn;
}
