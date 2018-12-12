
function createPost() {
  let authorName = document.getElementById('authorName').value;
  let postTitle = document.getElementById('postTitle').value;
  let postBody = document.getElementById('postBody').value;
 
  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate);
  let postHTML = postTemplateFn({ authorName: authorName, postTitle: postTitle, postBody: postBody });
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);
  let pageHTML = pageTemplateFn({ postHTML: postHTML });

  // Add area for comments
  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);
  let commentsHTML = commentsTemplateFn();

  document.querySelector('main').innerHTML += pageHTML += commentsHTML;
}

function postComment() {
  let commenterName = document.getElementById('commenterName').value;
  let commentBody = document.getElementById('commentBody').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let commentTemplateFn = _.template(commentTemplate);
  let commentsHTML = commentTemplateFn({ comment: commentBody, commenter: commenterName });

  document.querySelector('#comments').innerHTML += commentsHTML;
}
