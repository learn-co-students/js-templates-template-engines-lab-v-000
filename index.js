function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postContent").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'postTitle': postTitle, 'postContent': post, 'postAuthor': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  const commentText = document.getElementById('commentText').value
  const commenterName = document.getElementById('commenterName').value
  
  const commentTemplate = document.getElementById('comment-template').innerHTML;

  const templateFn = _.template(commentTemplate);

  const commentDiv = document.getElementById('comments');

  const templateHTML = templateFn({'commentText': commentText, 'commenterName': commenterName});

  console.log(templateHTML)

  commentDiv.innerHTML += templateHTML;
}