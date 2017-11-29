function createPost () {
  var post = document.getElementById("post").value;
  var postTitle = document.getElementById("postTitle").value;
  var poster = document.getElementById("poster").value;

  var postTemplate =  _.template(document.getElementById('post-template').innerHTML);
  var pageTemplate =  _.template(document.getElementById('page-template').innerHTML);
  var commentsTemplate =  _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'postTitle': postTitle, 'post': post, 'poster': poster });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;

}

function postComment () {
  var commenter = document.getElementById('commenter').value;
  var comment = document.getElementById('comment').value;

  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  var comments = document.getElementById('comments');

  comments.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });

}
