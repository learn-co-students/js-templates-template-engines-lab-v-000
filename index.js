let post = {
  content: null,
  comments: []
}

function createPost() {
  let newPost = document.getElementById("post-content").value
  post.content = newPost
  renderPage()
}

function postComment() {
  let newComment = document.getElementById("comment-content").value
  post.comments.push(newComment)
  renderPage()
}

function renderPage() {
  const pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  const postTemplate = _.template(document.getElementById("post-template").innerHTML)
  const commentTemplate = _.template(document.getElementById("comment-template").innerHTML)
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
  let postContent = post.content

  let commentsListHtml = post.comments.map(comment => commentTemplate({
    comment
  })).join("\n")

  let commentsHtml = commentsTemplate({
    commentsListHtml
  })

  let postHtml = postTemplate({
    commentsHtml,
    postContent
  })

  let pageHtml = pageTemplate({
    postHtml
  })

  let page = document.querySelector("#page")
  page.innerHTML = pageHtml
}
