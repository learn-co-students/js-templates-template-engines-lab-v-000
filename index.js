function createPost () {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var author = document.getElementById("author").value;
  
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var page = pageTemplate();
  document.getElementsByTagName("main")[0].innerHTML += page
  
  var blog = postTemplate({ 'title': title, 'content': content, 'author': author});
  
  var post = document.getElementById("post");
  post.innerHTML = blog;

  var commentSection = document.getElementById("comments-section");
  commentSection.innerHTML = commentsTemplate();
  
}

function postComment () {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commenter = document.getElementById("commenter").value;
  var commentContent = document.getElementById("comment-content").value;
  
  var commentsDiv = document.getElementById("comments");
  
  var comment = commentTemplate({'comment': commentContent, 'commenter': commenter});
  
  commentsDiv.innerHTML += comment;
}