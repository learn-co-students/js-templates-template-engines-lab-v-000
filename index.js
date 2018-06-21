function createPost() {


  const pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  const postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  const commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  const title = document.getElementById("postTitle").value;
  const poster = document.getElementById("postAuthor").value;
  const body = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  const post = postTemplateFn({'title': title, 'body': body, 'poster': poster});
  const comments = commentsTemplateFn();

  document.getElementById("post").innerHTML = post;
  document.getElementById("post").innerHTML += comments;
}

function postComment() {
  const commenter = document.getElementById("commenter").value;
  const comment = document.getElementById("commentText").value;

  const templateFn = _.template(document.getElementById("comment-template").innerHTML);

  const commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += templateFn({'comment': comment, 'commenter': commenter});
}
