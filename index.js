function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  //create template strings
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  let postTitle = document.getElementById('postTitle').value;
  let postAuthor = document.getElementById('postAuthor').value;
  let post = document.getElementById('postBody').value;

  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  let blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById('post');

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection;
}
