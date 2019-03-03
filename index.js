function createPost() {
  let postTitle = document.getElementById('postTitle').value;
  let postBody = document.getElementById('postBody').value;
  let postAuthor = document.getElementById('postAuthor').value;

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageFn = _.template(pageTemplate);

  let postTemplate = document.getElementById('post-template').innerHTML;
  let postFn = _.template(postTemplate);

  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentsFn = _.template(commentsTemplate);

  document.getElementsByTagName('main')[0].innerHTML += pageFn();

  let postTemplateHTML = postFn({ postTitle: postTitle, postBody: postBody, postAuthor: postAuthor });

  let commentsTemplateHTML = commentsFn();

  let postElement = document.getElementById('post');

  postElement.innerHTML = postTemplateHTML + commentsTemplateHTML;

}

function postComment() {
  let commentAuthor = document.getElementById('commentAuthor').value;
  let commentBody = document.getElementById('commentBody').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let commentFn = _.template(commentTemplate);
  let commentTemplateHTML = commentFn({commentAuthor: commentAuthor, commentBody: commentBody});

  document.getElementById('comments').innerHTML += commentTemplateHTML;
}
