function createPost () {
  // blog values
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  // templates
  var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  var postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += pageTemplateFn();

  // template functions with JSON object
  var postTemplateHTML = postTemplateFn({ 'body': postBody, 'author': postAuthor, 'title': postTitle });
  var commentsSection = commentsTemplateFn();
  var postElement = document.getElementById('post');

  // append elements

  postElement.innerHTML = postTemplateHTML;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection;
}

function postComment () {
  // templates
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  // comment values
  var commentText = document.getElementById("comment").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsDiv = document.getElementById('comments');
  commentsDiv.innerHTML += commentTemplateFn({ 'comment': commentText, 'commenter': commenterName });
}
