function createPost(){
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate =  _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById("postTitle").value;
  var content = document.getElementById("postContent").value;
  var author =  document.getElementById("postAuthor").value;
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  var commentsTemplateHTML = commentsTemplate();
  var commentsDiv = document.getElementsByTagName("main")[0]
  commentsDiv.innerHTML += commentsTemplateHTML

  var postDiv = document.getElementById("post");

  var templateHTML = postTemplate({ 'title': title, 'body': content, 'author': author });
  postDiv.innerHTML += templateHTML
}

function postComment(){
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  document.getElementById("comments").innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter});
}
