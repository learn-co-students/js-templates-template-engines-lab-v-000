function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);

  var postTitle = document.getElementById("blogTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postbody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
 
 var blogSection = postTemplate({'title': postTitle, 'body': postBody, 'poster': postAuthor});
 var postElement = document.getElementById("post");
 var commentsDiv = commentsTemplate();

 postElement.innerHTML = blogSection;
 postElement.getElementsByTagName("footer")[0].innerHTML = commentsDiv;
}



function postComment() {
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;
  
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  //var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");
  var templateHTML = commentTemplate({ 'commenter': commenter, 'comment': comment, });
  commentsDiv.innerHTML += templateHTML;
}