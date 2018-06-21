function createPost() {
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  let postTitle = document.getElementById('postTitle').value;
  let postAuthor = document.getElementById('postAuthor').value;
  let postBody = document.getElementById('postBody').value;

  let postTemplateHTML = postTemplate({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});
  let post = document.getElementById('post');

  let commentsArea = commentsTemplate();

  post.innerHTML += postTemplateHTML;
  post.getElementsByTagName('footer')[0].innerHTML += commentsArea;
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let commentText = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenterName").value;

  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenterName': commenterName, 'commentText': commentText });
}
