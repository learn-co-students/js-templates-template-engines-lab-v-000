function createPost() {
  const postAuthor = document.getElementById("postAuthor").value //the value is null
  const postText = document.getElementById("postText").value
  const postTitle = document.getElementById("postTitle").value

  const pageTemplate = document.getElementById("page-template").innerHTML
  const postTemplate = document.getElementById("post-template").innerHTML
  const commentForm = document.getElementById("comments-template").innerHTML

  let commentTemplateFn = _.template(commentForm)
  let pageTemplateFn = _.template(pageTemplate)
  let postTemplateFn = _.template(postTemplate)

  let postDiv = document.getElementById("postHTML")

  let postTemplateHTML = postTemplateFn({'postTitle': postTitle, 'postAuthor': postAuthor, 'postText': postText})
  postDiv.innerHTML += pageTemplateFn()

  let newPostDiv = document.getElementById("post")
  newPostDiv.innerHTML += postTemplateHTML

  let commentDiv = document.getElementById("sidebar")
  commentDiv.innerHTML += commentTemplateFn()
}

function postComment() {
  const commentAuthor = document.getElementById("commentAuthor").value
  const commentText = document.getElementById("commentText").value

  const pageTemplate = document.getElementById("page-template").innerHTML
  const commentTemplate = document.getElementById("comment-template").innerHTML

  let pageTemplateFn = _.template(pageTemplate)
  let commentTemplateFn = _.template(commentTemplate)

  let sidebarDiv = document.getElementById("sidebarHTML")

  let commentTemplateHTML = commentTemplateFn({'commentText': commentText, 'commentAuthor': commentAuthor})

  sidebarDiv.innerHTML += commentTemplateHTML
}
