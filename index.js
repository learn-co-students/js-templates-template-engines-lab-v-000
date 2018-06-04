function createPost() {
  const pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  const pageHTML = pageTemplate({
    "sidebar": "Sidebar", "post": postHTML(), "comments": commentsHTML()
  })

  const page = document.getElementById("main")
  page.innerHTML += pageHTML
}

function postHTML() {
  const postTemplate = _.template(document.getElementById("post-template").innerHTML)

  const postContent = {
    "title": document.getElementById("postTitle").value,
    "body": document.getElementById("postBody").value,
    "author": document.getElementById("postAuthor").value
  }

  return postTemplate(postContent)
}

function commentsHTML() {
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
  return commentsTemplate({})
}

function postComment() {
  const commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  const postHTML = commentTemplate({
    "comment": document.getElementById("commentText").value,
    "commenter": document.getElementById("commenter").value
  })

  const comments = document.getElementById("comments")
  comments.innerHTML += postHTML
}
