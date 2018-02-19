function createPost() {
  var postTitle = document.getElementById('title').value
  var postAuthor = document.getElementById('author').value
  var post = document.getElementById('content').value

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById('post-template').innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var section = postTemplate({'title': postTitle, 'body': post, 'poster': postAuthor})
  var commentsSection = commentsTemplate()

  var postElement = document.getElementById("post")
  postElement.innerHTML = section
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection

}



function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)
  var commentText = document.getElementById("commentText").value
  var commenterName = document.getElementById("commenter").value
  var commentsSection = document.getElementById("comments")
  commentsSection.innerHTML += commentTemplate({"commenter": commenterName, "body": commentText})
}
