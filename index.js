

function createPost() {
  let title = document.getElementById('postTitle').value;
  let post = document.getElementById('postText').value;
  let author = document.getElementById('postAuthor').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let templateFn = _.template(postTemplate);

  let postsDiv = document.getElementById('posts');

  let templateHTML = templateFn({ title: title, post: post, author: author });

  postsDiv.innerHTML += templateHTML;

  refreshPage();
}


function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  commentsDiv.innerHTML += templateHTML;

  refreshPage();
}

function refreshPage() {
  let posts = document.getElementById('posts').value;
  let comments = document.getElementById('comments').value;
  let sidebar = document.getElementById('sidebar').value;

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let templateFn2 = _.template(pageTemplate);

  let pageDiv = document.getElementById('page-template');

  let templateHTML2 = templateFn2({ posts: posts, comments: comments, sidebar: sidebar });

  pageDiv.innerHTML = templateHTML2;
}