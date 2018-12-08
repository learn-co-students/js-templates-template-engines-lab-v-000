
function createPost() {

  const title = document.getElementById('postTitle').value;
  const author = document.getElementById('postAuthor').value;
  const body = document.getElementById('postBody').value;

  const pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  const postTemplate = _.template(document.getElementById('post-template').innerHTML);
  const commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  const blogSection = postTemplate({ 'title': title, 'body': body, 'author': author });
  const commentsSection = commentsTemplate();
  const postElement = document.getElementById('post');

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;
}


function postComment() {
  const commentAuthor = document.getElementById('commentAuthor').value;
  const commentText = document.getElementById('commentText').value;
  console.log(commentAuthor)
  console.log(commentText)

  const commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  const commentsSection = document.getElementById('comments');
  console.log(commentsSection);
  commentsSection.innerHTML += commentTemplate({ 'commentAuthor': commentAuthor, 'commentText': commentText });

}