function createPost() {
  const pageTemplate = document.getElementById("page-template").innerHTML;
  const pageTemplateFn = _.template(pageTemplate);
  const postTemplate = document.getElementById("post-template").innerHTML;
  const postTemplateFn = _.template(postTemplate);
  const commentsTemplate = document.getElementById("comments-template").innerHTML;
  const commentsTemplateFn = _.template(commentsTemplate);

  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;
  const author = document.getElementById("postAuthor").value;

  const main = document.getElementById("main");
  main.innerHTML += pageTemplateFn();

  const templateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author });
  const postDiv = document.getElementById("post");
  postDiv.innerHTML = templateHTML;

  const postsComments = document.querySelector('footer');
  const commentsSection = commentsTemplateFn();
  postsComments.innerHTML += commentsSection;
}

function postComment() {
  const commenter = document.getElementById("commenterName").value;
  const comment = document.getElementById("commentBody").value;

  const commentTemplate = document.getElementById("comment-template").innerHTML;
  const templateFn =_.template(commentTemplate);

  const templateHTML = templateFn({'comment': comment, 'commenter': commenter});

  const commentsDiv = document.getElementById("comments-template");
  commentsDiv.innerHTML += templateHTML;
}
