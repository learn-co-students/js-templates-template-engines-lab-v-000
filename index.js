function createPost() {
  let title = document.getElementById("title").value;
  let blog = document.getElementById("blog").value;
  let author = document.getElementById("author").value;

  let pageTemplate = document.getElementById("page-template").innerHTML;
  let postTemplate = document.getElementById("post-template").innerHTML;
  let commentsTemplate = document.getElementById("comments-template").innerHTML;

  let pageTemplateFn = _.template(pageTemplate)
  let postTemplateFn = _.template(postTemplate)
  let commentsTemplateFn = _.template(commentsTemplate)
}

function postComment() {
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  let templateFn = _.template(commentTemplate);
}
