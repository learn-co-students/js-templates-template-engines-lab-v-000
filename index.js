function createPost() {
  // create template functions
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  // get blog values
  let postTitle = document.getElementById('postTitle').value;
  let postAuthor = document.getElementById('postAuthor').value;
  let post = document.getElementById('postBody').value;

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  let blogSection = postTemplate({title: postTitle, body: post, author: postAuthor });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById('post');

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection;
}

function postComment() {
  // create comment template
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  // get comment values
  let comment = document.getElementById('comment').value;
  let commenter = document.getElementById('commenter').value;

  let commentsDiv = document.getElementById('comments');
  commentsDiv.innerHTML += commentTemplate({ comment: comment, commenter: commenter });
}