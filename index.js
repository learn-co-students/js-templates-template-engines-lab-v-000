function createPost() {
  // getting HTML and creating templates for each
  var pageHTML = document.getElementById('page-template').innerHTML;
  var pageTemplate = _.template(pageHTML);

  var postHTML = document.getElementById('post-template').innerHTML;
  var postTemplate = _.template(postHTML);

  var commentsHTML = document.getElementById('comments-template').innerHTML;
  var commentsTemplate = _.template(commentsHTML);

  // get blog values
    var postTitle = document.getElementById("postTitle").value;
    var postAuthor = document.getElementById("postAuthor").value;
    var post = document.getElementById("postBody").value;

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

    var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
    var commentsSection = commentsTemplate();
    var postElement = document.getElementById("post");

    postElement.innerHTML = blogSection;
    postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentHTML = document.getElementById('comment-template').innerHTML;
  var commentTemplate = _.template(commentHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById('commenter').value;

  var commentsSection = document.getElementById('comments');
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
