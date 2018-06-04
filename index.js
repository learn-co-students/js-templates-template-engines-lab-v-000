function createPost() {
  // Page
  const pageTemplate = document.getElementById('page-template').innerHTML; 
  const pageTemplateFn = _.template(pageTemplate);

  const pageTemplateHTML = pageTemplateFn();

  console.log(pageTemplateHTML);

  document.getElementById('main').innerHTML += pageTemplateHTML;

  // Post
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;
  const author = document.getElementById("postAuthor").value;

  const postDiv = document.getElementById("post");
  const postTemplate = document.getElementById("post-template").innerHTML;
  const postTemplateFn = _.template(postTemplate);

  const postTemplateHTML = postTemplateFn(
    {'title': title, 'body': body, 'author': author}
  );

  const commentsTemplate = document.getElementById("comments-template").innerHTML;
  const commentsTemplateFn = _.template(commentsTemplate);

  const commentsTemplateHTML = commentsTemplateFn();

  postDiv.innerHTML += postTemplateHTML;
  postDiv.innerHTML += commentsTemplateHTML;
}

function postComment() {
  const commenterName = document.getElementById("commenterName");
  const commenterText = document.getElementById("commenterText");

  const commentDiv = document.getElementById("comments");

  const commentTemplate = document.getElementById("comment-template").innerHTML;
  const commentTemplateFn = _.template(commentTemplate);

  const commentTemplateHTML = commentTemplateFn(
    {'name': commenterName, 'text': commenterText}
  );

  commentDiv.innerHTML += commentTemplateHTML;
}
