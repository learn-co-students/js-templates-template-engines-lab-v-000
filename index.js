function createPost() {
  const pageTemplate = _.template(document.querySelector('#page-template').innerHTML,);
  const postTemplate = _.template(document.querySelector('#post-template').innerHTML,);
  const commentsTemplate = _.template(document.querySelector('#comments-template').innerHTML,);

  const postTitle = document.querySelector('#postTitle').value;
  const postAuthor = document.querySelector('#postAuthor').value;
  const post = document.querySelector('#postBody').value;

  document.querySelector('main').innerHTML += pageTemplate();

  const blogSection = postTemplate({
    title: postTitle,
    body: post,
    poster: postAuthor,
  });
  const commentsSection = commentsTemplate();
  const postElement = document.querySelector('#post');

  postElement.innerHTML = blogSection;
  postElement.querySelector('footer').innerHTML = commentsSection;
}

function postComment() {
  const commentTemplate = _.template(document.querySelector('#comment-template').innerHTML,);

  const commentText = document.querySelector('#commentText').value;
  const commenterName = document.querySelector('#commenter').value;

  const commentsSection = document.querySelector('#comments');
  commentsSection.innerHTML += commentTemplate({
    commenter: commenterName,
    comment: commentText,
  });
}
