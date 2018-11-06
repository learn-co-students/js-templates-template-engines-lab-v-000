function createPost() {
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  let pageTemplate  = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  let postElement = document.getElementById('post');
  let blogSection = postTemplate({ title: title, body: body, author: author });
  let commentsSection = commentsTemplate();

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection;
}

function postComment(){
  let commenter = document.getElementById('commenter').value;
  let commentText = document.getElementById('commentText').value;

  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  let commentSection = commentTemplate({ commenter: commenter, comment: commentText });

  commentElement = document.getElementById("comments");
  commentElement.innerHTML += commentSection
}
