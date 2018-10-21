function createPost() {
  // create template functions
  const pageTemplate = _.template((document.getElementById('page-template').innerHTML));
  const postTemplate = _.template((document.getElementById('post-template').innerHTML));
  const commentsTemplate = _.template((document.getElementById('comments-template').innerHTML));
  
  const postTitle = document.getElementById('postTitle').value;
  const postAuthor = document.getElementById('postAuthor').value;
  const postText = document.getElementById('postText').value;

  document.getElementsByTagName('main')[0].innerHTML = pageTemplate();

const blogSection = postTemplate({ 'title': postTitle, 'body': postText, 'poster': postAuthor })
const commentsSection = commentsTemplate();
const postElement = document.getElementById('post');

postElement.innerHTML = blogSection;
postElement.getElementsByTagName('footer')[];

}

// get blog values
function postComment() {
  const commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  const commentText = document.getElementById('commentText').value;
  const commentor = document.getElementById('commentor').value;

  const commentsSection = document.getElementById('comments');

  commentsSection.innerHTML += commentTemplate({ 'comment': commentText, 'commentor': commentor })
}
