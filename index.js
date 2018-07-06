function createPost() {
  const postTemplate = _.template(document.getElementById("post-template").innerHTML);
  const postTitle = document.getElementById('postTitle').value;
  const postBody = document.getElementById('postBody').value;
  const postAuthor = document.getElementById("postAuthor").value;

  const blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });

  const postElement = document.getElementById("post");
  postElement.innerHTML += blogSection;
}

function createComment() {
  const commentTemplate = _.template(document.getElementbyId('comment-template').innerHTML);
  const comment = document.getElementById('comment').value;
  const commenter = document.getElementById('commenter').value;

  const commentSection = commentTemplate({'comment': comment, 'commenter': commenter});
  const commentElement = document.getElementById('comments')
  commentElement.innerHTML += commentSection;
}
