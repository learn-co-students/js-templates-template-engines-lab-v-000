function createPost() {
  let title = document.getElementById('blogTitle').value;
  let body = document.getElementById('blogBody').value;
  let author = document.getElementById('blogAuthor').value;

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let postTemplate = document.getElementById('post-template').innerHTML;
  let commentsTemplate = document.getElementById('comments-template').innerHTML;

  let pageTemplateFn = _.template(pageTemplate);
  let postTemplateFn = _.template(postTemplate);
  let commentsTemplateFn = _.template(commentsTemplate);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn()

  let postDiv = document.getElementById('post');

  let postTemplateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author });
  let commentsSection = commentsTemplateFn()

  postDiv.innerHTML += postTemplateHTML;
  postDiv.innerHTML = postTemplateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection
}

function postComment() {
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let commentTemplateFn = _.template(commentTemplate);

  let commentText = document.getElementById("commentText").value;
  let commenter = document.getElementById("commenter").value;

  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplateFn({ 'commenter': commenter, 'commentText': commentText });

}
