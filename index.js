function createPost() {

  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;


  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var templateHTML = postTemplate({ 'title': title, 'body': body, 'author': author });
  var commentsSection = commentsTemplate();
  var postDiv = document.getElementById("post");

  postDiv.innerHTML = templateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {

  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("comment").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });
}
