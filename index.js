function createPost() {
  // post values
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;

  // create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var main = document.getElementsByTagName("main")[0];

  main.innerHTML += pageTemplate();

  var postTemplateHTML = postTemplate({ 'title': title, 'body': body, 'author': author });
  var commentsTemplateHTML = commentsTemplate();

  var postDiv = document.getElementById("post");

  postDiv.innerHTML = postTemplateHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplateHTML;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commenter = document.getElementById("commenter").value;
  var commentText = document.getElementById("commentText").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': commentText });
}
