function createPost(){

  let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  let postTemplate = _.template(document.getElementById("post-template").innerHTML)
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  let postTitle = document.getElementById("postTitle").value
  let postBody = document.getElementById("postBody").value
  let postAuthor = document.getElementById("postAuthor").value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  let postContent = postTemplate({ 'title': postTitle, 'body': postBody, 'author': postAuthor })
  let commentsContent = commentsTemplate()

  let postElement = document.getElementById("post")
  postElement.innerHTML = postContent
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsContent

}

function postComment(){

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  let commentText = document.getElementById("commentText").value
  let commentAuthor = document.getElementById("commentAuthor").value

  let commentsSection = document.getElementById("comments")
  commentsSection.innerHTML += commentTemplate({ 'commenter': commentAuthor, 'comment': commentText })

}
