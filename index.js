function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
  var postTitle = document.getElementById("postTitle").value
  var postAuthor = document.getElementById("postAuthor").value
  var postBody = document.getElementById("postBody").value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var blogSec = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor })
  var commentsSec = commentsTemplate()
  var postElement = document.getElementById("post")

  postElement.innerHTML = blogSec
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSec
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)
  var commentText = document.getElementById("commentText").value
  var commenterName = document.getElementById("commenter").value
  var commentsSec = document.getElementById("comments")

  commentsSec.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText })
}
