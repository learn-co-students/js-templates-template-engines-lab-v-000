function createPost() {
  // get submitted value
  const title = document.getElementById('postTitle').value;
  const author = document.getElementById('postAuthor').value;
  const body = document.getElementById('postBody').value;

  //create template function with lodash
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
  const commenter = document.getElementById('commenter').value;
  const comment = document.getElementById('commentText').value;

  const commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  const commentsSection = document.getElementById('comments');
  console.log(commentsSection);
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });

}
