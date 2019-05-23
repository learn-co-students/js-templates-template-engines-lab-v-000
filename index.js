function createPost() {

  // creating post template
  let postTitle = document.getElementById('postTitle').value;
  let postBody = document.getElementById('postBody').value;
  let postAuthor = document.getElementById('postAuthor').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate);

  let postHTML = postTemplateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor });

  // creating page template and inserting post
  let pageHTML = createPage(postHTML);

  // creating comment section
  let commentSectionHTML = createCommentSection();

  // insert created post elements
  document.body.innerHTML += (pageHTML + commentSectionHTML);
}

function createPage(postHTML) {
  // creating and returning the page HTML and inserting post
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);
  let pageHTML = pageTemplateFn({ 'post': postHTML });

  return pageHTML;
}

function createCommentSection() {
  // creating and returning the comment section
  let commentSectionTemplate = document.getElementById('comments-template').innerHTML;
  let commentSectionTemplateFn = _.template(commentSectionTemplate)
  return commentSectionTemplateFn();
}


function postComment() {
  // creating comments and appending to comments section
  let commenterName = document.getElementById('commenterName').value;
  let commenterText = document.getElementById('commenterText').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let commentTemplateFn = _.template(commentTemplate);
  let commentHTML = commentTemplateFn({ 'commenterText': commenterText, 'commenterName': commenterName });

  document.getElementById('comments').innerHTML += commentHTML;
}
