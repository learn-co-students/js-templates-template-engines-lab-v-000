function setPage() {
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let templateFn = _.template(pageTemplate);
  let pageContainer = document.querySelector('main');
  let templateHTML = templateFn();
  pageContainer.innerHTML += templateHTML;
}

function addCommentForm() {
  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let templateFn = _.template(commentsTemplate);
  let container = document.getElementById('post');
  let templateHTML = templateFn();
  container.innerHTML += templateHTML;
  document.getElementById('createComment').addEventListener('submit', function(e) {
    e.preventDefault();
  })
}

function createPost() {
  let postTitle = document.getElementById('postTitle').value;
  let postBody = document.getElementById('postText').value;
  let postAuthor = document.getElementById('postAuthor').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let templateFn = _.template(postTemplate);
  setPage();
  let postContainer = document.getElementById('post');
  let templateHTML = templateFn({title: postTitle, body: postBody, author: postAuthor});
  postContainer.innerHTML += templateHTML;
  addCommentForm();
}

function postComment() {
  let comment = document.getElementById('commentText').value;
  let commenter = document.getElementById('commenterName').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentContainer = document.getElementById('commentList');
  let templateHTML = templateFn({comment: comment, commenter: commenter});
  commentContainer.innerHTML += templateHTML;
}
