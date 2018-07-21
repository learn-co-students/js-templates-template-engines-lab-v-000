
function createPost() {
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postBody = document.getElementById("postBody").value;

  let templateFnPage = _.template(document.getElementById("page-template").innerHTML);
  let templateFnPost = _.template(document.getElementById("post-template").innerHTML);
  let templateFnComments = _.template(document.getElementById("comments-template").innerHTML);

  //page
  let pageMain = document.getElementsByTagName("main")[0];
  pageMain.innerHTML += templateFnPage;

  //blog
  let post = document.getElementById("post")
  post.innerHTML = templateFnPost({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor})

  //comments
  let comments = templateFnComments()
  post.getElementsByTagName("footer")[0].innerHTML = comments;
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  let templateFn = _.template(document.getElementById("comment-template").innerHTML);
  let commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += templateFn({'comment': comment, 'commenter': commenter});
}
