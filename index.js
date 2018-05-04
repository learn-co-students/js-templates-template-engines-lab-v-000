function createPost() {
  let title = document.getElementById("postTitle").value;
  let author = document.getElementById("postAuthor").value;
  let body = document.getElementById("postBody").value;

  let postTemplateFn = _.template(document.getElementById("post-template").innerHTML);

  let newPost = postTemplateFn({postTitle: title, postAuthor: author, postBody: body});

  let pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);

  let newPage = pageTemplateFn();

  document.body.innerHTML += newPage;

  postDiv = document.getElementById("post");

  postDiv.innerHTML = newPost
}

function createComments() {
  let commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  let commentsSection = commentsTemplateFn();

  document.getElementById("sidebar").innerHTML = commentsSection;

  return commentsSection;
}

function postComment() {
  let commentsSection = document.getElementById("comments") || createComments();

  let comment = document.getElementById("commentBody").value;
  let commenter = document.getElementById("commenter").value;

  let commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);

  let newComment = commentTemplateFn({commentBody: comment, commenter: commenter});

  commentsSection.innerHTML += newComment;
}