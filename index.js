function createPost() {
  // Page Template
  const pageTemplate = document.getElementById('page-template').innerHTML; 
  const pageTemplateFn = _.template(pageTemplate);

  const pageTemplateHTML = pageTemplateFn();

  document.getElementById('main').innerHTML += pageTemplateHTML;

  // Post Template
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;
  const author = document.getElementById("postAuthor").value;

  const postDiv = document.getElementById("post");
  const postTemplate = document.getElementById("post-template").innerHTML;
  const postTemplateFn = _.template(postTemplate);

  const postTemplateHTML = postTemplateFn(
    {'title': title, 'body': body, 'author': author}
  );

  document.getElementById("postTitle").value = '';
  document.getElementById("postBody").value = '';
  document.getElementById("postAuthor").value = '';

  // Commments Template
  const commentsTemplate = document.getElementById("comments-template").innerHTML;
  const commentsTemplateFn = _.template(commentsTemplate);

  const commentsTemplateHTML = commentsTemplateFn();

  postDiv.innerHTML += postTemplateHTML;
  postDiv.innerHTML += commentsTemplateHTML;
}

function postComment() {
  const comment = document.getElementById("comment").value;
  const commenter = document.getElementById("commenter").value;

  const commentTemplate = document.getElementById("comment-template").innerHTML;
  const commentTemplateFn = _.template(commentTemplate);

  const commentTemplateHTML = commentTemplateFn(
    {'comment': comment, 'commenter': commenter}
  );

  document.getElementById("comment").value = '';
  document.getElementById("commenter").value = '';

  const commentDiv = document.getElementById("comments");

  commentDiv.innerHTML += commentTemplateHTML;
}
