function createPost() {
  // template
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  let postTitle = document.getElementById('postTitle').value;
  let postAuthor = document.getElementById('postAuthor').value;
  let main = document.querySelector('main');

  let postFn = postTemplate({ title: postTitle, author: postAuthor, comments: commentsTemplate() });
  let pageFn = pageTemplate({ post: postFn});
  main.innerHTML += pageFn;
}

function postComment() {
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  let commentBody = document.getElementById('commentBody').value;
  let commentAuthor = document.getElementById('commentAuthor').value;
  let comments = document.getElementById('comments');

  let commentFn = commentTemplate({ body: commentBody, author: commentAuthor });
  comments.innerHTML += commentFn;
}






