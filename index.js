function createPost() {
  // create template functions
  var pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);
  var postTemplateFn = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML);

  // get blog values
  var postAuthor = document.getElementById('postAuthor').value;
  var postTitle = document.getElementById('postTitle').value;
  var postBody = document.getElementById('postBody').value;

  document.getElementsByTagName('main')[0].innerHTML += pageTemplateFn();

  var postTemplateHTML = postTemplateFn({ 'body': postBody, 'author': postAuthor, 'title': postTitle });
  var commentsSection = commentsTemplateFn();
  var postElement = document.getElementById('post');

  postElement.innerHTML = postTemplateHTML;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection;

}

function postComment() {
  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  var commentText = document.getElementById('comment').value;
  var commenterName = document.getElementById('commenter').value;

  var commentsDiv = document.getElementById('comments');
  commentsDiv.innerHTML += commentTemplateFn({ 'comment': comment, 'commenter': commenter });

}
