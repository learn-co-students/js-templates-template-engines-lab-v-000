function createPost(){
  const author = document.getElementById("postAuthor").value
  const title = document.getElementById("postTitle").value
  const body = document.getElementById("postBody").value

  let postTemplate = document.getElementById("post-template").innerHTML
  const postTemplateFn = _.template(postTemplate)

  let pageTemplate = document.getElementById("page-template").innerHTML
  const pageTemplateFn = _.template(pageTemplate)

  let commentsTemplate = document.getElementById("comments-template").innerHTML

  const postTemplateHTML = postTemplateFn({'author': author, 'title': title, 'body': body})
  const pageTemplateHTML = pageTemplateFn({'post': postTemplateHTML, 'comments': commentsTemplate })

  const mainHTML = document.getElementsByTagName('main')[0]
  mainHTML.innerHTML += pageTemplateHTML
}

function postComment(){
  const commenter = document.getElementById("commenter").value
  const commentBody = document.getElementById("commentBody").value

  let commentTemplate = document.getElementById("comment-template").innerHTML
  const commentTemplateFn = _.template(commentTemplate)

  const commentTemplateHTML = commentTemplateFn({'commenter': commenter, 'commentBody': commentBody})

  let commentsSection = document.getElementById("comments")
  debugger;
  commentsSection.innerHTML += commentTemplateHTML
}
