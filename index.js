
function createPost() {

  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  //create a new page to append this post
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  document.getElementById("page").innerHTML += pageTemplate();

  //add this post to the page
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  document.getElementById("post").innerHTML += postTemplate({ 'title': title, 'author': author, 'postBody': postBody });

  //add comment form
  var commentTemplate = _.template(document.getElementById("comments-template").innerHTML);
  document.getElementById("page").getElementsByTagName("footer")[0].innerHTML = commentTemplate();
}


function postComment() {

  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenter").value;

  //create a new comment
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  document.getElementById("comments").innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter });

}
