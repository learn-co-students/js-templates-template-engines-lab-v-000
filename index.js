function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
 
  var commentTemplate = document.getElementById("page-template").innerHTML;
 

  var templateFn = _.template(commentTemplate);
 
  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 
  commentsDiv.innerHTML += templateHTML;
}