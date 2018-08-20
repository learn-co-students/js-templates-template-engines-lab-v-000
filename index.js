function createPost() {
  const page = document.getElementById('page-template').innerHTML;
  const post = document.getElementById('post-template').innerHTML;
  const comments = document.getElementById('comments-template').innerHTML;

  const pageTemplate = _.template(page);
  const postTemplate = _.template(post);
  const commentsTemplate = _.template(comments);

  const postTitle = document.getElementById("postTitle").value;
  const postAuthor = document.getElementById("postAuthor").value;
  const postBody = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  const blogSection = postTemplate({'title': postTitle, 'body': postBody, 'author': postAuthor});
  const commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
};

function postComment() {
  const commenter = document.getElementById("commenterName").value;
  const comment = document.getElementById("commentText").value;

  const commentTemplate = document.getElementById("comment-template").innerHTML;

  const templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  const templateHTML = templateFn({'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += templateHTML;
}
