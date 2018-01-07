function createPost() {

  // get from form
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value



  // var postTemplate = document.getElementById("post-template").innerHTML;
  // var templateFn = _.template(postTemplate)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

    var blogDiv = postTemplate({ 'title': postTitle, "body": postBody, 'poster': postAuthor });
    var commentsDiv = commentsTemplate();

    var postElement = document.getElementById("post");

postElement.innerHTML = blogDiv;
postElement.getElementsByTagName("footer")[0].innerHTML = commentsDiv;
}



// function postComment() {
//
//   var commentText = document.getElementById("commentText").value;
//    var commenterName = document.getElementById("commenter").value;
//
//   var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)
//
//   //execute template function with JSON object for the interpolated values
//    var templateHTML = commentTemplate({ 'commenter': commenterName, 'comment': commentText });
//
//   var commentsDiv = document.getElementById("comments")
//   commentsDiv.innerHTML += templateHTML;
// }

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
