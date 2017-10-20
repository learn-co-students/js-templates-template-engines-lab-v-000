function createPost() {
  const title = document.querySelector("#inputTitle").value;
  const body = document.querySelector("#inputBody").value;
  const author = document.querySelector("#inputAuthor").value;

  const postTemplate = document.querySelector("#post-template").innerHTML;
  const postTemplateFn = _.template(postTemplate);

  const postHTML = postTemplateFn({'title': title, 'body': body, 'author': author});

  const pageTemplate = document.querySelector("#page-template").innerHTML;
  const pageTemplateFn = _.template(pageTemplate);

  const pageHTML = pageTemplateFn({'postHTML': postHTML});
}

function postComment() {
  const comment = document.querySelector("#inputComment");
  const user = document.querySelector("#inputUser");

  const commentTemplate = document.querySelector("#comment-template").innerHTML;
  const commentTemplateFn = _.template(commentTemplate);

  const commentHTML = commentTemplateFn({'comment': comment, 'user': user});
}
