function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

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
  //  create template functions
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  // get blog values
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': title, 'body': body, 'author': author });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;

}
