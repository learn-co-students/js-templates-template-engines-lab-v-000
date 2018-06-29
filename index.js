function createPost(){
  var postTitle = document.getElementById('postTitle').value;
  var postAuthor = document.getElementById('postAuthor').value;
  var postBody = document.getElementById('postBody').value;

  const pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  const postTemplate = _.template(document.getElementById('post-template').innerHTML);
  const commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();
  const postElement = postTemplate({"title": postTitle, "body": postBody, "author": postAuthor });

  document.getElementById('post').innerHTML = postElement

  const commentsSection = commentsTemplate();
  document.getElementsByTagName("footer")[0].innerHTML += commentsSection;
}


function postComment(){
  const commentAuthor = document.getElementById('commentAuthor').value;
  const commentText = document.getElementById('commentText').value;
  console.log(commentAuthor)
  console.log(commentText)

  const commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  const commentsSection = document.getElementById('comments');
  console.log(commentsSection);
  commentsSection.innerHTML += commentTemplate({ 'commentAuthor': commentAuthor, 'commentText': commentText });


}
