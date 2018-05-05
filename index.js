function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  
  var poster = document.getElementById("posterName").value;
  var title = document.getElementById("postTitle").value;
  var post = document.getElementById("postText").value;
 
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var mainSection = postTemplate({ 'title': title, 'post': post, 'poster': poster });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = mainSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
 
  var commentTemplate = document.getElementById("comment-template").innerHTML;
 
  var templateFn = _.template(commentTemplate);
 
  var commentsDiv = document.getElementById("comments");
 
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 
  commentsDiv.innerHTML += templateHTML;
}
