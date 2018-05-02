function createPost() {
  let pageTemplate = document.getElementById('page-template').innerHTML
  let postTemplate = document.getElementById('post-template').innerHTML
  let commentsTemplate = document.getElementById('comments-template').innerHTML

  let pageTemplateFn = _.template(pageTemplate)
  let postTemplateFn = _.template(postTemplate)
  let commentsTemplateFn = _.template(commentsTemplate)

  let title = document.getElementById('postTitle').value
  let body = document.getElementById('postBody').value
  let author = document.getElementById('postAuthor').value

  document.getElementsByTagName('main')[0].innerHTML += pageTemplateFn()

  let postTemplateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author })

  let commentsSection = commentsTemplateFn()

  let postElement = document.getElementById('post')

  postElement.innerHTML += postTemplateHTML

  postElement.getElementsByTagName('footer')[0].innerHTML += commentsSection
}

function postComment() {
  let commenter = document.getElementById('commenterName').value
  let comment = document.getElementById('commentText').value
  let commentTemplate = document.getElementById('comment-template').innerHTML
  let commentTemplateFn = _.template(commentTemplate)
  let commentsDiv = document.getElementById('comments')
  let commentTemplateHTML = commentTemplateFn({'comment': comment, 'commenter': commenter})
  commentsDiv.innerHTML += commentTemplateHTML
}
