
function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementByID("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementByID("comment-template").innerHTML);

  var postTitle = document.getElementByID("postTitle").value;
  var postAuthor = document.getElementByID("postAuthor").value;
  var post = document.getElementByID("postBody").value;
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  const blogSection = postTemplate({'title': postTitle, 'body': post, 'poster': postAuthor});
  const commentsSection = commentsTemplate();
  const postElement = document.getElementByID("post");

   postElement.innerHTML = blogSection;
   postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementByID("comment-template").innerHTML);

  var commentText = document.getElementByID("commentText").value;
  var commenterName = document.getElementByID("commenter").value;

  var commentsSection = document.getElementByID("comments"); commentsSection.innerHTML += commentTemplate({'commenter': commenterName, 'comment': commentText});
}
