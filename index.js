function createPost() {
  const postTemplate = document.getElementById("post-template").innerHTML;
  const pageTemplate = document.getElementById("page-template").innerHTML;
  const postTemplateFn = _.template(postTemplate);
  const pageTemplateFn = _.template(pageTemplate);
}

function postComment() {
  const commentTemplate = document.getElementById("comment-template").innerHTML;
  const templateFn = _.template(commentTemplate);
}
