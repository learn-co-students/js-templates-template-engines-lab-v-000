function createPost() {
  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-body").value;
  const author = document.getElementById("post-author").value;

  const pageTemplate = document.getElementById("page-template").innerHTML;
  const pageTemplateFn = _.template(pageTemplate);
  const pageTemplateHTML = pageTemplateFn();

  let main = document.body.querySelector("main");
  main.innerHTML += pageTemplateHTML;

  const postTemplate = document.getElementById("post-template").innerHTML;
  const postTemplateFn = _.template(postTemplate);
  const postTemplateHTML = postTemplateFn({'title': title, 'body': body, 'author': author});

  let postDiv = document.getElementById("post");
  postDiv.innerHTML += postTemplateHTML;

  const commentsTemplate = document.getElementById("comments-template").innerHTML;
  const commentsTemplateFn = _.template(commentsTemplate);
  const commentsTemplateHTML = commentsTemplateFn();

  postDiv.innerHTML += commentsTemplateHTML;
}

function postComment() {
  const commenter = document.getElementById("commenter-name").value;
  const comment = document.getElementById("comment-text").value;

  const commentTemplate = document.getElementById("comment-template").innerHTML;
  const commentTemplateFn = _.template(commentTemplate);
  const commentTemplateHTML = commentTemplateFn({'commenter': commenter, 'comment': comment});

  let commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplateHTML;
}
