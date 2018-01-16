function createPost() {
  // templates
  const commentsTemplate = document.getElementById("comments-template").innerHTML;
  const commentsTemplateFn = _.template(commentsTemplate);

  const pageTemplate = document.getElementById("page-template").innerHTML;
  const pageTemplateFn = _.template(pageTemplate);

  const postTemplate = document.getElementById("post-template").innerHTML;
  const postTemplateFn = _.template(postTemplate);

  // the blog post values
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;
  const author = document.getElementById("postAuthor").value;

  const main = document.getElementsByTagName('main')[0];
  main.innerHTML += pageTemplateFn();

  const templateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author });

  const postDiv = document.getElementById("post");

  postDiv.innerHTML = templateHTML;

  const postFooter = document.querySelector('footer');
  postFooter.innerHTML = commentsTemplateFn();
}

function postComment() {

  const commenter = document.getElementById("commenterName").value;
  const comment = document.getElementById("commentText").value;
  // template
  const commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  const templateFn = _.template(commentTemplate);
  const templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  const commentsDiv = document.getElementById("comments-template");

  commentsDiv.innerHTML += templateHTML;
}
