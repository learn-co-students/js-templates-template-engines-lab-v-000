

function postComment() {
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML)
  
  let commentText = document.getElementById('commentText').value

  let commenterName = document.getElementById('commenterName').value

  let comment = commentTemplate({'name': commenterName, 'comment': commentText})

  let commentSection = document.getElementById("comments")

  commentSection.innerHTML += comment

}

function createPost() {

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate =  _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  var postTitle = document.getElementById("postTitle").value
  var postAuthor = document.getElementById("postAuthor").value
  var postBody = document.getElementById("postBody").value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  let postSection = postTemplate({ 'title': postTitle, 'body': postBody, 'author': postAuthor});

  let commentsSection = commentsTemplate()

  let postElement = document.getElementById("post");

  postElement.innerHTML = postSection
  postElement.getElementsByTagName('footer')[0].innerHTML += commentsSection

}
