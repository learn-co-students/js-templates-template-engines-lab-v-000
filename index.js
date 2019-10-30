function createPost() {
  const title = document.getElementById('postTitle').value;

  const author = document.getElementById('postAuthor').value;

  const content = document.getElementById('postBody').value;

  const pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);

  const postTemplateFn = _.template(document.getElementById('post-template').innerHTML);

  const commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += (pageTemplateFn());

  const postDiv = document.getElementById('post');

  const post = postTemplateFn({
    title: title,
    body: content,
    author: author,
  });

  postDiv.innerHTML += post;

  postDiv.getElementsByTagName('footer')[0].innerHTML += (commentsTemplateFn());
}

function postComment() {
  const commentInput = document.getElementById('comment').value;

  const author = document.getElementById('commentAuthor').value;

  const commentTemplateFn = _.template(document.getElementById('comment-template').innerHTML);

  const comment = commentTemplateFn({ comment: commentInput, commenter: author });

  const commentsDiv = document.getElementById('comments');

  commentsDiv.innerHTML += comment;
}
