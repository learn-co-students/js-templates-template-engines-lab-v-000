function createPost() {
  let postAuthor = document.getElementById('postAuthor').value
  let postTitle = document.getElementById('postTitle').value
  let postBody = document.getElementById('postBody').value
  let pageTemplate = document.getElementById('page-template').innerHTML
  let pageTemplateFn = _.template(pageTemplate)
  let pageTemplateHTML = pageTemplateFn()
  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate)
  let postTemplateHTML = postTemplateFn({ postAuthor: postAuthor,
  postTitle: postTitle, postBody: postBody})
  let commentsTemplate = document.getElementById('comments-template').innerHTML
  let commentsTemplateFn = _.template(commentsTemplate)
  let commentsTemplateHTML = commentsTemplateFn()
  let docMain = document.querySelector('main')
  docMain.innerHTML += pageTemplateHTML
  document.getElementById("post").innerHTML += postTemplateHTML
  document.getElementById("post").innerHTML += commentsTemplateHTML
}
function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentsDiv = document.getElementById('comments');
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
  commentsDiv.innerHTML += templateHTML;
}
