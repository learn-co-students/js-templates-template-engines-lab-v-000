function createPost() {
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;
  // var postsDiv = document.getElementById("posts")


  var pageTemplate =  _.template(document.getElementById("page-template").innerHTML);
  var postTemplate =  _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate =  _.template(document.getElementById("comments-template").innerHTML);

  //append to the page
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  //append to the posts
  var postTemplateHTML = postTemplate({ 'title': title, 'body': body, 'author': author });
  var commentsTemplateHTML = commentsTemplate();
  var postElement = document.getElementById("post");
  postElement.innerHTML = postTemplateHTML
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsTemplateHTML;

}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsTemplateHTML = document.getElementById("comments");
  commentsTemplateHTML.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}